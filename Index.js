const validation = document.querySelector("btn-1");
const nomPrenom = document.querySelector("nom_prenom")

validation.addEventListener("click", () => {
  console.log("click");
  let name = document.getElementById("#nom").value;
  alert(nom)
  let firstName = document.getElementById("#prenom").value;
  let age = document.getElementById("#age").value
})

validation.forEach((age) => {
  nomPrenom.classList.toggle("nom_prenom")
});
