const { Country, Activity } = require('../db');

module.exports.getCountries = async (req, res) =>{
    try {
        const countries = await Country.findAll({include: {model: Activity}});
        res.json(countries);
    }catch(error){
        console.log(error);
        res.status(404).json({error: error.message});
    }
}