const express = require('express');
const app = express();

// Register all midlleware
require('./boot/middlewares')(app)

// Register all routs
require('./routes')(app)


// Error handler
app.use((err, req, res, next) => {
    res.render('500', { errorMessage: err.message })
});

const startApp = () => {
    app.listen(8000, () => {
        console.log('server is runnig...')
    })
}

module.exports = startApp;