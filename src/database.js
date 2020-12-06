import mongoose from 'mongoose'
import config from './config'

(async () => {
    try {
        const db = await mongoose.connect(config.DB, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useFindAndModify: false
        })
        console.log('database is connected to:', db.connection.name)
    } catch (error) {
        console.error(error)
    }
})();