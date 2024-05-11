const {refreshHtmlContents, loadHtml, log} = require('./toolkit.js');
const tag = 'app.js'
const express = require('express');
const bodyParser = require('body-parser');
const adminRoute = require('./routes/admin')


const app = express();

// encodes data came from last page
app.use(bodyParser.urlencoded({extended: false}));



app.use('/', (req, res, next) => {
    log('Page: / (root)', tag);
    res.send(loadHtml('index'));
    
});

app.listen(1300);