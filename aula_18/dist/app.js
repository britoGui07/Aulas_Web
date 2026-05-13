"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const produto_1 = require("./class/produto");
const app = (0, express_1.default)();
const PORT = process.env.PORT ?? 3000;
app.use(express_1.default.json());
function helloWorld(req, res) {
    res.status(200).send('Hello World!!!');
}
function filtraProdutoPorID(req, res) {
    try {
        let id = req.params.id;
        res.status(200).json({ status: "success", data: { "id": id } });
    }
    catch (e) {
        res.status(400).json({ status: "error", message: "Necessário informar o ID" });
    }
}
function filtraProdutoPorNome(req, res) {
    try {
        let name = req.query.name;
        res.status(200).json({ Nome: name });
    }
    catch (e) {
        res.status(400).json({ Message: "Necessário informar o nome" });
    }
}
function validarProduto(data) {
    if (!data.nome)
        throw new Error("Produto requer o preenchimento de 'nome'!");
    if (!data.preco)
        throw new Error("Produto requer o prenchimento de preço!");
    if (!data.fabricante?.nome)
        throw new Error("Nome do fabricante é obrigatório");
    if (!data.fabricante?.endereco?.cidade)
        throw new Error("Cidade é obrigatória");
    if (!data.fabricante?.endereco?.pais)
        throw new Error("País é obrigatório");
}
function novoProduto(req, res) {
    try {
        let data = req.body;
        validarProduto(data);
        const produto = new produto_1.Produto(data.id, data.nome, data.preco, data.fabricante);
        res.status(200).json(produto);
    }
    catch (e) {
        res.status(400).json({ status: "error", message: e.message });
    }
}
app.get('/api/hello', helloWorld);
app.get('/api/product/:id', filtraProdutoPorID);
app.get('/api/product', filtraProdutoPorNome);
app.post('/api/product', novoProduto);
app.listen(PORT, () => console.log(`API em execução no URL: http://localhost:${PORT}`));
//# sourceMappingURL=app.js.map