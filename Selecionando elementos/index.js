const elementUm = document.getElementById('blog-title')

console.log(elementUm)




const elementDois = document.getElementsByClassName('one')

console.log(elementDois)



const elementtres = document.getElementsByTagName('h3')

console.log(elementtres)




const elementquatro = document.querySelector('.two')

console.log(elementquatro)





const elementcinco = document.querySelectorAll('.three')


elementcinco.forEach(el => console.log(el))



const elementseis = document.querySelector('.four')

console.log(elementseis.textContent)



const elementsete = document.querySelector('.five')

elementsete.innerText = "Pão com mandioca!"




const elementoito = document.querySelector('.six')

elementoito.innerHTML = "<big>Pão</big> <small>com</small> <big>Mandioca</big> <small>e</small>  <big>Quijo</big>"



const elementnove = document.querySelector('#one')
console.log(elementnove.value)
elementnove.value = "Outro valor"

const header = document.querySelector('header')
header.setAttribute('id', 'header')

const headerID = document.querySelector('#header')

console.log(headerID.getAttribute('class'))

header.removeAttribute('id')

header.setAttribute('class', 'bg header') 