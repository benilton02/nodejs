// var // declara uma variável, inicializando-a com um valor
// let // declara uma variável local de escopo, opcionalmente, inicializando-a com um valor
// const // uma vez atruído o valor da variável, não pode ser alterado


// *****************************************************************************************************
// *** Escopo de variável *** 
const number = 5000
if(true){
    var text = "vairável var dentro do if"
    console.log(text)
}

if(true){
    let msg = "vairável let dentro do if "
    console.log(msg)
}

console.log("Constante: " + number)
// console.log("Variável let for do if" + msg) // exemplo de como não usar a variável tipo let
// *****************************************************************************************************
