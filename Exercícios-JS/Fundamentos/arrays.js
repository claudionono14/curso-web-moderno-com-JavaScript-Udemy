/** Arrays são dinâmicos (crescem e diminuem) e heterogêneos (aceitam diversos tipos de dados em conjunto) 
 * Não é uma boa prática usar tipos de dados diferentes dentro de um mesmo array.
*/

const valores = [1, 2, 3, 4, 5]
console.log(valores[2], valores[4]); //Retorna os valores que estão nos índices 2 e 4, ou seja, 3 e 5.

console.log(valores[8]);//Retorna undefined, pois não existe índice 8 neste array.

valores[8] = 9;
console.log(valores);/** retorna [ 1, 2, 3, 4, 5, <3 empty items>, 9 ], ou seja, adiciona o valor 9 no índice 8
porém indica que existem 3 índices vazios anteriores, ou seja, os índices 7, 6 e 5. */

// Preenchendo índices vazios do array
valores[5] = 6;
valores[6] = 7;
valores[7] = 8;
console.log(valores); //exibe o array com os índices de 0 a 8 preenchidos
console.log(valores.length);// retorna 9 que é o número de elementos do array.

valores.push(10);// O método PUSH dicionada um elemento no final do array
console.log(valores); //retorna [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]

console.log(valores.pop()); /** o método POP remove o último elemento do array. É possível também atribuir
o valor excluído à uma variável ou exibi-la na mesma linha, como está sendo feito.*/
console.log(valores); /** Retorna o array [1, 2, 3, 4, 5, 6, 7, 8, 9], ou seja, com o elemento '10' removido */

delete valores[0] // Remove o elemento do índice selecionado.
console.log(valores); /** Retorna [ <1 empty item>, 2, 3, 4, 5, 6, 7, 8, 9 ], ou seja, com a primeira posição
vazia */

console.log(typeof valores); //Retorna o tipo de dados do ARRAY que é OBJECT.

