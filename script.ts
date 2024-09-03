//Exercício:
const input = document.querySelector('input')

const total = localStorage.getItem('total')
if (input && total) {
  input.value = total
  calcularGanho(Number(input.value))
}

function calcularGanho(value: number) {
  const p = document.querySelector('p')
  if (p) {
    p.innerText = `Ganho total: ${value + 100 - value * 0.2}`
  }
}

function totalMudou() {
  if (input) {
    localStorage.setItem('total', input.value)
    calcularGanho(Number(input.value))
  }
}

if (input) {
  input.addEventListener('keyup', totalMudou)
}

function normalizarTexto(texto: string) {
  return texto.trim().toLowerCase()
}

console.log(normalizarTexto(' DesigN '))


// AULA 2 - Anotação e Inferência:
let produto: string = 'Livro'
let preco: number = 200

preco = 300

const carro: {
  marca: string;
  portas: number;
} = {
  marca: 'Logitech',
  portas: 3
}

const barato: boolean | string = preco < 400 ? true : 'Produto caro'
console.log(barato)

function somar(a: number, b: number): number {
  return a + b
}

console.log(somar(2, 20))

const nintendo = {
  nome: 'Nintendo',
  preco: '2000',
}

function transformarPreco(produto: {nome: string; preco:string}) {
  produto.preco = 'R$' + produto.preco
  return produto
}

const produtoNovo = transformarPreco(nintendo)

console.log(produtoNovo)


//AULA 1:
// const total = 100

// function somar(a: number, b: number) {
//   return a + b
// }

// console.log(somar(2, 20))
