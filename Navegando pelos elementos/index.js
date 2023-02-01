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


































