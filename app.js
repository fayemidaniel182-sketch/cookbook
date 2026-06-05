```javascript
// =====================
// MOBILE MENU
// =====================
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("open");
});


// =====================
// RECIPES DATA (WITH IMAGES)
// =====================
let recipes = [
{
id:1,
name:"Jollof Rice",
category:"dinner",
cuisine:"Nigerian",
image:"https://images.unsplash.com/photo-1604908177522-040a2c4e0a6a?w=800",
ingredients:["Rice","Tomato paste","Pepper","Onions","Chicken stock"],
instructions:"Cook rice in rich tomato sauce until soft.",
isFavorite:false
},
{
id:2,
name:"Pancakes",
category:"breakfast",
cuisine:"American",
image:"https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=800",
ingredients:["Flour","Eggs","Milk","Sugar"],
instructions:"Mix ingredients and fry on pan.",
isFavorite:false
},
{
id:3,
name:"Burger",
category:"lunch",
cuisine:"American",
image:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800",
ingredients:["Bun","Beef patty","Lettuce","Cheese"],
instructions:"Assemble ingredients and serve.",
isFavorite:false
},
{
id:4,
name:"Pizza",
category:"dinner",
cuisine:"Italian",
image:"https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800",
ingredients:["Dough","Cheese","Tomato sauce"],
instructions:"Bake until crispy and golden.",
isFavorite:false
},
{
id:5,
name:"Chocolate Cake",
category:"dessert",
cuisine:"American",
image:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800",
ingredients:["Flour","Cocoa","Sugar","Eggs"],
instructions:"Bake at 180°C for 30–40 minutes.",
isFavorite:false
},
{
id:6,
name:"Fruit Salad",
category:"snack",
cuisine:"International",
image:"https://images.unsplash.com/photo-1564093497595-593b96d80180?w=800",
ingredients:["Apple","Banana","Mango","Grapes"],
instructions:"Mix all fruits together and serve fresh.",
isFavorite:false
},
{
id:7,
name:"Spaghetti Bolognese",
category:"dinner",
cuisine:"Italian",
image:"https://images.unsplash.com/photo-1523986371872-9d3ba2e2f642?w=800",
ingredients:["Spaghetti","Minced meat","Tomato sauce"],
instructions:"Cook pasta and mix with sauce.",
isFavorite:false
},
{
id:8,
name:"Chicken Shawarma",
category:"lunch",
cuisine:"Middle Eastern",
image:"https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=800",
ingredients:["Chicken","Bread","Garlic sauce","Vegetables"],
instructions:"Wrap grilled chicken in bread.",
isFavorite:false
}
];


// =====================
// ELEMENTS
// =====================
const recipeGrid = document.getElementById("recipeGrid");
const modalOverlay = document.getElementById("modalOverlay");
const modalClose = document.getElementById("modalClose");
const saveRecipeBtn = document.getElementById("saveRecipeBtn");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const shoppingPanel = document.getElementById("shoppingPanel");
const shoppingItems = document.getElementById("shoppingItems");
const closeShoppingPanel = document.getElementById("closeShoppingPanel");


// =====================
// OPEN MODAL
// =====================
document.getElementById("openFormBtn").addEventListener("click", () => {
    modalOverlay.classList.add("open");
});

modalClose.addEventListener("click", () => {
    modalOverlay.classList.remove("open");
});

modalOverlay.addEventListener("click", (e) => {
    if(e.target === modalOverlay){
        modalOverlay.classList.remove("open");
    }
});


// =====================
// RENDER RECIPES
// =====================
function renderRecipes(list){

    recipeGrid.innerHTML = list.map(recipe => `
        <div class="card">

            <div class="card-image">
                <img src="${recipe.image}" alt="${recipe.name}">
            </div>

            <div class="card-body">
                <h3>${recipe.name}</h3>
                <p>${recipe.cuisine}</p>
                <span class="card-category">${recipe.category}</span>
            </div>

            <div class="card-actions">
                <button class="btn-delete" data-id="${recipe.id}">🗑 Delete</button>
                <button class="btn-favorite" data-id="${recipe.id}">
                    ${recipe.isFavorite ? "❤️" : "🤍"}
                </button>
                <button class="btn-shopping" data-id="${recipe.id}">🛒</button>
            </div>

        </div>
    `).join("");

    attachEvents();
}


// =====================
// CARD EVENTS
// =====================
function attachEvents(){

    document.querySelectorAll(".btn-delete").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = Number(btn.dataset.id);
            recipes = recipes.filter(r => r.id !== id);
            save();
            renderRecipes(recipes);
        });
    });

    document.querySelectorAll(".btn-favorite").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = Number(btn.dataset.id);
            const recipe = recipes.find(r => r.id === id);
            recipe.isFavorite = !recipe.isFavorite;
            save();
            renderRecipes(recipes);
        });
    });

    document.querySelectorAll(".btn-shopping").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = Number(btn.dataset.id);
            openShopping(id);
        });
    });
}


// =====================
// SHOPPING LIST
// =====================
function openShopping(id){

    const recipe = recipes.find(r => r.id === id);

    shoppingItems.innerHTML = recipe.ingredients.map(item =>
        `<div class="shopping-item">🛒 ${item}</div>`
    ).join("");

    shoppingPanel.classList.add("open");
}

closeShoppingPanel.addEventListener("click", () => {
    shoppingPanel.classList.remove("open");
});


// =====================
// SEARCH + FILTER
// =====================
searchInput.addEventListener("input", filter);
categoryFilter.addEventListener("change", filter);

function filter(){

    const search = searchInput.value.toLowerCase();
    const category = categoryFilter.value;

    const filtered = recipes.filter(r => {

        const matchSearch =
            r.name.toLowerCase().includes(search) ||
            r.cuisine.toLowerCase().includes(search);

        const matchCategory =
            category === "all" || r.category === category;

        return matchSearch && matchCategory;
    });

    renderRecipes(filtered);
}


// =====================
// ADD RECIPE
// =====================
saveRecipeBtn.addEventListener("click", () => {

    const name = document.getElementById("recipeName").value;
    const category = document.getElementById("recipeCategory").value;
    const cuisine = document.getElementById("recipeCuisine").value;
    const ingredients = document.getElementById("recipeIngredients")
        .value.split("\n").filter(Boolean);
    const instructions = document.getElementById("recipeInstructions").value;

    const newRecipe = {
        id: Date.now(),
        name,
        category,
        cuisine,
        image:"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800",
        ingredients,
        instructions,
        isFavorite:false
    };

    recipes.push(newRecipe);

    save();
    renderRecipes(recipes);

    modalOverlay.classList.remove("open");
});


// =====================
// LOCAL STORAGE
// =====================
function save(){
    localStorage.setItem("recipes", JSON.stringify(recipes));
}

function load(){
    const data = localStorage.getItem("recipes");
    if(data){
        recipes = JSON.parse(data);
    }
}


// =====================
// INIT
// =====================
load();
renderRecipes(recipes);
```
