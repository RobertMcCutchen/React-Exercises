//First, I've got to set up my engine.
const Express = require('express')
const Coordinate = require('./coordinate')
const cors = require('cors')
const app = Express()

//Then, I have set up my middleware
app.use(Express.json())
app.use(cors())

//For now, I'm going to use an empty array in place of a database
let locations = []

//To start, users will save locations
app.post('/save-location', (req, res) => {
    const latitude = req.body.lat
    const longitude = req.body.longitude

    let coordinate = new Coordinate(latitude, longitude)

    locations.push(coordinate)

    res.send('Location saved!')
})

//Users will also need to view their locations
app.get('/all-locations', (req, res) => {
    res.json(locations)
})

app.get('/', (req, res) => {})

app.listen(PORT=3001, () => {
    console.log('Server is running...')
})