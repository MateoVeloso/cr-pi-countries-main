const { Router } = require("express");

const router = Router();

const { getCountries } = require("../methods/getCountries");
const { getCountryById } = require("../methods/getCountryById");
const { getCountryByName } = require("../methods/getCountryByName");
const { getActivities } = require("../methods/getActivities");
const { postActivity } = require("../methods/postActivity");

router.get("/countries", getCountries);
router.get("/countries/:idPais", getCountryById);
router.get(`/countries/name?="..."`, getCountryByName);
router.get("/activities", getActivities);
router.post("/activities", postActivity);

module.exports = router;
