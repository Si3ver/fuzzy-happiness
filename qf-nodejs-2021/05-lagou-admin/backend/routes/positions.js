const express = require('express')
const router = express.Router()

const { add, list, remove, update, listone } = require('../controllers/positions')
const uploadMiddleware = require('../middlewares/upload')

router.get('/list', list)
router.post('/upload', uploadMiddleware)
router.post('/add', add)
router.delete('/remove', remove)
router.patch('/update', update)
router.post('/listone', listone)

module.exports = router