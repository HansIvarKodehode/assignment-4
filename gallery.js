// debug section
let debug = document.getElementById("debugMessage");
let debSecId = document.getElementById("debugSection");
let debugging = false;

if (debugging) {
  debSecId.style.display = "block";
} else {
  debSecId.style.display = "none";
}
debug.textContent += "debugging enabled";

let galId = document.getElementById("gallery");
document.addEventListener("DOMContentLoaded", () => fillTheGallery());

debug.textContent += ",  id and event listener OK";

const path = "./images";
const baseName = "01";
const first = "0";
const last = "10";
const format = ".jpg";

debug.textContent += ",  const ok";

function fillTheGallery() {
  let list = [];
  let i = first;

  galId.innerHTML = "";
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
      '" alt="" class="galImg" />';

    galId.innerHTML += stringToAdd;
    list.push(stringToAdd);
    debug.textContent += ",  " + list[i];
  }

  debug.textContent += ",  loop done";
}
