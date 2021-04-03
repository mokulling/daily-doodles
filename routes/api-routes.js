const router = require('express').Router()
const drawingController = require('../controllers/DrawingController')
const userController = require('../controllers/userController')


router.route('/api/drawings')
    .get(drawingController.getDrawings)
    .post(drawingController.createDrawing)


router.route('/api/drawings/:id')
    .put(drawingController.updateDrawing)
    .delete(drawingController.deleteDrawing)


router.route('/api/user/:id')
    .put(userController.updateUser)
    .get(userController.getUser)



module.exports = router