type Categoria = "Espadachim" | "Mago" | "Arqueiro"

export class heroi{
    nome: string
    categoria: Categoria
    ataque: number
    custo: number
    recurso: number

    constructor(nome:string, categoria: Categoria, ataque: number, custo: number){
        this.nome = nome
        this.categoria = categoria
        this.ataque = ataque
        this.custo = custo
        this.recurso = 0

        if(categoria == "Espadachim"){
            this.recurso = 50
        }else if(categoria == "Mago"){
            this.recurso = 40
        }else if(categoria == "Arqueiro"){
            this.recurso = 10
        }
    }

    atacar(): void{
            if(this.recurso >= this.custo){
                this.recurso -= this.custo
                console.log(`Ataque de ${this.nome} bem sucedido, restando ${this.recurso} de recurso`)
            }else{
                console.log(`Ataque de ${this.nome} falhou por falta de recurso`)
            }
    }
    
}

const heroi1 = new heroi("Arthur", "Espadachim", 100, 20)
heroi1.atacar()
heroi1.atacar()
heroi1.atacar() // falha por falta de recurso
const heroi2 = new heroi("Merlin", "Mago", 80, 30)
heroi2.atacar()
const heroi3 = new heroi("Robin", "Arqueiro", 60, 5)
heroi3.atacar()