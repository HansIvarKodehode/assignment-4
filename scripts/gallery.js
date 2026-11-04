// debug section
const debug = document.getElementById("debugMessage");
const debSecId = document.getElementById("debugSection");
const debugging = false;

// debugging JS in vs code is a pain, so
// I have found it best to use the
// html doc as a debugger
if (debugging) {
  debSecId.style.display = "block";
} else {
  debSecId.style.display = "none";
}
debug.textContent += "debugging enabled";

const workingId = "gallery";
// let path = "./images";
// let baseName = "01";
// let first = "0";
// let last = "10";
// let format = ".jpg";

const galId = document.getElementById(workingId);
document.addEventListener("DOMContentLoaded", () => doTheThingDoTheGood());

debug.textContent += ",  id and event listener OK";

debug.textContent += ",  const ok";

// Need to change things up. The gallery site
// needs images from more than one subfolder

let megaList = [];
function doTheThingDoTheGood() {
  let pathCE = "./images/grafikk";
  let baseNameCE = "grafikk";
  let firstCE = "1";
  let lastCE = "31";
  let formatCE = ".jpg";
  let ce = fillTheGallery(pathCE, baseNameCE, firstCE, lastCE, formatCE);

  let pathKH = "./images/kh";
  let baseNameKH = "kh";
  let firstKH = "1";
  let lastKH = "59";
  let formatKH = ".jpg";
  let kh = fillTheGallery(pathKH, baseNameKH, firstKH, lastKH, formatKH);

  // megaList.push(ce);
  // megaList.push(kh);

  debug.textContent += ",  gHTMLc = " + megaList;
  debug.textContent +=
    ",                                                                      ghtmlc # 11 = " +
    megaList[10];

  megaList = fisherYatesShuffle(megaList);
  let i = 0;
  for (i in megaList) {
    galId.innerHTML += megaList[i];
  }
  console.log("it works");
}

// aka knuth shuffle. found on w3schools
function fisherYatesShuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function fillTheGallery(path, baseName, first, last, format) {
  let list = [];
  let i = first;

  // galId.innerHTML = "";
  debug.textContent += ",  loop starting";

  for (i; i <= last; i++) {
    let stringToAdd =
      '<img src="' +
      path +
      "/" +
      baseName +
      " (" +
      i +
      ")" +
      format +
      '" alt="this image is generated with javascript. No actual description is avilable" class="galImg" />';

    // galId.innerHTML += stringToAdd;
    megaList.push(stringToAdd);
    debug.textContent += ",  " + list[i];
  }

  debug.textContent += ",  loop done";
  return list;
}
