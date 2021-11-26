import Servico from "../models/servico.model.js";


async function createServico(servico){
    try{
        return await Servico.create(servico)
    } catch(err){
        throw(err)
    }
}

async function getServicos(){
    try{
        return await Servico.findAll();
    } catch(err){
        throw(err)
    }
}

async function getServico(id){
    try{
        return await Servico.findByPk(id);
    } catch(err){
        throw(err)
    }
}


export default{
    createServico,
    getServicos,
    getServico
}