const mongoose = require('mongoose');


let mSchema = mongoose.Schema;

const movieSchema = new mSchema({
    moviename:String,
    actor:String,
    actres:String,
    director:String,
    releasedyear:String,
    camera:String,
    producer:String,
    language:String
});

const movieModel = mongoose.model("movie",movieSchema);
module.exports = movieModel;