const express = require('express');
const {log, loadHtml} = require('../toolkit');
const fs = require('fs');

const router = express.Router();


router.get('/users', (req, res, next) => {
    log('root page loading', 'app');
    let htmlUserList = '<ul>';
    const fileContext = fs.readFileSync('./users.txt').toString().split('\n');
    console.log(fileContext);
    console.log('----------------');
    htmlUserList += fileContext.map(user => '<li>' + user + '</li>').toString().replaceAll(',','');
    htmlUserList += '</ul>'
    htmlUserList += '<form action="/" method="GET"><button type="submit">HomePage</button></form>';
    res.send(htmlUserList);
});


router.post('/adduser', (req, res, next) => {
    const users = Object.values(req.body);
    console.log(users);
    fs.appendFile('users.txt', users.map(user => [ user + '\n']).toString(), () => {});
    // log(req.body.theText, '  ');
    res.redirect('/users');
});

router.get('/test', (req, res, next) => {
    res.send(loadHtml('test'));
});


module.exports = router;
