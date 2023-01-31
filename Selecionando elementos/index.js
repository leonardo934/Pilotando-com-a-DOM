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