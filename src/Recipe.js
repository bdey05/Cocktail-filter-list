import { useState } from "react";
import Cocktails from "./Cocktails";

const Recipe = () => {

    const [cocktail, setCocktail] = useState('');

    const data = Cocktails('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita');


    const handleSearch = (e) =>{
        setCocktail(e.target.value);
        
    }
    

    return ( 
        <div className="recipe">
            <h1 className="title">Cocktail Recipes</h1>
            <div className="filter">
                <input type="text" placeholder="Enter Cocktail name" onChange = { (e) => {handleSearch(e)} }/>
            </div>
            { data && <div className="cocktailGrid">
                {
                    data.drinks.filter(name => {
                        return name.strDrink.toLowerCase().startsWith(cocktail.toLowerCase())
                    })
                    .map((drink) => (
                        <div className="drink-grid">
                            <div className="drink-name">{ drink.strDrink }</div>
                            <div className="drink-img"><img src ={ drink.strDrinkThumb } /></div>
                        </div>
                        
                    ))
                }
            </div>}
           
        </div>
     );
}
 
export default Recipe;