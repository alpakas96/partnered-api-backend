import mongoose from 'mongoose'
import charData from './characters.json' assert { type: 'json' }
import houseData from './houses.json' assert { type: 'json' }
import Character from '../../models/Characters.js'
import House from '../../models/Houses.js'

try {
    await Character.deleteMany({})
    await House.deleteMany({})
    await Character.create(charData)
    await House.create(houseData)
    console.log('database is seeded')
    mongoose.disconnect()
} catch (error) {
    console.error('Error!', error)
}