const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

// import routes
const routeTemplate = require('./routes/template.route');

// setup app
const app = express();

// setup middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('tiny'));

// setup routes
app.use('/', routeTemplate);

// setup mongodb connection
// const mongo_url = 'mongo://';
// mongoose.connect(mongo_url);
// const db = mongoose.connection;
// db.on('error', (err) => {
//     console.log(err);
// })
// db.once('open', () => {
//     console.log('[+] Connection to MongoDB server established');
// })

// run server
app.listen(process.env.PORT || 3000, () => {
    console.log(`[+] Server listening on port ${process.env.PORT || 3000}`);
})