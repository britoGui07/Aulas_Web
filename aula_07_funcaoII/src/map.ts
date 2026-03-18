// array.map <U >( callback : ( value : T, index : number ) = > U): U[]
// map() serve para transformar o vetor, filter() apenas para redução
const numeros: number[] = [1, 2, 3, 4, 5];

const dobro = numeros.map(n => n*2);
console.log(dobro);

const strings: string[] = numeros.map(n => `Numero ${n}`);
console.log(strings);

type Produto = {
    id: number,
    nome: string,
    preco: number
}

const produtos: Produto[] =[
    {id: 1, nome: 'Mouse', preco: 50},
    {id: 2, nome: 'MousePad', preco: 150}
]

const nomes: string[] = produtos.map(p => p.nome);

const listaFormatada = produtos.map(p => ({
    id: p.id,
    label: `${p.nome} - R$ ${p.preco.toFixed(2)}`,
    disponivel: true
}));

console.log(nomes);
console.log(listaFormatada);