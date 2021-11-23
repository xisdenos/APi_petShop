import serviceProprietario from '../services/proprietario.service.js'

async function createProprietario(req, res, next){
    try{
        let proprietario = req.body;
        if(!proprietario.nome || !proprietario.telefone){
            throw new Error("Os campos precisam estar preenchidos corretamente!");
        }
        res.send(await serviceProprietario.createProprietario(proprietario));
    } catch(err) {
        next(err);
    }
}

async function updateProprietario(req, res, next){
    try{
        let proprietario = req.body;
        if(!proprietario.nome || !proprietario.telefone || !proprietario.proprietario_id){
            throw new Error("Os campos precisam estar preenchidos corretamente!");
        }
        res.send(await serviceProprietario.updateProprietario(proprietario));

    } catch(err) {
        next(err);
    }
}

async function deleteProprietario(req, res, next){
    try{
        res.send(await serviceProprietario.deleteProprietario(req.params.id));
        logger.info(`"DELETE /proprietario"`)
    } catch(err) {
        next(err)
    }
}

async function consultasProprietario(req, res, next){
    try{
        res.send(await serviceProprietario.getProprietarios());
        logger.inf(`GET /proprietario`)
    } catch(err) {
        next(err)
    }
}

async function consultaProprietario(req, res, next){
    try{
        res.send(await serviceProprietario.getProprietario(req.params.id));
        logger.info(`Get /proprietario`)
    } catch(err) {
        next(err)
    }
}


export default {
    createProprietario,
    updateProprietario,
    deleteProprietario,
    consultasProprietario,
    consultaProprietario
}