const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { User } = require("./sequelize");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.listen(3000, () => {
    console.log("Listening on port 3000");
})

app.post('/users/register', (req, res) => {
    data = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    };
    User.create(data).then(user => {
        res.json(user);
    })
});