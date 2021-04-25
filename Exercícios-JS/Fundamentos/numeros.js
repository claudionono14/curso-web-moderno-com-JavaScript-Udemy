const peso1 = 1.0; //Apesar do '.' o JS encara esse número como um inteiro, pois o número é '.0'
const peso2 = Number('2') //Outra maneira de se declarar um número em JS

console.log(typeof peso1); // number, Informa que o TIPO DO DADO 'peso1' é um NUMBER.
console.log(typeof Number);// function, informa que a palavra 'Number' é um função.

/* Métodos */

//Number.inInteger() => O método  verifica se o número é inteiro ou não. Retorna 'true' ou 'false'
console.log(Number.isInteger(peso1));//true

//toFixed() => Recebe um número como parâmetro e este especifica o nº de casas decimais que serão exibidos
const pi = 3.141516794;
console.log(pi.toFixed(2));//3.14, já que são DUAS casas decimais

//toString() => Transforma o tipo de dados informado em String. Muito aplicado aos números.
console.log(pi.toString());//3.141516794, porém agora é uma string.
console.log(pi.toString(2));/* 11.00100100001110100111000111010010000100001001010011, transforma o número em uma string
e coloca o número em binário. O parâmetro '2' tem a função de transformar o número informado em binário.*/

