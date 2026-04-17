function calcularMedia(notas: number[]): number{
    try{
        if(notas.length === 0){
            throw new Error("A lista não pode estar vazia.")
        } 
    } catch(erro){
        console.log("Erro encontrado: "), (erro as Error).message
        return 0
    }
    let soma = 0
    for(let i = 0; i < notas.length; i++){
        soma += notas[i]!
    }
    return soma/notas.length
}