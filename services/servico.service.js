import servicoRepository from '../repositories/servico.repository.js'
import animalRepository from '../repositories/animal.repository.js'

async function createServico(servico){
    return await servicoRepository.createServico(servico);
}

async function getServicos(proprietario_id){
    if(proprietario_id){
        const res = await animalRepository.searchByProprietarioId(proprietario_id)
        console.log(res[0])
        return res
    }
    return await servicoRepository.getServicos();
}

async function getServico(id){
    return await servicoRepository.getServico(id);
}

export default {
    createServico,
    getServicos,
    getServico
}