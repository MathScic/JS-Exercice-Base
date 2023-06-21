const validation = document.querySelector("btn-1");

validation.addEventListener("click", () => {
  console.log("click");
  colorChange();
});

function colorChange() {
  const nom = document.querySelector("input[placeholder=Nom]");
  const prenom = document.querySelector("input[placeholder=Prénom]");
}
