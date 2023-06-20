const validation = document.querySelector("button")

validation.addEventListener('click', () => {
console.log('click');
validation.innerHTML += '<div class="nom prenom"></div>'
}) 





    const nom = document.querySelector("input[placeholder=Nom]")
    const prenom = document.querySelector("input[placeholder=Prénom]")
    console.log(prenom);

    nom.addEventListener('input', () => {
        console.log('yes ');
        nom.classList.add("nom")
    })
    
    prenom.addEventListener('input', () => {
        console.log('yes..');
        prenom.classList.add("prenom")
    })









