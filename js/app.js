function showMeal(data) {
    
        const mailDiv = document.getElementById("mealList");
    mailDiv.innerHTML = "";
    const mealItem = data.meals;
    mealItem.forEach(element => {
        const addItem = document.createElement('div');
        const itemName = `
        <div onclick="showIngredients('${element.idMeal}')">
        <div class="card api-card p-2 m-2">
        <img  src="${element.strMealThumb}" class="card-img-top"  alt="${element.strMeal}">
        <div class="api-card-body card-body">
        <p id="mealCLue" class="card-text"> ${element.strMeal} </p>
        </div>
        </div>
        </div>
        `;
        addItem.className = "col-md-3 d-flex justify-content-around ";
        addItem.id = "dish"
        addItem.innerHTML = itemName;
        mailDiv.appendChild(addItem);
    });
    }
    


    const showIngredients = name => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${name}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                detailsFoodInfo(data.meals);
            });
    };

    const detailsFoodInfo = element => {
        const mealArea = document.getElementById("mealList");
        const mailDiv  = document.getElementById("ingredientList");
        mailDiv.innerHTML=" ";
        mealArea.style.display = "none";
        mailDiv.style.display = "flex";
        let ingredientItem = document.createElement('div');
        
            
             ingredientFinalList = `
            <div id="ingridInfo" class="card  p-2 m-2">
            <h1> This Ingredients for <span class="IngredientColor"> ${element[0].strMeal} </span> </h1>
            <ul>
            <li>${element[0].strIngredient1}</li>
            <li>${element[0].strIngredient2}</li>
            <li>${element[0].strIngredient3}</li>
            <li>${element[0].strIngredient4}</li>
            <li>${element[0].strIngredient5}</li>
            <li>${element[0].strIngredient6}</li>
            <li>${element[0].strIngredient7}</li>
            <li>${element[0].strIngredient8}</li>
            <li>${element[0].strIngredient9}</li>
            <li>${element[0].strIngredient10}</li>
            <li>${element[0].strIngredient11}</li>
            </ul>
            <div class = "Tutorial-button">
            <button id="youtube" onclick ="youtube('${element[0].strYoutube}')"
            class ="Two-Button"> Tutorial for Foods </button>
            <button onclick = "mainAreaSHow()" class ="Two-Button"> Back </button>
            </div>
    
           
            </div>
            `;
            
        element.forEach(element => {
            let addItem = document.createElement('div');
            
            
            ingredientName = `
            <div  id="ingridPicture" class="card api-card p-2 m-2">
            <img src="${element.strMealThumb}" class="card-img-top" alt="...">
            <div class="api-card-body card-body">
            <p id="mealCLue" class="card-text"> ${element.strMeal} </p>
            </div>
            </div>
            `;
            addItem.className = "col-md-3 d-flex justify-content-around ";
            ingredientItem.className = "col-md-6  ";
            ingredientItem.innerHTML = ingredientFinalList;
            addItem.innerHTML = ingredientName;
            mailDiv.appendChild(addItem)
            mailDiv.appendChild(ingredientItem);
        });
    };
    
   




function mainAreaSHow(){
    const mealArea = document.getElementById("mealList");
    mealArea.style.display = "flex";
    const ingredientInfoArea = document.getElementById("ingredientList"); 
    ingredientInfoArea.style.display = "none";
    
    
}




function loadData(data) {
    fetch(data)
        .then(res => res.json())
        .then(data => showMeal(data));
}

const dataUrlFetch = document.getElementById("search").addEventListener('click', function () {
    const searchFood = document.getElementById("searchMeal");
    const value = searchFood.value;
    if(value == ""){
        console.log("clicked");
        const FoodBody =  document.getElementById("mealList");
        const error = document.createElement('div');
        error.innerHTML=`
        <h1 class=" card margin p-5 m-5">  Please give some data </h1>
        `;
        FoodBody.appendChild(error);
    }
    else{
        const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + value;
    
        loadData(url);
    
        return url;
    }
  

})

function youtube(url){
    let win = window.open(url, '_blank');
        win.focus();
}
