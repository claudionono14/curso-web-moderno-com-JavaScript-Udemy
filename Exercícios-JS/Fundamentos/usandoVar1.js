/** ############### ESCOPO ###############
 * VAR: Variavel de escopo global. Em qualquer parte do código ela é acessível, ao menos que seja criada em uma função.
 * 
 */
{{{{var sera = 'Será ????'}}}}

console.log(sera); //retorna o conteúdo da variável mesmo chamando-a fora do seu bloco de declaração

function teste () {
    var local = 123;
    console.log(local);
}
teste() // retorna 123, ou seja, executa normalmente a funcao.

console.log(local);/** Gera um erro no código pois a variável local foi criado no escopo de função, tornando-se
inacessível fora deste escopo. */
