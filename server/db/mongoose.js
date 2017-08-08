var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

let db = {
  localhost: 'mongodb://localhost:27017/TodoApp',
  mlab: 'mongodb://stuart:hobart61@ds123400.mlab.com:23400/todoapp'
};
mongoose.connect(db.mlab || db.localhost);

//mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};
