async function createAnimal(req, res, next){
    try{
        let animal = req.body;
        if(!animal.nome || !animal.tipo){
            throw new Error("Os campos precisam estar preenchidos corretamente!");
        }
        res.send("que menino bunito")
        logger.info(`POST /proprietario / ${JSON.stringify(proprietario)}`)
    } catch(err) {
        next(err);
    }
}

async function updateAnimal(req, res, next){
    try{
        let proprietario = req.body;
        if(!proprietario.proprietario_id || !proprietario.nome || !proprietario.telefone){
            throw new Error("Os campos precisam estar preenchidos corretamente!");
        }

    } catch(err) {
        next(err);
    }
}

async function deleteAnimal(req, res, next){
    try{

    } catch(err) {
        next(err);
    }
}

async function consultasAnimal(req, res, next){
    try{

    } catch(err) {
        next(err);
    }
}

async function consultaAnimal(req, res, next){
    try{

    } catch(err) {
        next(err);
    }
}

export default {
    createAnimal,
    updateAnimal,
    deleteAnimal,
    consultasAnimal,
    consultaAnimal
}