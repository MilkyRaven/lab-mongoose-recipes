const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Connection to the database "recipe-app"
const mongoConnect = async function() {
  try{
    const x = await mongoose.connect(MONGODB_URI)
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
   //await Recipe.deleteMany()
    //adding recipes
   //addRecipe();
   updateRecipe("Cinnamon Rolls")
   showRecipes();
  } catch (err) {
    console.log('Error connecting to the database' + err)
  }
}

const addRecipe = async function() {
  try {
    const recipe = await Recipe.create({
      title: "Cinnamon Rolls",
      level: "Amateur Chef",
      ingredients: ["Milk", "Granulated sugar", "Instant yeast", "Butter", "Egg", "Bread flour", "Cinnamon", "Salt", "Vanilla"],
      cuisine: "Northen European",
      dishType: "dessert",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Kanelbulle.jpg",
    duration: 140, 
    creator: "Milki Kiwi"
  })
 } catch (err){
    console.log(err)
  }
}

//adding various recipes

// const addVariousRecipes = async function() {
//   try{
//     const variousRecipes = await Recipe.create()
//   }
//   catch (err) {
//     console.log(err)
//   }
// }

//update
updateRecipe = async function(title) {
  console.log("updating recipe")
  try {
    const recipe = await Recipe.updateOne({duration: "100"})
    console.log("The update was a success!")
  }
  catch (err){console.log(err)}
}

const showRecipes = async function() {
  console.log("Showing the recipes 🥨")
  try {
    const recipes = await Recipe.find({title: "Cinnamon Rolls"})
    console.log(recipes)
  }catch (err) {
    console.log(err)
  }
}

mongoConnect();