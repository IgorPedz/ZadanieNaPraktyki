const {sql,config} = require('./server.js')

const insertData = async (total,used,procent) => {
    await sql.connect(config);
    try {
        const query = `INSERT INTO Pobor_Ramu (Totalny_RAM,Zuzyty_RAM,Procentowe_Zuzycie) VALUES (@value1,@value2,@value3)`

        const request = new sql.Request();
        request.input('value1', sql.Float, total); 
        request.input('value2', sql.Float, used);
        request.input('value3', sql.Float, procent); 


        const result = await request.query(query);
    } catch (error) {
        console.error('Błąd podczas dodawania danych:', error.message);
    }finally {
        await sql.close();
    }
};

module.exports = { insertData }

