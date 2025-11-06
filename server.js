// Step 1 build server
const express = require('express')
const server = express()
const router = require('./routes/router')
const PORT = process.env.PORT || 3000

// Step 1a Handle security
const helmet = require('helmet')
const cors = require('cors')

// Step 2 Configuring helmet
//server.use(helmet())
server.use(helmet.contentSecurityPolicy({
    useDefaults: true,
    crossOriginResourcePolicy: false,
    crossOriginEmbedderPolicy: false,
    directives: {
        "img-src": ["'self'", "https: data"],
        "scriptSrc": ["'self'", "cdn.jsdelivr.net"]
    } 
}))

server.use(cors())
server.use(express.json())
server.use(express.urlencoded({ extended: true}))

server.use('/', router)

// Part of Step 1
server.listen(PORT, ()=> console.log(`It was working a second ago!!!`))

