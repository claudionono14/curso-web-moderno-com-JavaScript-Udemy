let isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(isAtivo);

console.log('Os verdadeiros...');
console.log(!!3); /** O sinal de exclamação '!' representa a negação e o console vai retornar o valor TRUE ou FALSE
Caso seja apenas uma exclamação, ele vai NEGAR o TRUE retornando FALSE. Quando colocamos DUAS exclamações, ou 
seja, fazendo a NEGAÇÃO da NEGAÇÃO o valor retornado será TRUE novamente.  */
console.log(!!-1);
console.log(!!' ');
console.log(!!'texto');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));


console.log('Os falsos...');
console.log(!!0);//Zero retorna falso por padrão
console.log(!!'');//String vazia retorna falso. (Por exemplo, testar se o nome está preenchido ou não)
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!! (isAtivo = false));


console.log('pra finalizar');
console.log(!! ('' || null || 0 || ' ')); /** retorna TRUE, que é o primeiro valor lógico verdadeiro,
dentro da expressão lógica */ 
console.log(('' || null || 0 || 'verdadeiro'));//Retornará a string 'verdadeiro'.

//Exemplo com variável
let nome = '';
console.log(nome || 'nome não informado');/**  Retornará a string 'nome não informado' que é o primeiro valor
lógico encontrado.*/

//Quando atribuímos valor à variável...
nome = 'Claudio';
console.log(nome || 'nome não informado'); //Agora ele retorna 'Claudio' que é o valor da variável.