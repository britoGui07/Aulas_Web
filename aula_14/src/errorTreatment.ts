function dividir(a: number, b: number): number{
    try{
        if(b === 0){
            throw new Error("Não é possível dividir por zero.")
        }
        return a/b
    }catch(erro){
        console.log("Erro encontrado: ", (erro as Error).message)
        return 0
    }
}

function validarNumero(valor: number){
    if(valor < 0){
        throw new Error("Valor não pode ser negativo.")
    }
}

try{

} catch(erro: unknown){
    if(erro instanceof Error){
        console.log("Erro:", erro.message)
    }
}