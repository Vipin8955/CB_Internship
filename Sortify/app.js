require('dotenv').config();
const dns = require('dns');
// Set public DNS servers to prevent Windows SRV lookup failures with MongoDB Atlas
try {
  dns.setServers(['8.8.8.8', '1.1.1.1']);
} catch (e) {
  // Ignore in environments where setServers is restricted
}
const path = require('path');
const express = require('express');
const app = express();
const session = require('express-session');
const mongoose = require('mongoose');
const flash = require('connect-flash');
const passport = require('./auth/passport');
const mongoStore = require('connect-mongo');
const hbs = require('hbs');
const Vehicle = require('./models/vehicle.js');

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.set('trust proxy', 1);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const DB_PATH = process.env.DB_PATH || 'mongodb://127.0.0.1:27017/sortify';
const SECRET_KEY = process.env.SECRET_KEY || 'sortify_super_secret_session_key_2026';
const PORT = process.env.PORT || 8000;

async function startServer() {
  let sessionStore;
  try {
    await mongoose.connect(DB_PATH, { serverSelectionTimeoutMS: 6000 });
    console.log(`[MongoDB] Connected successfully to Atlas/DB`);
    sessionStore = mongoStore.create({
      client: mongoose.connection.getClient()
    });
  } catch (err) {
    console.warn(`[MongoDB Warning] Could not connect to MongoDB: ${err.message}`);
    console.warn(`[MongoDB Warning] Using in-memory session store. Provide a valid DB_PATH in .env for persistent database storage.`);
    sessionStore = new session.MemoryStore();
  }

  app.use(session({
    secret: SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    store: sessionStore
  }));

  app.use(flash());
  app.use(passport.initialize());
  app.use(passport.session());
  hbs.registerPartials(path.join(__dirname, '/views/partials'));

  const { isAuthenticated } = require('./middlewares/authentication.js');

  const staticRouter = require('./routes/staticRouter');
  app.use('/', staticRouter);
  app.use('/login', require('./routes/loginRouter'));
  app.use('/signup', require('./routes/signupRouter'));
  app.use('/logout', staticRouter);
  app.use('/profile', isAuthenticated, require('./routes/profileRouter'));
  app.use('/booking', isAuthenticated, require('./routes/bookingRouter.js'));
  app.use('/admin', isAuthenticated, require('./routes/adminRouter'));

  // Error handling middleware
  app.use((err, req, res, next) => {
    console.error('[App Error]', err);
    res.status(500).send('Internal Server Error: ' + err.message);
  });

  app.listen(PORT, () => {
    console.log(`🚀 Sortify server is running on http://localhost:${PORT}`);
  });
}

startServer();
