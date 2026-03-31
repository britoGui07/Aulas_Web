type Categoria = "Espadachim" | "Mago" | "Arqueiro"

export class heroi{
    nome: string
    categoria: Categoria
    ataque: number
    custo: number
    recurso: number
    tipoRecurso: string

    constructor(nome:string, categoria: Categoria, ataque: number, custo: number, recurso: number, tipoRecurso: string){
        this.nome = nome
        this.categoria = categoria
        this.ataque = ataque
        this.custo = custo
        this.recurso = recurso
        this.tipoRecurso = tipoRecurso

        if(categoria == "Espadachim")
            this.recurso = 50
        if(categoria == "Mago")
            this.recurso = 40
        if(categoria == "Arqueiro")
            this.recurso = 10
    }

    atacar(): void{
        if(this.categoria == "Espadachim"){
            if(this.recurso >= this.custo){
                console.log(`Ataque de ${this.nome} bem sucedido, restando ${this.recurso}`)
            }else{
                console.log(`Ataque de ${this.nome} falhou por falta de recurso`)
            }
        }
    }
    
}