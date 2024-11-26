const express = require('express');
const app = express();
const layout = require('express-ejs-layouts');
const approutes = require('./routes/routes');

app.set('view engine', 'ejs');
app.set('views', './views')
app.set('layout', './layouts/main')
app.use(layout);

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// routes
app.use(approutes);

app.get('/', (req, res) => {
    res.render('pages/index', { 
        title: 'Home',
    });
});

// run server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});