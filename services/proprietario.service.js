import proprietarioRepository from '../repositories/propretario.repository.js'


async function createProprietario(proprietario){
    return await proprietarioRepository.createProprietario(proprietario);
}

async function updateProprietario(proprietario){
    return await proprietarioRepository.updateProprietario(proprietario);
}

async function deleteProprietario(id){
    return await proprietarioRepository.deleteProprietario(id);
}

async function getProprietarios(){
    return await proprietarioRepository.getProprietarios();
}

async function getProprietario(id){
    return await proprietarioRepository.getProprietario(id);
}

export default {
    createProprietario,
    updateProprietario,
    deleteProprietario,
    getProprietarios,
    getProprietario
}