const validation = document.querySelector(".btn-1")
const nom = document.querySelector("button")




validation.addEventListener('click', () => {
console.log('click');
validation.innerHTML += '<div class="nom prenom"></div>'
validation.classList.remove('.nom','prenom')
nom
}) 









