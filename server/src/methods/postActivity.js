const { Activity, Country } = require("../db");

module.exports.postActivity = async (req, res) => {
  try {
    const { name, difficulty, duration, season, countriesIds } = req.body;

    const activity = await Activity.create({
      name,
      difficulty,
      duration,
      season,
      countries: countriesIds,
    });
    let countriesFound = [];

    for (let i = 0; i < countriesIds.length; i++) {
        const country = await Country.findOne({where: {id: countriesIds[i],}})
        country && countriesFound.push(country)
    }

    await activity.addCountry(countriesFound);

    const ActivitySet = await Activity.findOne(
        {where: {name: activity.name,},
        include: {
            model: Country,
            attributes: ["name"],
            through: {attributes: []},
            order: [["ASC"]],
        },
    });

    res.json([ActivitySet]);
  }catch(error){
    res
      .status(500)
      .json({ error: error.message || "Failed to post activity" });
  }
}