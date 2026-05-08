import express, {Request, Response} from 'express'

const app = express()
const PORT = process.env.PORT ?? 3000
app.use(express.json())

function helloWorld(req: Request, res: Response): void{
    res.status(200).send('Hello World!!!')
}



app.get('/api/hello', helloWorld)

app.listen