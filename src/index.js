const express = require('express')
require('dotenv').config()
const cors = require('cors')
//require('./db/mongoose')
const userRouter = require('./routers/feedback')

const app = express()
app.use(cors())

app.use(express.json())
app.use(userRouter)
const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})
