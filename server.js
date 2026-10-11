
require('dotenv').config()
const app = require('./src/app')
const connectToDB = require('./src/config/database')


app.listen(3000, () => {
    console.log('====================================');
    console.log('Server is Running on port 3000');
    console.log('====================================');
})


connectToDB()