import promptSync from "prompt-sync";
const prompt = promptSync();

function menu(){
    console.log("\n\n🧮1. Novo Cálculo\n📜2. Histórico de Consultas\n0. Sair\n\n");
}

let historico: string[] = [];
let op: number = 1;

do{
    menu();
    op = Number(prompt("Escolha uma opção: "));
    switch(op){
        case 1:
            let peso: number = Number(prompt("Informe seu peso em quilogramas: "));
            let altura: number = Number(prompt("Informe sua altura em metros: "));
            let imc:number = peso/(altura*altura);
            console.log("\nSeu IMC é: ", Number(imc).toFixed(2));
            
            historico.push(`Peso: ${peso} / Altura: ${altura}^2 | IMC: ${imc.toFixed(2)}`)
            break;
        case 2:
            console.log("📜Histórico de consultas:\n");
            console.log(historico);
            break;
        case 0:
            console.log("\nFim do programa. 👋");
            break;
        default:
            console.log("\n❌Opção inválida!❌");
            break;
    }
    

}while(op != 0);