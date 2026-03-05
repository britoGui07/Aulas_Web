// Exercício 1
console.log("\nExercício 1")

function maiuscula(content: string): string{
    return content.toUpperCase()
}
console.log(maiuscula('jubas'))

const maiusculaLambda = (content: string): string => content.toUpperCase();
console.log(maiusculaLambda('test'))

// Exercício 2
console.log("\nExercício 2")

const elevar = (a: number, b: number): number => a ** (b ?? 1);
console.log(elevar(5, 2))

// Exercício 3
console.log("\nExercício 3")

function dobrarNumeros(numeros: number[]): number[]{
    let dobrados: number[] = []
    for(const n of numeros){
        dobrados.push(n*2)
    }
    return dobrados
}
let numeros: number[] = [12, 5, 28, 7, 9, 37]
console.log("Array original: ", numeros)
console.log("Array dobrado: ", dobrarNumeros(numeros))

// Exercício 4
console.log("\nExercício 4")

type Funcionario ={
    nome: string
    cargo: string
};

const funcionarios: Funcionario[] = [
    {nome: "Marcos", cargo: "Desenvolvedor"},
    {nome: "Fernanda", cargo: "Gerente"},
    {nome: "Carlos", cargo: "Desenvolvedor"},
    {nome: "Joana", cargo: "Analista"},
];
const cargoDesejado: string = "Desenvolvedor"

const funcionarioCargoEspecifico = funcionarios.filter(funcionario=>{ 
    return funcionario.cargo === cargoDesejado
})
console.log(funcionarioCargoEspecifico)

// Exercício 5
console.log("\nExercício 5")

