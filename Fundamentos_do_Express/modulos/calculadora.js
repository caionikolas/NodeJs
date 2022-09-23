function soma(a, b){
  return a + b
}

function mult(a, b){
  return a * b
}

function sub(a, b){
  return a - b
}

function div(a, b){
  return a / b
}

//  module.exports = soma;   //Com isso posso usar essa funçãoe em qualquer parte do meu programa!

module.exports = {
  soma,
  mult,
  sub,
  div
}  //Para exportar varios arquivos de uma vez