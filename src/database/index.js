const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://deploy:270872@cluster0.kjbbv.mongodb.net/<dbname>?retryWrites=true&w=majority', { useNewUrlParser: true,  useUnifiedTopology: true })

mongoose.Promise = global.Promise;

module.exports = mongoose;