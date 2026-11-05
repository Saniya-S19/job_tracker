const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
    company: {
        type: String,
        required: true,
    },

    position: {
        type: String,
        required: true
    },

    dateApplied: {
        type: Date,
        default: Date.now(),

    },

    Status: {
        type: String,
        default: 'Applied',

    },

});

module.exports = mongoose.model('Job', JobSchema);

