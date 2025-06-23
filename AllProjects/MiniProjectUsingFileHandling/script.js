const fs=require('fs');
const Jimp=require('jimp');
let file=fs.readFileSync('image.png');
console.log(file);
let str=file.toString('base64');
console.log(str);


fs.writeFileSync("img.txt",str);

str=fs.readFileSync('img.txt',{encoding:'utf-8'});
let buffer=Buffer.from(str,'base64');
console.log(buffer);


fs.writeFileSync('image.png',buffer);


Jimp.read('image.png')
  .then(image => {
    return image
      .quality(60) // compress to 60% quality
      .writeAsync('image-small.jpg'); // save new file
  })
  .then(() => {
    console.log("Compressed image saved as image-small.jpg");
  })
  .catch(err => {
    console.error("Error:", err);
  });
