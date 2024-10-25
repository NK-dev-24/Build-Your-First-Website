const recipeContainer = document.getElementById("recipe-container");

let recipes = [
    {
        name: "Dosa",
        cookingTime: 15,
        ingredients: ["rice", "urad dal", "fenugreek seeds", "salt", "oil"]
    },
    {
        name: "Chicken Kulambu",
        cookingTime: 45,
        ingredients: ["chicken", "onion", "tomato", "ginger garlic paste", "turmeric powder", "chili powder", "coriander powder", "garam masala", "coconut", "oil"]
    },
    {
        name: "Kola Urundai",
        cookingTime: 7,
        ingredients: ["minced mutton", "onion", "ginger garlic paste", "roasted gram dal powder", "green chilies", "coriander leaves", "oil for frying"]
    }
];

function renderRecipe(recipe, index) {
    const recipeDiv = document.createElement("div");
    recipeDiv.classList.add("recipe");
    recipeDiv.innerHTML = `
        <h3>${recipe.name}</h3>
        <p><strong>Cooking Time:</strong> ${recipe.cookingTime} minutes</p>
        <p><strong>Ingredients:</strong> ${recipe.ingredients.join(", ")}</p>
        <button onclick="removeRecipe(${index})">Remove Recipe</button>
    `;
    recipeContainer.appendChild(recipeDiv);
}

function displayRecipes() {
    recipeContainer.innerHTML = ""; // Clear previous recipes
    recipes.forEach(renderRecipe);
}

function addRecipe(event) {
    event.preventDefault(); // Prevent form submission

    const recipeName = document.getElementById("recipeName").value;
    const cookingTime = document.getElementById("cookingTime").value;
    const ingredients = document.getElementById("ingredients").value.split(",");

    const newRecipe = {
        name: recipeName,
        cookingTime: parseInt(cookingTime),
        ingredients: ingredients.map(ingredient => ingredient.trim())
    };

    recipes.push(newRecipe);
    displayRecipes(); // Update the displayed recipes
    document.getElementById("recipeForm").reset(); // Reset form fields
}

function removeRecipe(index) {
    recipes.splice(index, 1); // Remove the recipe from the array
    displayRecipes(); // Update the displayed recipes
}

// Event Listeners
document.getElementById("showRecipe").addEventListener("click", displayRecipes);
document.getElementById("recipeForm").addEventListener("submit", addRecipe);
