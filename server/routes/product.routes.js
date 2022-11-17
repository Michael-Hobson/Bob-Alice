const Product = require('../controllers/product.controller');

module.exports = (app) => {
    app.get('/api/product', Product.findAll )
    app.post('/api/product', Product.create )
    app.get('/api/product/:id', Product.findOne )
    app.put('/api/product/:id', Product.update)
    app.delete('/app/product/:id', Product.delete)
}