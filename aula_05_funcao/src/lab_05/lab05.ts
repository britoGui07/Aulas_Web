// Exercício 1
function maiuscula(content: string): string{
    return content.toUpperCase();
}
console.log(maiuscula('jubas'))

const maiusculaLambda = (content: string): string => content.toUpperCase();
console.log(maiusculaLambda('test'))

// Exercício 2
const elevar = (a: number, b: number): number => a ** (b ?? 1);
console.log(elevar(5, 2))

// Exercício 3
let numeros: number[] = [12, 5, 28, 7, 9, 37]

// const dobrarNumeros = (numeros.filter(n, i => n[i]*2)