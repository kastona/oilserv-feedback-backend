const https = require('https');
const express = require('express')
const axios = require('axios')
let Datastore = require('nedb')
let emailService = require('../util/email')

let db = new Datastore({ filename: `${process.cwd()}/src/db/database.db`, autoload: true });
const router = express.Router()

router.post('/feedbacks', async (req, res) => {

    

    try {
        let feedback = req.body

        await db.insert(feedback)


        emailService.send(feedback)

        res.send(feedback)
    } catch (error) {
        console.log(error.message)
        res.status(500).send()
    }
})


router.get('/feedbacks', async (req, res) => {


    
    try {

        db.find({}, function (err, feedbacks) {

            if (err) {
                console.log("system error")
                return res.status(500).send()
            }

            if (!feedbacks) {
                return res.status(404).send('Feedback does not exist!')
            }

            
            return res.send(feedbacks)

        });
    } catch (error) {
        console.log(error.message)
        res.status(500).send()
    }
})
module.exports = router
