//Funcao sem retorno

function imprimirSoma(a, b) {
    console.log(a + b);
}

imprimirSoma(2,3); // IMPRIME o numéro 5 no console. Repare que esta função é SEM RETORNO
imprimirSoma(2); /** Imprime NaN na tela. SIM, passando apenas um parâmetro, o segundo recebe o valor
UNDEFINED executando assim a soma do inteiro 2 com um UNDEFINED gerando um resultado NaN.*/
imprimirSoma(); /** Imprime NaN na tela. pois estaremos somando UNDEFINED com UNDEFINED. */
imprimirSoma(2,3,4,5,6); /** Vai imprimir o número 5 novamente, pois os demais parâmetros após os 2
obrigatórios serão ignorados. */

//Funcao com retorno

function soma(a, b = 0) { /** b = 0: veio com a atualização do EcmaScript de 2015 e permite definir valores
    padrão para parâmetros de função, caso o mesmo não seja declarado*/  
    return a + b;
}

console.log(soma(3, 3)); //Retorna 6
console.log(soma(3));/** Retorna 3, pois vai somar 3 (primeiro parâmetro) com 0, que foi configurado
como padrão na função. */
console.log(soma());/** retorna NaN pois o primeiro parâmetro não tem valor padrão configurado, 
diferentemente do segundo, setado para 0. Logo, a função executa a soma de UNDEFINED com 0, gerando
o retorno NaN. */