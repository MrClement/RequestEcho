var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.all("*", function(req, res) {
    console.log(req);
    var simpleRequest = {"headers": req.headers, "url": req.url, "body": req.body, "query": req.query};
    res.json(simpleRequest);
});

app.listen(3000);

