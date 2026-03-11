const numbers: number[] = [1, 2, 3, 4, 5];
const frutas: string[] = ['Maca', 'Bana', 'Uva'];

frutas.forEach((item, index) => {
    console.log(`${index}: ${item}`);
});

let contador: number = 0;

numbers.forEach(item => {
    contador+=item;
});

numbers.forEach((n, index) => {
    numbers[index]= n*2;
});

type Product = {
    id: number,
    nome: string,
    preco: number
}

const products: Product[] =[
    {id: 1, nome: 'Mouse', preco: 50},
    {id: 2, nome: 'MousePad', preco: 150}
]

products.forEach(p =>{
    p.nome = p.nome + "Qualquer Coisa";
});