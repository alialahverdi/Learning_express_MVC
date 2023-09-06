class UsersController {
    index(req, res) {
        res.send({
            success: true
        })
    }
}

module.exports = new UsersController;