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

const workingId = "ceGallery";
const imgClass = "ceImg";
const path = "./images/grafikk";
const baseName = "grafikk";
const first = "1";
const last = "31";
const format = ".jpg";

const galId = document.getElementById(workingId);
document.addEventListener("DOMContentLoaded", () => fillTheGallery());

debug.textContent += ",  id and event listener OK";

debug.textContent += ",  const ok";

function fillTheGallery() {
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
      '" alt="" class="' +
      imgClass +
      '" />';

    galId.innerHTML += stringToAdd;
    list.push(stringToAdd);
    debug.textContent += ",  " + list[i];
  }

  debug.textContent += ",  loop done";
}
