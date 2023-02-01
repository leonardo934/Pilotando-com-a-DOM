const el = document.querySelector('body')


console.log(el.lastElementChild)


const div = document.createElement('div')
div.innerHTML = "<big>Olá</big> <small>tudo bem???</small>"

const body = document.querySelector('body')


body.prepend(div)







































