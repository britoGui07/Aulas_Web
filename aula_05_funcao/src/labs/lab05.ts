// Exercício 1
console.log("\nExercício 1")

function maiuscula(content: string): string{
    return content.toUpperCase()
}
console.log(maiuscula('jubas'))

const maiusculaLambda = (content: string): string => content.toUpperCase()
console.log(maiusculaLambda('test'))

// Exercício 2
console.log("\nExercício 2")

const elevar = (a: number, b: number): number => a ** (b ?? 1);
console.log(elevar(5, 2))

// Exercício 3
console.log("\nExercício 3")

function dobrarNumeros(array: number[]): number[]{
    let dobrados: number[] = []
    for(const n of array){
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

type Aluno ={
    nome: string
    nota: number
}

const alunos: Aluno[] = [
    {nome: "Alice", nota: 8},
    {nome: "Bruno", nota: 5},
    {nome: "Carla", nota: 7},
    {nome: "Daniel", nota: 6}
]

const alunosAprovados = alunos.filter( aluno=>{
    return aluno.nota >= 7
})
console.log(alunosAprovados)

// Exercício 6
console.log("\nExercício 6")

type Evento ={
    nome: string
    mes: string
}

const eventos: Evento[] =[
    {nome: "Workshop TypeScript", mes: "Janeiro"},
    {nome: "Hackathon", mes: "Março"},
    {nome: "Conferência de IA", mes: "Janeiro"}
]
const mesDesejado: string = "Janeiro"

const eventoMesDesejado = eventos.filter(evento=>{
    return evento.mes === mesDesejado
})
console.log(eventoMesDesejado)