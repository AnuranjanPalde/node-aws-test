var express = require("express");
var cors = require("cors");

var app = express();
app.use(cors());

app.get("/version", function(request, response) {
response.end(JSON.stringify({
    "name": "anuranjan"
}));
});

app.listen(5000);