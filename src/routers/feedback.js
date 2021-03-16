const https = require('https');
const express = require('express')
const axios = require('axios')
let Datastore = require('nedb')

let db = new Datastore({ filename: `${process.cwd()}/src/db/database.db`, autoload: true });
const router = express.Router()

const instance = axios.create({
    httpsAgent: new https.Agent({  
      rejectUnauthorized: false
    })
});

router.post('/feedbacks', async (req, res) => {

    

    try {
        let feeback = req.body

        await db.insert(feeback)
        res.send(feedback)
    } catch (error) {
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
