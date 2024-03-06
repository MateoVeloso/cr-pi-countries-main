const { Country, Activity } = require('../db');

module.exports.getActivities = async (req, res) =>{
    try {
        const activities = await Activity.findAll({
            include: {
              model: Country,
              attributes: ["id", "name", "flag"],
              through: {
                attributes: [],
              },
              order: [["ASC"]],
            },
          });
          res.json(activities);
    }catch(error){
        console.log(error);
        res.status(404).json({error: error.message});
    }
}