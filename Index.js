const validation = document.querySelector("button")

validation.addEventListener('click', () => {
console.log('click');
validation.innerHTML += '<div class=""></div>'
colorChange
}) 


function colorChange() {
    const nom = document.querySelector("input[placeholder=Nom]")
    const prenom = document.querySelector("input[placeholder=Prénom]")

    nom.addEventListener('input', () => {
        console.log('yes ');
        
    })
        
    prenom.addEventListener('input', () => {
        console.log('yes..');
        
    })
}






