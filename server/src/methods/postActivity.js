const { Activity, Country } = require("../db");

module.exports.postActivity = async (req, res) => {
  const { name, difficulty, duration, season, countriesId } = req.body;

  const regexNotNumbers = /^[^\d]+$/;

  const existingActivity = await Activity.findOne({ where: { name: name } });

  if(existingActivity) return res.status(400).json("There's already an activity with that name")

  switch(true){
    case !name: return res.status(400).json("Pick a name")
    case name.length>25: return res.status(400).json("Name is too long")
    case !regexNotNumbers.test(name): return res.status(400).json("Name can't contain numbers")
    case !difficulty: return res.status(400).json("Pick a difficulty level")
    case duration && duration<1: return res.status(400).json("Choose a posible duration")
    case duration>72: return res.status(400).json("Duration can't be longer than 72hs")
    case !season: return res.status(400).json("Choose a season")
    case !countriesId || countriesId.length<1: return res.status(400).json("Pick at least one country")
  }
  try {
    const activityData = {
      name,
      difficulty,
      season,
    };
    if (duration) {
      activityData.duration = duration;
    }
    const activity = await Activity.create(activityData);
    const selectedCountries = await Country.findAll({where : {id:countriesId},});
    await activity.setCountries(selectedCountries);
    res.status(201).json(activity);
  }catch(error){
    res
      .status(500)
        ;
  }
}