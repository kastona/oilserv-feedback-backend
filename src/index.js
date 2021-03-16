const express = require('express')
require('dotenv').config()
//require('./db/mongoose')
const userRouter = require('./routers/feedback')

const app = express()

app.use(express.json())
app.use(userRouter)
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})
