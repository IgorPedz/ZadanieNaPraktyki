const sql = require('mssql')

const config = {
    user: 'adminsql',
    password: 'kSBfXHX8BEzYkta',
    server: 'sqldatebaseserver.database.windows.net',
    database: 'DatebaseSQL',
    options: {
        encrypt: true, 
        trustServerCertificate: false,
    }
};

const connectToDatabase = async () => {
    try {
        await sql.connect(config);
        console.log('Połączono z bazą danych');
    } catch (err) {
        console.error('Błąd podczas łączenia z bazą danych:', err.message);
    }
};

connectToDatabase();

module.exports = {sql,config}