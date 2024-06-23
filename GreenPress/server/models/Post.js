const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PostSchema = new Schema({
    title:{
        type:String,
        require: true
    },
    body:{
        type:String,
        require: true
    },
    mintitle:{
        type:String,
        require: true
    },
    img:{
        type:String,
        require: true
    }
})
module.exports = mongoose.model('Post', PostSchema)