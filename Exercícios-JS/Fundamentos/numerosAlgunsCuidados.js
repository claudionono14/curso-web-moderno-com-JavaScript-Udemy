console.log(7 / 0); // Infinity, é a resposta do JS para números divididos por ZERO

console.log('10' / 2);/* 5, o JS interpreta o valor da string e, caso seja possível transformar em número, ele transforma
e executa a operação matemática. A exceção é quando o operador matemático é a ADIÇÃO. Abaixo temos o exemplo.*/

/* ATENÇÃO REDOBRADA !!! */
console.log('10' + 2); // 102, o JS dá preferência à concatenação da STRING quando se usa o sinal de adição.

console.log('10' - 2);/* 8, o JS, assim como no exemplo da divisão, vai transformar a STRING em número e executar
normalmente a operação matemática*/

console.log('Show' * 2); // NaN, o JS não vai repetir a palavra, como acontece em outras linguagens. 

console.log(0.1 + 0.7); /* 0.7999999999999999, A especificaçãço do JS não suporta a precisão exata de contas com números de ponto flutuante
logo, a resposta é bem aproximada, porém não precisa.*/
/* console.log(10.toString()); => Vai gerar um erro pois o JS não executa a função direto no número. Para fazer isso
é necessário usar o número entre parênteses, conforme o exemplo abaixo.*/

console.log((10).toString()); // 10, executa normalmente a função 'toString'.