import mongoose from 'mongoose'

let mongooseConnectionConfig = { useNewUrlParser: true, useUnifiedTopology: true }

const url = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/example'


mongoose.connect(url , mongooseConnectionConfig)

mongoose.set("returnOriginal", false);
mongoose.set('strictQuery', true)

mongoose.connection.on('connected', ()=> console.log("Connected to database"))
mongoose.connection.on('disconnected', ()=> console.log("Disconnected from database"))
mongoose.connection.on('error', error=> console.error("Database error", error))

export default mongoose.connection