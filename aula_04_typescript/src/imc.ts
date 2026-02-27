import promptSync from "prompt-sync";
const prompt = promptSync();

let op: number = 1;

do{
    let op = Number(prompt("Escolha uma opção:\n\n1. Novo Cálculo\n2. Histórico de Consultas\n0. Sair\n\n"));
    switch(op){
        case 1:
            let peso: number = Number(prompt("Informe seu peso em quilogramas: "));
            let altura: number = Number(prompt("Informe sua altura em metros: "));
            console.log("Seu IMC é: ", peso/(altura*altura));
            break;
        case 2: 
            break;
        case 0:
            console.log("Adeus");
            break;
        default:
            console.log("Opção inválida!");
            break;
    }
    

}while(op != 0);