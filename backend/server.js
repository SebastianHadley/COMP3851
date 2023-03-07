const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const router = express.Router();
const app = express();
const getFaculties = require("./queries/FacultyQueries");

app.use(bodyParser.json());
app.use(cors());

app.get("/checking", (req, res) => {
    res.send({
        check: "Hello World!",
    });

});

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

module.exports = router;

