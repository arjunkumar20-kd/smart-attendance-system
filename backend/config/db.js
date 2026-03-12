'use strict';

const mongoose = require('mongoose');

const dbURI = 'mongodb://<username>:<password>@localhost:27017/<database>';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected…'))
    .catch(err => console.error('MongoDB connection error:', err));

module.exports = mongoose;
