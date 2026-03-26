export class Livro{
    titulo: string
    autor: string
    anoPublicacao: number
    editora: string

    constructor(titulo: string, autor: string, anoPublicacao: number, editora: string){
        this.titulo = titulo
        this.autor = autor
        this.anoPublicacao = anoPublicacao
        this.editora = editora
    }
}