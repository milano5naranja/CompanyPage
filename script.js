// soittopyynnön jättäminen

function soittopyyntö() {
  let nimi = prompt("Kirjoita nimesi.");
  let puhelinNumero = prompt("Kirjoita puhelinnumerosi.");

  alert("Kiitos " + nimi + ", otamme yhteyttä mahdollisimman pian!");
}

let contactButton = document.querySelector("button");

contactButton.addEventListener("click", soittopyyntö);

// käyttäjä viedään takaisin sivun alkuun

const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
