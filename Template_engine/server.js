const express = require('express');
const app = express();

// Setting view engine to hbs
app.set('view engine', 'hbs');

// Route
app.get('/', (req, res) => {
    res.render('index', {
        title: "Welcome to Handlebars!",
        message: "This is rendered using hbs."
    });
});

// Start the server
app.listen(8000, () => {
    console.log(`Server is running on http://localhost:8000`);
});
