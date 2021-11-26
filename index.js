import express from 'express';
import cors from 'cors';
import winston from 'winston';
import proprietarioRouter from './routes/proprietario.route.js';
import animalRouter from './routes/animal.route.js';
import servicoRouter from './routes/servico.route.js';

const app = express();

//Logger
const { combine, timestamp, label, printf } = winston.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level} ${message}`;
});

global.logger = winston.createLogger({
    level: "silly",
    transports: [
        new (winston.transports.Console)(),
        new (winston.transports.File)({filename: "store-api.log" })
    ],
    format: combine (
        label({label: "store-api"}),
        timestamp(),
        myFormat
    )
})

// Middlewares
app.use(express.json());
app.use(cors());
app.use((err, req, res, next) => {
    logger.error(`${req.method} ${req.baseUrl} - ${req.message}`);
    res.status(400).send({ error: err.message})
});
app.use("/proprietario", proprietarioRouter);
app.use("/animal", animalRouter);
app.use("/servico", servicoRouter);

// Conection
app.listen(9000, ()=>{
    console.log("Servidor iniciado na porta 9000")
});