const { Activity } = require("../db");

module.exports.deleteActivity = async (req, res) => {
  const { id } = req.params;
  try {
    const activity = await Activity.findByPk(id);
    console.log(activity);
    if (!activity) {
      return res.status(404).json({ message: "Activity not found" });
    }
    await activity.destroy();
    res.json({message:"Activity deleted succesfully"});
  }catch(error){
    console.log(error);
    res.status(500).json({ error: error.message || "Failed to delete activity" })};
}