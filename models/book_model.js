const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    name : {
        type: String,
        require: true
    },
        
    author : {
        type: String,
        require: true
    } ,
    unique_code : {
            type: Number,
            require: true
        }, 
    quantity : {
            type: Number,
            require: true
        }}, { timestamps: true})

        const bookModel = mongoose.model('bookModel', bookSchema);
        module.exports = bookModel;
