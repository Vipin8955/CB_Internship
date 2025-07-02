const express=require('express');
const app=express();
const PORT=8000;
const multer=require('multer');


app.set('view engine','hbs');
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

function fileFilter (req, file, cb) { 
     console.log("Mimetype:", file.mimetype);
    if(file.mimetype==='image/jpeg'||file.mimetype==='image/jpg'||file.mimetype==='image/png'||file.mimetype==='image/webp')
        cb(null, true)
    else
        cb(null, false)

}
const upload=multer({storage,fileFilter});
app.get('/',(req,res)=>{
    res.render('index');
})

app.post('/',upload.single('image'),(req,res)=>{
    console.log(req.file);
    res.send("Ok");
})

app.listen(PORT,()=>{
    console.log("Server is Running on Port:",PORT);
})