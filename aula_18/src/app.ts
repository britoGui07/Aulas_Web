import express, {Request, Response} from 'express'
import {Produto} from "./class/produto"

const app = express()
const PORT = process.env.PORT ?? 3000
app.use(express.json())

function helloWorld(req: Request, res: Response): void{
    res.status(200).send('Hello World!!!')
}

function filtraProdutoPorID(req: Request, res: Response): void{
    try{
        let id = req.params.id
        res.status(200).json({status: "success", data: {"id": id}})
    }catch (e: unknown){
        res.status(400).json({status: "error", message: "Necessário informar o ID"})
    }
}

function filtraProdutoPorNome(req: Request, res: Response): void{
    try{
        let name = req.query.name
        res.status(200).json({Nome: name})
    }catch (e:unknown){
        res.status(400).json({Message: "Necessário informar o nome"})
    }
}

function validarProduto(data: any): void{
    if (!data.nome) throw new Error("Produto requer o preenchimento de 'nome'!")
    if (!data.preco) throw new Error("Produto requer o prenchimento de preço!")
    if (!data.fabricante?.nome) throw new Error("Nome do fabricante é obrigatório")
    if (!data.fabricante?.endereco?.cidade) throw new Error("Cidade é obrigatória")
    if (!data.fabricante?.endereco?.pais) throw new Error("País é obrigatório")
}

function novoProduto(req: Request, res: Response): void{
    try{
        let data: any = req.body
        validarProduto(data)

        const produto = new Produto(data.id, data.nome, data.preco, data.fabricante)
        res.status(200).json(produto)
    }catch (e: unknown){
        res.status(400).json({status: "error", message: (e as Error).message})
    }
}


app.get('/api/hello', helloWorld)
app.get('/api/product/:id', filtraProdutoPorID)
app.get('/api/product', filtraProdutoPorNome)
app.post('/api/product', novoProduto)

app.listen(PORT, () => console.log(`API em execução no URL: http://localhost:${PORT}`))