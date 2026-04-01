import {Prontuario} from "./classes/prontuario"
import {Pessoa} from "./classes/pessoa"
import {Endereco} from "./classes/endereco"
import {Medico} from "./classes/medico"
import {Remedio} from "./classes/remedio"
import {Paciente} from "./classes/paciente"
import {Contato} from "./classes/contato"

const enderco1 = new Endereco("Rua A", 123, "Boituva", "18550-000")
const enderco2 = new Endereco("Rua B", 1243, "Boituva", "18550-000")
const contato = new Contato("15 999999999", "jubas@gmail.com")
const contato2 = new Contato("15 999989997", "geraldinho@gmail.com")
const pessoa1 = new Pessoa("Jubas", 30, enderco1, contato)
const pessoa2 = new Pessoa("Geraldo", 35, enderco2, contato2)
const remedio1 = new Remedio("Dipirona", "500mg")
const remedio2 = new Remedio("Lalau", "450mg")
const paciente = new Paciente(pessoa1, [remedio1, remedio2])
const medico1 = new Medico(pessoa2, "Cardiologista")
const prontuario = new Prontuario(paciente, medico1)
prontuario.print()