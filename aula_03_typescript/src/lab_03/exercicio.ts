// exercício 1
console.log("\nExercício 1")

let idades: number[] = [10, 15, 20, 8, 17, 25]

for(const idade of idades){
    if(idade<12)
        console.log(`Idade: ${idade} = Criança`)
    else if(idade<18)
        console.log(`Idade: ${idade} = Adolescente`)
    else
        console.log(`Idade: ${idade} = Adulto`)
}

console.log("\nExercício 2")

// exercício 2
let nomes: string[] = ["Carlos", "Ana", "Pedro", "Mariana"]

nomes.splice(nomes.indexOf("Pedro"), 1)
nomes.push("João")
nomes.unshift("Beatriz")

console.log(nomes)

console.log("\nExercício 3")

// exercício 3
let listaMista: (number | string)[] = [1, "Maçã", 2, "Banana", 3, "Laranja"]
let numeros: number[] = []
let frutas: string[] = []

for(let item of listaMista){
    if(typeof item == "number")
        numeros.push(item)
    else
        frutas.push(item)
}

console.log(numeros)
console.log(frutas)