const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const router = express.Router();
const app = express();
const getFaculties = require("./queries/FacultyQueries");

app.use(bodyParser.json());
app.use(cors());

app.listen(3001, () => {
    console.log("Server started on port 3001");
});

app.get('/FacultyMember', async (req, res) => {
  try {
  const faculties = await getFaculties();
  console.log(faculties)
  res.json(faculties);
  }
  catch (err) {
    console.error('Error while getting Faculty Members', err);
    res.sendStatus(500);
  }
});

module.exports = router;

