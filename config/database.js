const mongoose = require('mongoose')
mongoose.Promise = global.Promise

//module.exports = mongoose.connect('mongodb://root:123@ds119688.mlab.com:19688/api-grafica')
module.exports = mongoose.connect('mongodb://root:123@ds121955.mlab.com:21955/grafica', { useNewUrlParser: true })