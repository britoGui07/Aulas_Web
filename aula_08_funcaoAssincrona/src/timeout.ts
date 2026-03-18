/*console.log("Antes do setTimeout")
setTimeout(() => console.log("Executando o setTimeout"), 2000) // async, pedido de 2s(2000ms) de espera
console.log("Depois do setTimeout\n\n")
*/
// com clearTimeout
console.log("Antes do setTimeout")
let frase = "Rodando o setTimeout"
const timeout = setTimeout(() => console.log("Rodando o setTimeout"), 2000)

frase = "Rodando o clearTimeout"

if(frase !== "Rodando o setTimeout"){
    clearTimeout(timeout)
    console.log(frase)
}
console.log("Depois do setTimeout")