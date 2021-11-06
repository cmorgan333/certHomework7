var RECIPES = [
    {
        name: "Apple Sauce",
        recipeItems:[
            {
                name: "apples",
                checked: false,
                quantity: "4 lbs",
            },
            {
                name: "lemon peels",
                checked: false,
                quantity: "2",
            },
            {
                name: "apple cider vinegar",
                checked: false,
                quantity: "3 table spoons",
            },
            {
                name: "ground cinnamon",
                checked: false,
                quantity: "1/2 teaspoon",
            },
            {
                name: "white sugar",
                checked: false,
                quantity: "1/2 cup",
            },
            {
                name: "water",
                checked: false,
                quantity: "1 cup",
            },
            {
                name: "salt",
                checked: false,
                quantity: "1/2 teaspoon",
            },
        ],
    },
    {
        name: "Chili",
        recipeItems:[
            {
                name: "ground beef",
                checked: false,
                quantity: "2 lbs",
            },
            {
                name: "onion",
                checked: false,
                quantity: "1 and 1/2 cups",
            },
            {
                name: "minced garlic",
                checked: false,
                quantity: "1/4 teaspoon",
            },
            {
                name: "mexene chili powder",
                checked: false,
                quantity: "4 tablespoons",
            },
            {
                name: "salt",
                checked: false,
                quantity: "1 teaspoon",
            },
            {
                name: "sugar",
                checked: false,
                quantity: "1 teaspoon",
            },
            {
                name: "brooks chili hot beans",
                checked: false,
                quantity: "2 cans",
            },
            {
                name: "petite diced tomatoes",
                checked: false,
                quantity: "2 cans",
            },
            {
                name: "tomato sauce",
                checked: false,
                quantity: "2 cans",
            },
            {
                name: "hormel chili no beans",
                checked: false,
                quantity: "2 cans",
            },
        ],
    },
]

// =====DYNAMICALLY DISPLAY PAGES===//

function changeRoute() {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "");

    MODEL.updateView(pageID)
}

function initURLListener(){
    $(window).on("hashchange", changeRoute);
    changeRoute();
}

// ===HAMBURGER MENU===//

function initListeners() {
    $(".bars").click(function (e) {
        $(".bars").toggleClass("active");
        $(".links").toggleClass("active");
    });

    $(".links a").click(function (e) {
        $(".bars").toggleClass("active");
        $(".links").toggleClass("active");
    });
}

// =====DISPLAY RECIPES===//

function loadRecipeItems(recipeIndex) {
    let listString = `<button class="back" onclick="loadRecipes()">Back</button><ul>`;

    $.each(RECIPES[recipeIndex].recipeItems, function (index, recipeItem) {
        listString += `<li id="${index}" class="${recipeItem.checked ?
        "strike" : ""}"><input ${recipeItem.checked ? (checked =
            "checked") : ""} type="checkbox" id="${index}" name="${recipeItem.name}" onlcick="itemChecked(this, 
                ${recipeIndex}, ${index})">
                <span>${recipeItem.name}</span>
                <span class="delete" onclick="deleteItem(${recipeIndex}, ${index})">Delete</span></li>`;
    });
    listString += `<ul>
    <div class"addItemInput">
    <input id="addItem" type="text">
    <button class="add" onclick="addItem(${recipeIndex})">Add</button>
    </div>`;
    $("#app .recipe").html(listString);
}


function loadRecipes() {
    let listString = "<ul>";

    $.each(RECIPES, function(index, recipe) {
        listString += `<li id="${index}"
        onclick="loadRecipeItems(${index})">${recipe.name}
        <span class="right">ITEMS: ${recipe.recipeItems.length}</span></li>`
    });
    listString += "</ul";
    $("#app .recipe").html(listString);
}

// function initListeners() {}

// ===DOCUMENT READY====//

$(document).ready(function () {
    initURLListener();
    initListeners();
}); 