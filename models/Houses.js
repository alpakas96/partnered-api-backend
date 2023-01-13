// Define a model to represent the houses inside of `houses.json` with a
// subdocument model to represent the characters in `characters.json`.

// MAKE SURE TO IMPORT THE CHARACTER MODEL AND PUT IT IN THE HOUSESSCHEMA

import mongoose from 'mongoose'

const housesSchema = new mongoose.Schema({
    _id: String,
    name: String,
    mascot: String,
    headOfHouse: String,
    houseGhost: String,
    founder: String,
    __v: Number,
    school: String,
    members: [{type: mongoose.Schema.Types.ObjectId, ref: "Character"}],
    values: [String],
    colors: [String]
})

export default mongoose.model('House', housesSchema)