const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const searchInput = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const imgEl = document.querySelector(".food-img img");
async function getRecipe() {
  const foodName = searchInput.value;
  const response = await fetch(url + foodName);
  const data = await response.json();
  imgEl.src = `${data.meals[0].strMealThumb}/preview`;
  console.log(data);
}

searchBtn.addEventListener("click", () => {
  getRecipe();
});
