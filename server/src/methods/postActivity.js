const { Activity, Country } = require("../db");

module.exports.postActivity = async (req, res) => {
  const { name, difficulty, duration, season, countriesId } = req.body;
  try {
    const activity = await Activity.create({
      name,
      difficulty,
      duration,
      season,
    });
    if(countriesId && countriesId.length > 0){
      const selectedCountries= await Country.findAll({
          where : {id:countriesId},
      });
      await activity.setCountries(selectedCountries);
  }else{
      await activity.destroy();
      return res.status(400).json({menssage: 'Debe proporcionar un pais '});
  }
    res.status(201).json(activity);
  }catch(error){
    res
      .status(500)
      .json({ error: error.message || "Failed to post activity" });
  }
}