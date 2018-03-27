const mongoose = require('mongoose')

const Book = mongoose.model('books')

module.exports = app => {
    app.post('/api/books', (req, res) => {
        const { title, description, cover, rating, status, visible } = req.body
        const book = new Book({
            title,
            description,
            cover,
            rating,
            status,
            visible: { type: Boolean, default: false },
            dateAdded: Date.now(),
            _user: req.user.id
        })
        book.save()
    })
}