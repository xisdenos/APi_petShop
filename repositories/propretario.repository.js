
import Proprietario from '../models/proprietario.model.js'


async function createProprietario(proprietario){
    try{
        return await Proprietario.create(proprietario)
    } catch(err){
        throw(err)

    }
}

async function updateProprietario(proprietario){
    
    try{
        return await Proprietario.update(proprietario, {
            where:{
                proprietarioId: proprietario.proprietario_id
            }
        })
    } catch(err){
        throw(err)

    }
}

async function deleteProprietario(id){
    try{
        return await Proprietario.destroy({
            where:{
                proprietarioId: id
            }
        })
    } catch(err) {
        throw(err)
    }
}

async function getProprietarios(){
    
    try{
        return await Proprietario.findAll()
    } catch(err) {
        throw(err)
    }
}

async function getProprietario(id){
    try{
        return await Proprietario.findByPk(id);
    } catch(err) {
        throw(err)

    }
}

export default {
    createProprietario,
    updateProprietario,
    deleteProprietario,
    getProprietarios,
    getProprietario
}