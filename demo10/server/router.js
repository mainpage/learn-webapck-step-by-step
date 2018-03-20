const express = require('express');
const mockData = require('./musicList.json');

const router = express.Router();

router.get('/', function(req, res){
    res.send('<h1>Hello World</h1>')
});

router.get('/api/musicList', function(req, res){
    res.json(mockData);
});

module.exports = router;