// listFiles.js
const fs = require("fs");
const path = require("path");

function fillTheGallery(imageDir) {
  console.log("fill the gallery started");
  // let img = getFileNames(imageDir);
  let img = fs.readdirSync(imageDir);

  console.log("img returned");
  let saveImg = "";
  for (i in img) {
    console.log("for loop started");
    console.log(img[i]);

    let newImg = '<img src="images/' + img[i] + '" alt="" class="galImg" />';
    console.log(newImg);

    saveImg += newImg;
  }
  console.log(saveImg);

  return saveImg;
}
let info = fillTheGallery("./images");
console.log(info);
return info;
