const { Activity, Country } = require("../db");

module.exports.postActivity = async (req, res) => {
  const { id, name, difficulty, duration, season, countries } = req.body;
  try {
    const activity = await Activity.create({
      name,
      difficulty,
      duration,
      season,
    });
    if(countries && countries.length > 0){         //relaciona la actividad con el pais
      const selectedCountries= await Country.findAll({
          where : {id:countries},
      });
      await activity.setCountries(selectedCountries);
  }else{
      await activity.destroy();                 //si no proporciona pais elimina la actividade creada
      return res.status(400).json({menssage: 'Debe proporcionar un pais '});
  }
    res.status(201).json(activity);
  }catch(error){
    res
      .status(500)
      .json({ error: error.message || "Failed to post activity" });
  }
}