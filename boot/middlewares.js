const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');

module.exports = (app) => {
    app.set('views', './views')
    app.set('view engine', 'pug')
    app.use(session({
        secret: '1D3A5WD13A5WD13AW1D35A1W3D',
        resave: true,
        saveUninitialized: true
    }));

    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: false }));
    // parse application/json
    app.use(bodyParser.json());
    app.use(cookieParser());
}