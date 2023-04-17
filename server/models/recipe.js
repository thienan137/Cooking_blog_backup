const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'This field is required.'
  },
  description: {
    type: String,
    required: 'This field is required.'
  },
  email: {
    type: String,
    required: 'This field is required.'
  },
  ingredients: {
    type: Array,
    required: 'This field is required.'
  },
  category: {
    type: String,
    enum: ['Thai', 'American', 'Chinese', 'Mexican', 'Indian', 'Vietnamese', 'Japanese', 'Korean'],
    required: 'This field is required.'
  },
  image: {
    type: String,
    required: 'This field is required.'
  },
  user: {   // Add a 'user' field to store the reference to the user who created the recipe
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

recipeSchema.index({ name: 'text', description: 'text' });

module.exports = mongoose.model('Recipe', recipeSchema);