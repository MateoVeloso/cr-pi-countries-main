const axios = require('axios');
const { Country } = require("./db")

const getDb = async ()=> await axios("http://localhost:5000/countries")

const chargeDb = async ()=>{
    try{
        const db = await getDb();
        for (let i = 0; i < db.data.length; i++) {
            let country = db.data[i];
            await Country.create({
                id: country.cca3,                                        
                name: country.name.common,                              
                flag: country.flags.png,
                continent: country.region,
                capital: country.capital?.[0]?? "Unknown Capital",
                subregion: country.subregion,
                area: country.area,
                population: country.population})}
            console.log("charged DB");
    }catch(error){console.log(error.message)}
}

module.exports = chargeDb;  