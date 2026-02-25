// Lita de números
let numeros: number[] = [1, 2, 3, 4, 5]

console.log("Numeros pos 01:", numeros[1])

// Lista de strings
let nomes: string[] = ["Ana", "João", "Maria"]
console.log(nomes.indexOf("João"))

console.log(nomes)

nomes.splice(1, 1)
console.log("Depois do splice:", nomes)
nomes.splice(0, 1)
console.log("Depois do splice:", nomes)
nomes.splice(-1, 1)
console.log("Depois do splice:", nomes)

let years: Array<number> = [20, 30, 40]

let fruits: string[] = ["Maçã", "Banana"]
fruits.push("Laranja") // Adiciona no final
fruits.unshift("Uva") // Adiciona no inicio
console.log(fruits)

fruits.pop() // Remove o último elemento ("Laranja")
fruits.shift() // Remove o primeiro elemento ("Uva")
console.log(fruits)

console.log(fruits[1])
console.log(fruits.length)