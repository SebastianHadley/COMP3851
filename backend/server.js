const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

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

const router = express.Router();
console.log(this.route);
const { connection } = require('./db');

app.get('/FacultyMember', async (req, res) => {
  try {
    console.log("booom");
    const pool = await connection;
    const result = await pool.request().query('SELECT * FROM FacultyMember');
    res.json(result.recordset);
    console.log(result.resultset);
  } catch (err) {
    console.error('Error while getting users', err);
    res.sendStatus(500);
  }
});

module.exports = router;

