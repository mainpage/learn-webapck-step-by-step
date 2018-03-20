const express = require('express');
const path = require('path');
const router = require('./router')

const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.static(__dirname))
// route
app.use(router);

app.listen(PORT, function(){
	console.log('listening on port ' + PORT)
});


