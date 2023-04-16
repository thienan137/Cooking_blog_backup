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
router.post('/login', recipeController.login_post);
router.get('/signup', recipeController.signup);
router.post('/signup', recipeController.signup_post);
router.post('/submit-recipe', recipeController.submitRecipeOnPost);
router.get('/my-recipes', recipeController.myRecipes);
router.post('/delete-recipes/:id', recipeController.deleteRecipeOnPost);

router.get('/logout', recipeController.logout_get);

router.get('/edit-my-recipes/:id', recipeController.editMyRecipes);
router.post('/update-recipes/:id', recipeController.updateRecipe);



module.exports = router;
