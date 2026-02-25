for(let i=0; i<5; i++){
    console.log(`Iteração: ${i}`)
}

console.log("\n")

let contador = 0
while(contador<5){
    console.log("Iteração:", contador)
    contador++;
}

console.log("\n")

let num: number = 5

do{
    console.log("Números:", num)
    num++;
}while(num<5)
    
console.log("\n")

let numeros: number[] = [10, 20, 30]

for(const num of numeros){
    console.log("Numeros:", num)
}

const pessoa = {nome: "Alice", idade: 25, cidade: "Boituva"}

for(const chave in pessoa){
    // console.log(`${chave}: ${pessoa[chave]}`)
}