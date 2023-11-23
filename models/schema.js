import mongoose  from 'mongoose';
const { Schema } = mongoose;

const authorSchema = new Schema({
  name: String,
});

const Author = mongoose.model('author', authorSchema); 

export {
  Author
};