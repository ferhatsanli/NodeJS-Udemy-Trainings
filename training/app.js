const express = require('express');
const bp = require('body-parser');


// express initializing
const app = express();

// routers
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// data encoding
app.use(bp.urlencoded({extended: false}));


// routing to the pages
app.use(adminRoutes);
app.use(shopRoutes);

// 404 page
app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>');
});

// start server
app.listen(1300);