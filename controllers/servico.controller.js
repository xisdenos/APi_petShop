import serviceServico from '../services/servico.service.js';

async function createService(req, res, next){
    try{
        let servico = req.body
        if(!servico.descricao || !servico.valor || !servico.animalId){
            throw new Error("Todos os campos precisam estar preenchidos corretamente")
        }
        res.send(await serviceServico.createServico(servico));
    } catch(err){
        next(err);
    }
}

async function consultasServico(req, res, next){
    try{
        res.send(await serviceServico.getServicos(req.query.proprietario_id));
    } catch(err) {
        next(err);
    }
}

async function consultaServico(req, res, next){
    try{
        res.send(await serviceServico.getServico(req.query.proprietario_id));
    } catch(err) {
        next(err);
    }
}

export default {
    createService,
    consultasServico,
    consultaServico
}