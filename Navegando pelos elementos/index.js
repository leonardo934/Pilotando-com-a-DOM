const el = document.querySelector('body')


console.log(el.lastElementChild)


const divum = document.createElement('div')
divum.innerHTML = "<big>Olá</big> <small>tudo bem???</small> primeiro"

const bodyum = document.querySelector('body')


bodyum.prepend(divum)




const divdois = document.createElement('div')
divdois.innerHTML = "Olá <small>tudo bem???</small> segundo"

const bodydois = document.querySelector('body')
const header = bodydois.querySelector('header')
bodydois.insertBefore(divdois,header.nextSibling)

bodydois.prepend(divdois)



function print() {
    console.log("Ola")
}



const h1tres = document.querySelector('.tres')

h1tres.addEventListener('click',print)

function print() {
    console.log('Pão')
}




const h1quatro = document.querySelector('.quatro')

h1quatro.addEventListener('click',print)

function print() {
    console.log('Pão')
}


h1quatro.addEventListener('click', function() {
    console.log('com')
})
h1quatro.addEventListener('click', function() {
    console.log('Queijo')
})



const inputdois = document.querySelector('.inputdois')

inputdois.onkeydown = function(event) {
    console.log(event.currentTarget.value)
}



























