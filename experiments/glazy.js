const root = document.getElementById('root')

const glazy = axios.create({
  baseURL: 'https://api.glazy.org/api',
  timeout: 1000,
});

function onSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  fetchRecipe(formData.get("recipeID"))
  return false;
}
  
function fetchRecipe(id) {
  console.log(id)
  glazy.get(`/recipes/${id}`)
    .then((res) => {
      root.innerText = JSON.stringify(res.data)
    })
}

document.getElementById('form').addEventListener('submit', onSubmit)
