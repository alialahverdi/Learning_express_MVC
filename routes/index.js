const authRouter = require('./auth');
const userRouter = require('./users');

module.exports = (app) => {
    app.get('/', (req, res) => {
        res.send({
            success: "hello world"
        })
    });
    app.use('/auth', authRouter);
    app.use('/userRouter', userRouter);
}