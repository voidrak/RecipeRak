const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const shownRecipe = document.querySelector(".viewed-recipe");
const searchInput = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const imgEl = document.querySelector(".food-img img");
const foodNameEl = document.querySelector(".food-name h1");
const foodArea = document.querySelector(".food-name h2");
const foodIngredients = document.querySelector(".food-ingredients ul");
const viewRecipe = document.querySelector(".view-recipe button");
const hiddenRecipe = document.querySelector(".hidden-recipe  ");
async function getRecipe() {
  // FETCH DATA FROM USER INPUT
  const foodName = searchInput.value;
  const response = await fetch(url + foodName);
  const data = await response.json();
  let Meals = data.meals[0];

  // UPDATE THE DOM BASED ON THE DATA
  imgEl.src = `${Meals.strMealThumb}/preview`;
  foodNameEl.textContent = searchInput.value;
  foodArea.textContent = Meals.strArea;
  /// UPDATE THE UL IN HTML USING LOOP
  let count = 1;
  let ingredients = [];
  for (let i in Meals) {
    let ingredient = "";
    let measure = "";
    if (i.startsWith("strIngredient") && Meals[i]) {
      ingredient = Meals[i];
      measure = Meals[`strMeasure` + count];
      count++;
      ingredients.push(`${measure} ${ingredient}`);
    }
  }
  let ingredientsEL = [];
  for (let i = 0; i < ingredients.length; i++) {
    ingredientsEL.push(`<li>${ingredients[i]}</i>`);
  }
  // UPDATE THE OTHER HTML PARTS
  foodIngredients.innerHTML = ingredientsEL;
  hiddenRecipe.textContent = Meals.strInstructions;
  console.log(Meals);
  console.log(Meals.strInstructions);
}
viewRecipe.addEventListener("click", () => {
  shownRecipe.style.display = "none";
  hiddenRecipe.style.display = "block";
});

searchBtn.addEventListener("click", () => {
  getRecipe();
});
