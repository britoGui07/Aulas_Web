/*
setInterval(() => console.log("Executando setInterval"), 1000)
console.log("Depois do interval")
*/

let contador = 0
let interval = setInterval(() =>{
    contador ++
    console.log("Rodando o interval...")
    if(contador === 3){    
        console.log("Interval cancelado...")
        clearInterval(interval)
    }
}, 700)
console.log("Depois do interval...")