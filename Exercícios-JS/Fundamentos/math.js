const raio = 5.6;
const area = Math.PI * Math.pow(raio, 2); /* O PI é uma propriedade do OBJETO 'Math' e o 'pow' é o método do OBJETO 'Math
que recebe 2 parâmetros: O primeiro é um número(podendo estar numa variável) e o segundo é valor do expoente (2 = quadrado)
e etc. */
const pi = Math.PI; // Armazenando o valor de pi

console.log(area); // 98.5203456165759
console.log(typeof Math); // object
console.log(pi); // 3.141592653589793, a propriedade 'PI' do OBJETO 'Math' retorna o conhecido valor de 'pi'.
console.log(pi.toFixed(3)); // 3.142, retorna o valor de PI com 3 casas decimais apenas.
console.log(typeof pi.toFixed(3)); // string, repare que o métodos 'toFixed()' transforma o tipo de dados em String.