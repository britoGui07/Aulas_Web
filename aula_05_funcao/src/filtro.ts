const numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2];

const semDuplicados = numeros.filter((valor, indice, self)=>{
    return self.indexOf(valor) === indice;
});
console.log(semDuplicados)

let pares = numeros.filter(n => n % 2 === 0);
console.log(pares);

let maiorQueTres = numeros.filter(n => n > 3);
console.log(maiorQueTres);

let valores = [10, null, 25, undefined, 52, 89];
let valoresNaoNulos = valores.filter(v => v !== null && v !== undefined);

type Pessoa ={
    nome:string;
    idade:number
};

const pessoas: Pessoa[] = [
    {nome: "Ferdinando", idade: 30},
    {nome: "Francis", idade: 98},
    {nome: "Carol", idade: 28},
    {nome: "Anisio", idade: 13}
]
console.log(pessoas);

let maioresDeIdade = pessoas.filter(pessoa => pessoa.idade >= 18);

console.log(maioresDeIdade);