const { Op } = require("sequelize");
const { Country, Activity } = require('../db');

module.exports.getCountryByName = async (req, res) =>{
    try {
        const { query } = req.query;
        console.log("Searching for country:", query);
        const foundCountries = await Country.findAll({
          where: {
            name: {
              [Op.iLike]: `${query}%`,
            },
          },
          include: {
            model: Activity,
            through: {
              attributes: [],
            },
          },
        });
        res.json(foundCountries);
    }catch(error){
        console.log(error);
        res.status(404).json({error: error.message});
    }
}