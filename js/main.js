const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const searchInput = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const imgEl = document.querySelector(".food-img img");
const foodNameEl = document.querySelector(".food-name h1");
const foodArea = document.querySelector(".food-name h2");
const foodIngredients = document.querySelector(".food-ingredients ul");
async function getRecipe() {
  const foodName = searchInput.value;
  const response = await fetch(url + foodName);
  const data = await response.json();
  imgEl.src = `${data.meals[0].strMealThumb}/preview`;
  foodNameEl.textContent = searchInput.value;
  foodArea.textContent = data.meals[0].strArea;
  // let i = 0;
  // while (`data.meals[0].strIngredient${i}` != "") {
  //   let ingredients = `data.meals[0].strIngredient${i}`;
  //   i++;
  // }
  // console.log(ingredients);

  console.log(data);
}

searchBtn.addEventListener("click", () => {
  getRecipe();
});
