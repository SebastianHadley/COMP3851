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
