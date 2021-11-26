import Animal from '../models/animal.model.js';
import Servico from '../models/servico.model.js';

async function createAnimal(animal){
    console.log(animal)
    try{
        return await Animal.create(animal)
    } catch(err) {
        throw(err)
    }
}

async function updateAnimal(animal){
    
    try{
        return await Animal.update(animal, {
            where:{
                animalId: animal.animalId
            }
        })
    } catch(err){
        throw(err)
    }
}

async function deleteAnimal(id){
    try{
        return await Animal.destroy({
            where:{
                animalId: id
            }
        })
    } catch(err) {
        throw(err)
    }
}

async function getAnimals(){
    
    try{
        return await Animal.findAll()
    } catch(err) {
        throw(err)
    }
}

async function getAnimal(id){
    try{
        return await Animal.findByPk(id);
    } catch(err) {
        throw(err)
    }
}

async function searchByProprietarioId(id){
    try{
        return await Animal.findAll({
            //attributes: ['animal_id'],
            where:{
                proprietarioId: id
            },
            include:[
                {
                    model: Servico
                }
            ],
        })
    } catch(err) {
        throw(err)
    }
}

export default {
    createAnimal,
    updateAnimal,
    deleteAnimal,
    getAnimals,
    getAnimal,
    searchByProprietarioId
}