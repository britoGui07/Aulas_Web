function mensagem(f:string):string{
    return f;
}

const mensagemLambda = (f:string):string => f;
console.log(mensagemLambda);

function soma(a: number, b:number):void{
    console.log(a+b);
}

const somaLambda = (a: number, b:number):void => console.log(a+b);
console.log(somaLambda);


function saudacao(nome:string = 'visitante'):string{
    return `Olá ${nome}`;
}

const saudacaoLambda = (nome: string= "visitante"):string => `olá ${nome}`;

function multiplicar(a:number, b:number){
    return a*b;
}

// Valores opcionais
const multiplicarOpcional = (a:number, b?:number): number => {
    if(b === undefined){
        return a;
    }
    return a*b;
}
multiplicarOpcional(1, 2);

// Operador ternário
const multiplicarOpcionalTernario = (a:number, b?:number):number => (b===undefined) ? a : a*b;

// Operador Coalescência Nula
const multiplicarCoalescencia = (a:number, b?:number):number => a * (b ?? 1); // "??" testa tudo o que está à esquerda se é null ou undefined e usa 1 na multiplicação caso seja verdade