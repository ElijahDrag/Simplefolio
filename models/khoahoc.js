var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var khoahoc = new Schema({ // Các tên phía dưới quyết định tên sẽ dùng trong EJS
  picture: String, 
  title: String,
  subtitle: String
}, {
    collection: 'khoahoc'
});

module.exports = mongoose.model('xxx', khoahoc)