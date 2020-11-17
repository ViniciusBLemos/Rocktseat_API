const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/noderest', 
    { useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true});

// const mongoose = require('mongoose');
// mongoose.Promise = global.Promise;
// mongoose.connect("mongodb://localhost/noderest", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true
// });

// module.exports = mongoose


// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/noderest');
// mongoose.Promise = global.Promise;

// module.exports = mongoose;