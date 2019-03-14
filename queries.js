const { Pool } = require('pg');
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'mydb',
    password: 'yud72heo',
    port: 5432,
});

const getUsers = (req, res) =>
{
    const id = parseInt(req.params.id)
    pool.query('SELECT * FROM class_work.users where id = $1', [id], (error,results) => {
        if (error){
            throw error
        }
        res.status(200).json(results.rows)
    })
}

module.exports = {
    getUsers
}