const {Pool} = require('pg');

const pool = new Pool({
    user: 'postgres.fmujfcjrtucztxuvdlma',
    host: 'aws-1-us-east-1.pooler.supabase.com',
    database: 'postgres',
    password: 'Elias13122000!14',
    port: 5432
})

module.exports = pool;