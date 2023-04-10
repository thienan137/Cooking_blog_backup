const express = require("express");
const router = express.Router();
const recipeController = require("../controllers/recipeController");

/* 
    app routes
*/
router.get("/", recipeController.homepage);
router.get("/categories", recipeController.exploreCategories);
router.get('/recipe/:id', recipeController.exploreRecipe );
router.get('/categories/:id', recipeController.exploreCategoriesById);
router.post('/search', recipeController.searchRecipe);
router.get('/explore-latest', recipeController.exploreLatest);
router.get('/explore-random', recipeController.exploreRandom);
router.get('/submit-recipe', recipeController.submitRecipe);
router.get('/about', recipeController.about);
router.get('/login', recipeController.login);
router.get('/signup', recipeController.signup);
router.post('/submit-recipe', recipeController.submitRecipeOnPost);
router.get('/my-recipes', recipeController.myRecipes);
router.post('/delete-recipes/:id', recipeController.deleteRecipeOnPost);









module.exports = router;
