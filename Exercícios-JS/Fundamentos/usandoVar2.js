var numero = 1;
{
    var numero = 2;
    console.log('Dentro= ', numero);
}

console.log('Fora= ', numero);

/** Como a variável VAR é de escopo global, ao menos que seja declarada em uma função, quando escrevemos
   novamente a variável dentro do bloco de código, ela sobrescreveu a variável numero criada na primeira
   linha do código.
 */