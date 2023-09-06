const authRouter = require('./auth');
const userRouter = require('./users');
const sulla = require('sulla');

module.exports = (app) => {
    app.get('/', (req, res) => {

        sulla.create().then((client) => start(client));
        function start(client) {
            client.onMessage((message) => {
                if (message.body === 'Hi') {
                    client.sendText(message.from, '👋 Hello from sulla!');

                }
            });
        }
        res.send({
            success: "hello world"
        })
    });
    app.use('/auth', authRouter);
    app.use('/userRouter', userRouter);
}