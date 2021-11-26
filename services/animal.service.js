import animalRepository from '../repositories/animal.repository.js'


async function createAnimal(animal){
    return await animalRepository.createAnimal(animal);
}

async function updateAnimal(animal){
    return await animalRepository.updateAnimal(animal);
}

async function deleteAnimal(id){
    return await animalRepository.deleteAnimal(id);
}

async function getAnimals(){
    return await animalRepository.getAnimals();
}

async function getAnimal(id){
    return await animalRepository.getAnimal(id);
}

export default {
    createAnimal,
    updateAnimal,
    deleteAnimal,
    getAnimals,
    getAnimal
}