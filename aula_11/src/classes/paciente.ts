import { Pessoa } from "./pessoa";
import { Remedio } from "./remedio";

export class Paciente{
    pessoa: Pessoa
    remedios: Remedio[]

    constructor(pessoa: Pessoa, remedios: Remedio[]){
        this.pessoa =  pessoa
        this.remedios = remedios
    }
}