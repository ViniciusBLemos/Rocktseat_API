const express = require('express');
const bodyParcer = require('body-parser');
require('./database/index');

const app = express();

app.use(bodyParcer.json());
app.use(bodyParcer.urlencoded({ extended: false }));

require('./app/controllers/index')(app);


app.listen(3000);