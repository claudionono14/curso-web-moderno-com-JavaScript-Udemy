/** Objeto é uma coleção de chaves e valores.
 * Também é dinâmico e pode receber tipos de dados dinâmicos
 */

const produto1 = {};
produto1.nome = 'Xiaomi V2';
produto1.preco = 1200;
produto1['Desconto do dia'] = 0.10 // EVITAR ATRIBUTOS COM ESPAÇO

console.log(produto1); /** retorna o objeto { nome: 'Xiaomi V2', preco: 1200, 'Desconto do dia': 0.1 } */

// Em outra notação....
const produto2 = {
    nome: 'Xiaomi V3',
    preco: 1500
}

console.log(produto2); // retorna o objeto { nome: 'Xiaomi V3', preco: 1500 }