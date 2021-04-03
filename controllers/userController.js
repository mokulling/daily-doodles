const db = require('../models/')

module.exports = {
    getUser: function(req, res) {
        const { id } = req.params
        res.send(id)

    },
    updateUser: function(req,res) {

    }


}