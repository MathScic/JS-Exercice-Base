const validation = document.querySelector(".btn-1")
let nom = document.getElementById('Nom')
let prenom = document.getElementById('Prenom')

validation.addEventListener("click", () => {
    console.log("ok");
    nom.style.color = 'red'
    prenom.style.color = 'red'
})




