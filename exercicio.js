const prompt = require ('prompt-sync')()
const calculoImc = require ('./calculoimc')

const altura = Number(prompt('diga aqui a sua altura: '))
const peso = Number(prompt('diga o seu peso'))

const imc = calculoImc (peso,altura);