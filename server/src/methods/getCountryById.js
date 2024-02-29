const { Country, Activity } = require('../db');

module.exports.getCountryById = async (req, res) =>{
    try {
        const { idPais } = req.params;
        const country = await Country.findOne({
            where: { id: idPais },
            include: [{ model: Activity, attributes: ["name"]}],
          });
          res.json(country);
    }catch(error){
        console.log(error);
        res.status(404).json({error: error.message});
    }
}   