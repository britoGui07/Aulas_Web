import { Paciente } from "./paciente"
import { Medico } from "./medico"

export class Prontuario{
    paciente: Paciente
    medico: Medico

    constructor(paciente: Paciente, medico: Medico){
        this.paciente = paciente
        this.medico = medico
    }

    print(): void{
        console.log(`Paciente: ${this.paciente.pessoa.nome}`)
        console.log(`Médico: ${this.medico.pessoa.nome} - ${this.medico.especialidade}`)
        console.log(`Remédios:`)
        this.paciente.remedios.forEach(remedio => {
            console.log(`- ${remedio.nome} (${remedio.dosagem})`)
        })
    }
}