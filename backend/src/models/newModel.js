import mongoose from 'mongoose';

const newSchema = new mongoose.Schema({
    title: String,
    description: String,
    date: {
        type: Date,
        default: new Date()
    }, 
    content: String, 
    autor: String, 
    archiveDate: {
        type: Date, 
        default: null
    },
});

const New = mongoose.model('New', newSchema);

export default New;