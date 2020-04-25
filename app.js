var express = require("express");
var app = express();
const cors = require("cors")
app.use(cors())
require('dotenv').config();

const PORT = process.env.PORT || 5050
console.log("process", process.env);
console.log("process", process.env);

app.get("/getnames", (req, res, next) => {
    // res.json(["Tony","Lisa","Michael","Ginger","Mitchell"]);
    res.send(["Tony","Lisa","Michael","Ginger","Mitchell"])
   });



app.listen(PORT, () => {
 console.log(`Server running on port ${PORT}`);
});