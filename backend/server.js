const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const router = express.Router();
const app = express();
const getFaculties = require("./queries/FacultyQueries");
const getWeekOList = require("./queries/Week-OListQueries");
const getTestomonials = require("./queries/TestomonialQueries");
const getFAQs = require("./queries/FAQQueries");
const getBannerText = require("./queries/BannerQueries");
const getNavBar = require("./queries/NavbarQueries")
const getFooter = require("./queries/FooterQueries")
const getGeneralInformation = require("./queries/GeneralInformationQueries")

app.use(bodyParser.json());
app.use(cors());

app.listen(3001, () => {
    console.log("Server started on port 3001");
});

app.get('/FacultyMember', async (req, res) => {
  try {
  const faculties = await getFaculties();
  res.json(faculties);
  }
  catch (err) {
    console.error('Error while getting Faculty Members', err);
    res.sendStatus(500);
  }
});

app.get('/Week-O', async (req, res) => {
  try {
    const weekOList = await getWeekOList();
    res.json(weekOList);
  }
  catch (err) {
    console.error('Error while getting Week-O List', err);
    res.sendStatus(500);
  }
});

app.get('/StudentTestimonials', async (req, res) => {
  try {
    const Testomonials = await getTestomonials();
    res.json(Testomonials);
  }
  catch (err) {
    console.error('Error while getting Testomonials', err);
    res.sendStatus(500);
  }
});


app.get('/FAQs', async (req, res) => {
  try {
    const FAQs = await getFAQs();

    res.json(FAQs);
  }
  catch (err) {
    console.error('Error while getting FAQs', err);
    res.sendStatus(500);
  }
});

app.get('/BannerInformation', async (req, res) => {
  try {
    const bannerText = await getBannerText();
    res.json(bannerText);
  }
  catch (err) {
    console.error('Error while getting Banner Text', err);
    res.sendStatus(500);
  }
});


app.get('/Footer', async (req, res) => {
  try {
    const bannerText = await getFooter();
    res.json(bannerText);
  }
  catch (err) {
    console.error('Error while getting Footer Text', err);
    res.sendStatus(500);
  }
});


app.get('/NavBar', async (req, res) => {
  try {
    const bannerText = await getNavBar();
    res.json(bannerText);
  }
  catch (err) {
    console.error('Error while getting Nav Bar', err);
    res.sendStatus(500);
  }
});

app.get('/GeneralInformation', async (req, res) => {
  try {
    const generalInfo = await getGeneralInformation();
    res.json(generalInfo);
  }
  catch (err) {
    console.error('Error while getting GeneralInformation', err);
    res.sendStatus(500);
  }
});
module.exports = router;

