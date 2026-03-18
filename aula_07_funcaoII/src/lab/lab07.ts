// Exercicio 1
console.log("Exercício 1")
type ProdutoUSD = {nome: string, precoUSD: number}
type ProdutoBRL = {nome: string, precoBRL: number}

const produtosDolar: ProdutoUSD[] = [
    {nome: 'Laptop', precoUSD: 1000},
    {nome: 'Smartphone', precoUSD: 800},
    {nome: 'Televisão', precoUSD: 1100}
]

const produtosReal: ProdutoBRL[] = produtosDolar.map(p => ({ //p de produto
    nome: p.nome, precoBRL: p.precoUSD*5
}))

console.log(produtosDolar)
console.log(produtosReal)

// Exercicio 2
console.log("\n\nExercício 2")
const nomesUsuarios: string[] = ['ana', 'marcos', 'julia']

nomesUsuarios.forEach((nome) => {
    let nomeMaiuscula = nome.charAt(0).toUpperCase() + nome.slice(1)
    console.log(`Usuário ${nomeMaiuscula} conectado com sucesso!`)
})

// Exercício 3
console.log("\n\nExercício 3")
const versoesSoftware: string[] = ['1.10.0', '1.2.1', '1.0.5', '1.20.0']
versoesSoftware.sort((a, b) => a.localeCompare(b, undefined, {numeric: true, sensitivity: 'base'})
)
console.log(versoesSoftware)

// Desafio: Tente realizar a ordenação sem modificar o array original.

// Exercicio 4
console.log("\n\nExercício 4")
const estudantes = [
{ nome : 'Ricardo ', nota : 8.5 , bolsista : false } ,
{ nome : 'Beatriz ', nota : 9.2 , bolsista : true } ,
{ nome : 'Tiago ', nota : 7.0 , bolsista : false } ,
{ nome : 'Maria ', nota : 9.8 , bolsista : true }
];