import serviceAnimal from '../services/animal.service.js'

async function createAnimal(req, res, next){
    try{
        let animal = req.body;
        if(!animal.nome || !animal.tipo || !animal.proprietarioId){
            throw new Error("Os campos precisam estar preenchidos corretamente!");
        }
        res.send(await serviceAnimal.createAnimal(animal))
        logger.info(`POST /proprietario / ${JSON.stringify(proprietario)}`)
    } catch(err) {
        next(err);
    }
}

async function updateAnimal(req, res, next){
    try{
        let animal = req.body;
        if(!animal.animalId || !animal.nome || !animal.tipo || !animal.proprietarioId){
            throw new Error("Os campos precisam estar preenchidos corretamente!");
        }
        res.send(await serviceAnimal.updateAnimal(animal))

    } catch(err) {
        next(err);
    }
}

async function deleteAnimal(req, res, next){
    try{
        res.send(await serviceAnimal.deleteAnimal(req.params.id))
    } catch(err) {
        next(err);
    }
}

async function consultasAnimal(req, res, next){
    try{
        res.send(await serviceAnimal.getAnimals());
        logger.inf(`GET /animal`)
    } catch(err) {
        next(err);
    }
}

async function consultaAnimal(req, res, next){
    try{
        res.send(await serviceAnimal.getAnimal(req.params.id));
        logger.info(`Get /proprietario`)
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