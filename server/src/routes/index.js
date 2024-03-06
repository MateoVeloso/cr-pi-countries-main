const { Router } = require("express");

const router = Router();

const { getCountries } = require("../methods/getCountries");
const { getCountryById } = require("../methods/getCountryById");
const { getCountryByName } = require("../methods/getCountryByName");
const { getActivities } = require("../methods/getActivities");
const { postActivity } = require("../methods/postActivity");
const { deleteActivity } = require("../methods/deleteActivity");

router.get("/countries", getCountries);
router.get(`/countries/name`, getCountryByName);
router.get("/countries/:idPais", getCountryById);
router.get("/activities", getActivities);
router.post("/activities", postActivity);
router.delete("/activities/:id", deleteActivity);

module.exports = router;
