const mongoose = require("mongoose");

const { Schema } = mongoose;

const postModel = new Schema({
  zpid: { type: String, required: true, unique: true },
  country: { type: String, required: [true, 'country is requiered'] },
  state: { type: String, required: [true, 'state is requiered'] },
  city: { type: String, required: [true, 'city is requiered'] },
  imgSrc: { type: String },
  price: { type: String, required: [true, 'price is requiered'] },
  bedrooms: { type: String, required: [true, 'bedrooms is requiered'] },
  bathrooms: { type: String, required: [true, 'bathrooms is requiered'] },
  homeType: { type: String, required: [true, 'home type is requiered'] },
});

module.exports = mongoose.model("Post", postModel);