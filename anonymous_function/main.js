// * Uma função anônima é uma função sem nome.
// * Uma função anônima geralmente não está acessível após a sua criação.
// * Neste exemplo, a função anônima não tem nome entre a palavra-chave function e os parênteses ().
// * Como precisamos chamar a função anônima em algum momento, atribuímos essa função a uma variável, nesse caso à variável show.


// var show = function(){ 
//     console.log("Anonymous function") 
// } 
// show() 
 

//**************************************************************************************************** 

// Usando funções anônimas como argumentos de outras funções
// var t = 2000
// var anonymousFunction = function(){
//     console.log(`Excuted after ${t/1000} second`)
// }
// setTimeout(anonymousFunction , t)

//**************************************************************************************************** 

// Execução de função invocada imediatamente usando parâmetros
var person = {
    firstName: 'firstName',
    lastName: 'lastName'
};
(function () {
    console.log(`${person.firstName} ${person.lastName}`);
})(person);