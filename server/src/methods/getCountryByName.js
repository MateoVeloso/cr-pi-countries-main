const { Op } = require("sequelize");
const { Country, Activity } = require('../db');

module.exports.getCountryByName = async (req, res) =>{
    try {
        const { name } = req.query;
        console.log("Searching for country:", name);
        const foundCountries = await Country.findAll({
          where: {
            name: {[Op.iLike]: `${name}%`},
          }
        });
        if (foundCountries.length === 0) return res.status(404).json({menssage: "there is no country with that name"})
        res.json(foundCountries);
    }catch(error){
        console.log(error);
        res.status(500).json({error: error.message});
    }
}