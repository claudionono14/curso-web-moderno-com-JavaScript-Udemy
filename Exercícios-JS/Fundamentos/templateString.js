/** Atualização que veio no EcmaScript em 2015, que permite a interpolação de variáveis e a quebra de linha
 * em uma STRING
 */

const nome = 'Rebeca';

const concatenacao = 'Olá ' + nome + '!';

const templateString = `
    Olá
    ${nome} !`;

console.log(concatenacao);

console.log(templateString);

// expressoes....
console.log(`1 + 1 = ${1 + 1}`); // Resolve expressões matemáticas dentro da string

//Funcoes...
const up = texto => texto.toUpperCase();
console.log(`Eiii, tome ${up('cuidado')} !!!`);
