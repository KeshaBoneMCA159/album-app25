const express = require('express')
const router = express.Router()
const PORT = process.env.PORT || 3000

const pool = require('../config/dbconfig.js')

// Step 4 Root route => http://localhost:3000/api
router.get('/api', (req, res)=> {
    //res.send('album api')
    res.json({
        'Albums': `http://localhost:${PORT}/api/album`
    })
})

router.use('/api/album', require('./api/albumRoutes'))

// Step 5 Error page
router.use((req, res, next)=> {
    res.status(404)
    .send('<h1>404 Error!!! This page does not exist</h1>')
})

module.exports = router