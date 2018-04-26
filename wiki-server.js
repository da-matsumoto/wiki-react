const path = require('path')
const NeDB = require('nedb')
const sb = new NeDB({
    filename: path.join(__dirname, 'wiki.db'),
    autoload: true
})

const express = require('express')
const app = express()
const portNo = 3001
const bodyParser = require('body-parser')