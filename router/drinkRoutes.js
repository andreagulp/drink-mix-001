const mongoose = require('mongoose')

const Drink = mongoose.model('drinks')

module.exports = app => {
    app.post('/api/newdrink', (req, res) => {
        const { name, description, img, glass, rating, visible } = req.body
        console.log('request body as sent to route backend', name)
        const drink = new Drink({
            name,
            description,
            img,
            rating,
            glass,
            visible,
            dateAdded: Date.now(),
            _user: req.user.id
        })
        drink.save()
        res.send('done')
    })

    app.get('/api/drinks', async (req, res) => {
        const drinks = await Drink.find({ _user: req.user.id })
        res.send(drinks)
    });
}


