const express = require('express');
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var sqliteParser = require('sqlite-parser');

app.post('/parsesql', function (req, res) {
	var ast = sqliteParser(req.body.sql);
  //console.log(ast);
	res.send(ast);
})

app.listen(3000, () => console.log('sql parser api listening to port 3000!'))