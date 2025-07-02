const express=require('express');
const app=express();
const PORT=8000;
const multer=require('multer');
const cloudinary = require('cloudinary').v2
const parser=new DatauriParser();

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

cloudinary.config({ 
        cloud_name: 'dhv2u97q3', 
        api_key: '664428384989461', 
        api_secret: 'f9JADzf7kuo6fWmZND6YFNVUwdk'
    });

function fileFilter (req, file, cb) { 
     console.log("Mimetype:", file.mimetype);
    if(file.mimetype==='image/jpeg'||file.mimetype==='image/jpg'||file.mimetype==='image/png'||file.mimetype==='image/webp')
        cb(null, true)
    else
        cb(null, false)
}
app.use(multer({storage,fileFilter}).single('image'));

app.get('/',(req,res)=>{
    res.render('index');
})

const ext=path.extname(req.file.originalname);
const fileUri=parser.format(ext,req.file.buffer);

app.post('/',(req,res)=>{
   cloudinary.uploader.upload(`${fileUri.content}`,(error, result)=>{
  console.log(result, error);
});
    console.log(req.file);
    res.send("Ok");
})

app.listen(PORT,()=>{
    console.log("Server is Running on Port:",PORT);
})