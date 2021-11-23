import { connect } from '../repositories/db.js';

async function createProprietario(propretario){
    const conn = await connect();
    try{
        const sql = 'INSERT INTO proprietarios (nome, telefone) VALUES($1, $2) RETURNING *'
        const values = [propretario.nome, propretario.telefone]
        const res = await conn.query(sql, values)
        return res.rows;
    } catch(err){
        throw(err)

    } finally {
        conn.release();
    }
}

async function updateProprietario(proprietario){
    const conn = await connect();
    try{
        const sql = 'UPDATE proprietarios SET nome = $1, telefone = $2 WHERE proprietario_id = $3'
        const values = [proprietario.nome, proprietario.telefone, proprietario.proprietario_id]
        const res = await conn.query(sql, values)
        return res.rows;
    } catch(err){
        throw(err)

    } finally{
        conn.release();
    }
}

async function deleteProprietario(id){
    const conn = await connect();
    try{
        await conn.query("DELETE FROM proprietarios WHERE proprietario_id = $1", [id]);
    } catch(err) {
        throw(err)

    } finally {
        conn.release();
    }
}

async function getProprietarios(){
    const conn = await connect();
    try{
        const res = await conn.query("SELECT * FROM proprietarios");
        return res.rows
    } catch(err) {
        throw(err)

    } finally {
        conn.release();
    }
}

async function getProprietario(id){
    const conn = await connect();
    try{
        const res = await conn.query("SELECT * FROM proprietarios WHERE proprietario_id = $1", [id]);
        return res.rows[0]
    } catch(err) {
        throw(err)

    } finally {
        conn.release();
    }
}

export default {
    createProprietario,
    updateProprietario,
    deleteProprietario,
    getProprietarios,
    getProprietario
}