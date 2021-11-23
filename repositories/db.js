import pg from 'pg';

async function connect(){
    
    if(global.connection){
        return global.connection.connect();
    }

    const pool = new pg.Pool({
        connectionString: "postgres://kqdnqdhg:FTgj8kvKtkgu84yMOhFhIkKm5kiyjvSz@fanny.db.elephantsql.com/kqdnqdhg"
    });
    global.connection = pool;

    return pool.connect();
}

export {
    connect
}