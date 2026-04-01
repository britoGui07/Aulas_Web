import { Endereco } from "./endereco"
import { Contato } from "./contato"

export class Pessoa{
    nome: string
    idade: number
    endereco: Endereco
    contato: Contato

    constructor(nome: string, idade: number, endereco: Endereco, contato: Contato){
        this.nome = nome
        this.idade = idade
        this.endereco = endereco
        this.contato = contato
    }
}