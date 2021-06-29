/** Atribuição por valor: É quando atribuímos valores do tipo primitivo à uma variável
 os tipos primitivos são string, number, boolean, null, undefined, symbol (new in ECMAScript 2015) */

 /** Atribuição por referência: É quando atribuímos valores do tipo NÃO primitivo à uma variável, por 
  exemplo, atribuindo um OBJETO LITERAL*/

/** UNDEFINED */
let valor; // Variável criada e NÃO INICIALIZADA
console.log(valor); // Retorna UNDEFINED

/** NULL: Trabalha com tipo de dados 'referência', ou seja, que aponta para um endereço de memória*/
valor = null; /** Null representa ausência de valor, ou seja, essa variável não aponta para nenhum
endereço de memória */

/** IS NOT DEFINED */
// console.log(valor2); 
/** retorna um erro no código com a mensagem "ReferenceError: valor2 is not defined".
Repare que, neste caso, a mensagem IS NOT DEFINED quer dizer que a variável 'valor2' não foi sequer DEFINIDA,
ou seja, não foi DECLARADA anteriormente.*/


//ERROS !!!
// valor = null;
// console.log(valor.toString()); // Não se pode acessar dados de uma variável do tipo Null


const produto = {};
console.log(produto.preco); //Retorna undefined pois a chave PREÇO não tem valor definido
console.log(produto); // retorna um objeto vazio "{}"
produto.preco = 10.50;
console.log(produto); // retorna { preco: 10.5 }.
delete produto.preco; // remove o atributo PREÇO do objeto PRODUTO
console.log(produto); // Agora ele retorna novamente o objeto vazio "{}"



