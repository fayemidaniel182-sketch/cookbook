// =====================
// MOBILE MENU
// =====================
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("open");
});


// =====================
// RECIPES DATA (FULL LIST)
// =====================
let recipes = [
{
id: 1,
name: "Jollof Rice",
category: "dinner",
cuisine: "Nigerian",
image: "https://images.unsplash.com/photo-1604908177522-040a2c4e0a6a?w=800",
ingredients: ["Rice", "Tomato paste", "Pepper", "Onions"],
instructions: "Cook rice in rich tomato sauce.",
isFavorite: false
},
{
id: 2,
name: "Fried Rice",
category: "dinner",
cuisine: "Nigerian",
image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800",
ingredients: ["Rice", "Vegetables", "Soy sauce"],
instructions: "Stir fry rice with vegetables.",
isFavorite: false
},
{
id: 3,
name: "Spaghetti Bolognese",
category: "dinner",
cuisine: "Italian",
image: "https://images.unsplash.com/photo-1523986371872-9d3ba2e2f642?w=800",
ingredients: ["Pasta", "Tomato sauce", "Beef"],
instructions: "Boil pasta and mix with sauce.",
isFavorite: false
},

{
id: 4,
name: "Pancakes",
category: "breakfast",
cuisine: "American",
image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=800",
ingredients: ["Flour", "Eggs", "Milk"],
instructions: "Mix and fry on pan.",
isFavorite: false
},
{
id: 5,
name: "Omelette",
category: "breakfast",
cuisine: "French",
image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800",
ingredients: ["Eggs", "Onions", "Tomatoes"],
instructions: "Whisk and fry eggs.",
isFavorite: false
},
{
id: 6,
name: "Avocado Toast",
category: "breakfast",
cuisine: "International",
image: "https://images.unsplash.com/photo-1526318472351-c75fcf070305?w=800",
ingredients: ["Bread", "Avocado", "Salt"],
instructions: "Toast bread and add avocado.",
isFavorite: false
},

{
id: 7,
name: "Chicken Burger",
category: "lunch",
cuisine: "American",
image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800",
ingredients: ["Bun", "Chicken", "Lettuce"],
instructions: "Assemble burger and serve.",
isFavorite: false
},
{
id: 8,
name: "Chicken Wrap",
category: "lunch",
cuisine: "Middle Eastern",
image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=800",
ingredients: ["Chicken", "Wrap", "Sauce"],
instructions: "Wrap grilled chicken.",
isFavorite: false
},
{
id: 9,
name: "Club Sandwich",
category: "lunch",
cuisine: "International",
image: "https://images.unsplash.com/photo-1550507992-eb63ffee0847?w=800",
ingredients: ["Bread", "Ham", "Cheese"],
instructions: "Stack and serve.",
isFavorite: false
},

{
id: 10,
name: "Chocolate Cake",
category: "dessert",
cuisine: "American",
image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800",
ingredients: ["Flour", "Cocoa", "Sugar"],
instructions: "Bake cake.",
isFavorite: false
},
{
id: 11,
name: "Ice Cream",
category: "dessert",
cuisine: "International",
image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800",
ingredients: ["Milk", "Sugar", "Cream"],
instructions: "Freeze mixture.",
isFavorite: false
},
{
id: 12,
name: "Cupcakes",
category: "dessert",
cuisine: "American",
image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800",
ingredients: ["Flour", "Sugar", "Eggs"],
instructions: "Bake in cups.",
isFavorite: false
},

{
id: 13,
name: "Fruit Salad",
category: "snack",
cuisine: "International",
image: "https://images.unsplash.com/photo-1564093497595-593b96d80180?w=800",
ingredients: ["Apple", "Banana", "Mango"],
instructions: "Mix fruits.",
isFavorite: false
},
{
id: 14,
name: "Popcorn",
category: "snack",
cuisine: "International",
image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?w=800",
ingredients: ["Corn", "Butter", "Salt"],
instructions: "Pop and season.",
isFavorite: false
},
{
id: 15,
name: "Yogurt Bowl",
category: "snack",
cuisine: "Healthy",
image: "https://images.unsplash.com/photo-1584270354949-1c0f3f2a0c5b?w=800",
ingredients: ["Yogurt", "Fruits", "Honey"],
instructions: "Mix and serve.",
isFavorite: false
},

{
id: 16,
name: "Grilled Chicken",
category: "dinner",
cuisine: "American",
image: "https://images.unsplash.com/photo-1604908554162-45f6b3d5d5b0?w=800",
ingredients: ["Chicken", "Spices"],
instructions: "Grill until cooked.",
isFavorite: false
},
{
id: 17,
name: "Tacos",
category: "lunch",
cuisine: "Mexican",
image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800",
ingredients: ["Tortilla", "Beef", "Cheese"],
instructions: "Fill and serve.",
isFavorite: false
},
{
id: 18,
name: "French Fries",
category: "snack",
cuisine: "American",
image: "https://images.unsplash.com/photo-1606755962773-d324e9a13086?w=800",
ingredients: ["Potatoes", "Salt", "Oil"],
instructions: "Fry until golden.",
isFavorite: false
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
// MODAL OPEN/CLOSE
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

    recipeGrid.innerHTML = list.map(r => `
        <div class="card">

            <div class="card-image">
                <img src="${r.image}" alt="${r.name}">
            </div>

            <div class="card-body">
                <h3>${r.name}</h3>
                <p>${r.cuisine}</p>
                <span class="card-category">${r.category}</span>
            </div>

            <div class="card-actions">
                <button class="btn-delete" data-id="${r.id}">🗑</button>
                <button class="btn-favorite" data-id="${r.id}">
                    ${r.isFavorite ? "❤️" : "🤍"}
                </button>
                <button class="btn-shopping" data-id="${r.id}">🛒</button>
            </div>

        </div>
    `).join("");

    attachEvents();
}


// =====================
// EVENTS
// =====================
function attachEvents(){

    document.querySelectorAll(".btn-delete").forEach(btn => {
        btn.onclick = () => {
            const id = +btn.dataset.id;
            recipes = recipes.filter(r => r.id !== id);
            save();
            renderRecipes(recipes);
        };
    });

    document.querySelectorAll(".btn-favorite").forEach(btn => {
        btn.onclick = () => {
            const id = +btn.dataset.id;
            const recipe = recipes.find(r => r.id === id);
            recipe.isFavorite = !recipe.isFavorite;
            save();
            renderRecipes(recipes);
        };
    });

    document.querySelectorAll(".btn-shopping").forEach(btn => {
        btn.onclick = () => {
            openShopping(+btn.dataset.id);
        };
    });

}


// =====================
// SHOPPING LIST
// =====================
function openShopping(id){

    const recipe = recipes.find(r => r.id === id);

    shoppingItems.innerHTML = recipe.ingredients.map(i =>
        `<div class="shopping-item">🛒 ${i}</div>`
    ).join("");

    shoppingPanel.classList.add("open");
}

closeShoppingPanel.onclick = () => {
    shoppingPanel.classList.remove("open");
};


// =====================
// SEARCH + FILTER
// =====================
searchInput.oninput = filter;
categoryFilter.onchange = filter;

function filter(){

    const text = searchInput.value.toLowerCase();
    const cat = categoryFilter.value;

    const filtered = recipes.filter(r => {
        return (
            (r.name.toLowerCase().includes(text) ||
            r.cuisine.toLowerCase().includes(text)) &&
            (cat === "all" || r.category === cat)
        );
    });

    renderRecipes(filtered);
}


// =====================
// SAVE RECIPE
// =====================
saveRecipeBtn.onclick = () => {

    const name = recipeName.value.trim();
    const category = recipeCategory.value;
    const cuisine = recipeCuisine.value.trim();
    const ingredients = recipeIngredients.value.split("\n").filter(Boolean);
    const instructions = recipeInstructions.value.trim();

    recipes.push({
        id: Date.now(),
        name,
        category,
        cuisine,
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800",
        ingredients,
        instructions,
        isFavorite: false
    });

    save();
    renderRecipes(recipes);
    modalOverlay.classList.remove("open");
};


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
