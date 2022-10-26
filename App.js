let booltype = true;
let allapi = "f=a"
let idapi ;
let api = "https://www.thecocktaildb.com/api/json/v1/1/search.php?"
const apidrop = () => {
    if(booltype){
        return allapi
    }else{
        return idapi
    }
    }
fetch(api +  apidrop() )
  .then((res) => res.json())
  .then((res) => {
    let state = res.drinks;
    let sps = state.map(($) => `<div class="card">
    <img src=${$.strDrinkThumb} alt=${$.strDrinkThumb} style="width:100%">
    <h1>${$.strDrink}</h1>
    <p class="price">21,37</p>
    <p>Some text about the jeans..</p>
    <a  href="/single-page-id.html/${$.idDrink}"><button>Add to Cart</button></a>
  </div>`).join("");
    divcard.innerHTML = sps;
    
  })
  .catch((err) => console.error(err));
const divcard = document.getElementById("carddiv");
