import express from 'express'
import cors from "cors"
import House from './models/Houses.js'
import db from "./lib/connections.js";
import Characters from './models/Characters.js';

const app = express()

app.use(cors())

const port = process.env.PORT || 3000

db.on("connected", () => {
    app.listen(port, () => console.log(`app listening on port ${port}`))
})


//this configures the app to parse any incoming json data if needed
// const bodyParser = require('body-parser');
// app.use(bodyParser.json());

//this is the root route 
// make it redirect to the houses route:
app.get('/', async (req, res) => {
    res.redirect('/houses')
})

//this is the /houses route: 
app.get('/houses', async (req, res) => {
    const houses = await House.find({})
    res.json(houses)
})

//this is the members route
app.get('/houses/members', async (req, res) => {
    const members = await Characters.find({})
    res.json(members)
})

// A house create route ('/house') that a user could send a POST request to in order to create a new house:
app.post('/house', async (req, res) => {
    const newHouse = new House(req.body);
    await newHouse.save();
    res.json(newHouse);
});

// A house detail route (`'/house/5a05e2b252f721a3cf2ea33f'`) that returns the document for the house in the url parameter
app.get('/houses/:id', async (req, res) => {
    const houseDetail = await House.findOne({_id: req.params.id})
    res.json(houseDetail)
})

//a character detail route that returns the document for the member in the url parameter
app.get('/houses/members/:id', async (req, res) => {
    const memberDetail = await Characters.findOne({_id: req.params.id})
    res.json(memberDetail)
})

