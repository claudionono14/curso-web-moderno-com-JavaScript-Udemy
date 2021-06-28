/** STRINGS são cadeias de caracteres delimitadas por aspas simples, duplas ou crases (template string) */

const escola = "Cod3r";

console.log(escola[4]); // Retorna o caracter de índice 4 que, no caso, é a letra r. 
console.log(escola.charAt(4)); // Retorna o  mesmo que o exemplo anterior.
console.log(escola.charAt(5));// Retorna vazio, pois não dá dados no índice 5.
console.log(escola.indexOf('3')); // Retorna 3, que é o valor do índice do caracter '3' da string.

console.log(escola.substring(1)); /** Retorna 'od3r', ou seja, retorna os caracteres a partir do caracter de
índice 1, INCLUSIVE. */
console.log(escola.substring(0, 3)); /** Retorna 'Cod', ou seja, retorna os caracteres a partir do caracter de
índice 0, PORÉM EXCLUINDO do caracter 3 em diante. Resumindo, retorna os índices de 0 a 2. */

console.log('Escola '.concat(escola).concat("!")); //Concatena strings com variáveis.
console.log('Escola ' + escola + "!"); //Mesma coisa do exemplo anterior.
console.log(escola.replace('3', 'e')); // Substitui o caracter '3' da string pelo caracter 'e'.
console.log(escola.replace(3, 'e')); /** Substitui o caracter '3' da string pelo caracter 'e'. SIM, 
mesmo se passarmos como tipo NUMBER */ 

console.log('Pedro, Maria, Mariana'.split(',')); /** Retorna o ARRAY [ 'Pedro', ' Maria', ' Mariana' ]. O parâmetro da
função SPLIT é o separador escolhido para dividir a STRING em ARRAY. */

console.log('Pedro, Maria, Mariana'.split('r'));/** Se mudarmos o separado para a letra 'r', comum às três
palavras da string, a string passa a ser dividida pela letra 'r'. O Array gerado fica da seguinte
forma: [ 'Ped', 'o, Ma', 'ia, Ma', 'iana' ]  */

console.log('Pedro, Maria, Mariana'.split('m'));/** O split é CASE SENSITIVE, ou seja, ao utilizarmos o 'm',
que não está presente na string, não há separação e é gerado um ARRAY com um elemento que é a própria string
inteira: [ 'Pedro, Maria, Mariana' ]. Repare a diferença no exemplo abaixo */

console.log('Pedro, Maria, Mariana'.split('M')); /** retorna um array com 3 elemento, separados pela letra
'M': [ 'Pedro, ', 'aria, ', 'ariana' ] */