import { useState, useEffect, useContext } from "react";
import Error from "./Error.jsx";
import { fetchAvailableMeals } from "../data/http.js";
import { CartContext } from "../store/shopping-cart-context.jsx";


export default function MealOffer() {
    
    const [availableMeals, setAvailableMeals] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState(false);

    let { addItemToCart } = useContext(CartContext);

    useEffect(() => {
        async function fetchMeals() {
            setIsFetching(true);
            try {
                const fetchedMeals = await fetchAvailableMeals();
                setAvailableMeals(fetchedMeals);
            } catch (error) {
                setError({
                    message: error.message || "Unable to load available meals. Please try again later..."
                });
                setIsFetching(false);
            }

            setIsFetching(false);
        }
        fetchMeals();
    }, []);

    function handleErrorModal() {
        setError(false);
    }

    if (error) {
        return <Error 
            title={"An unexpected error occurred!"} 
            message={error.message}
            onConfirm={handleErrorModal}
        />
    }
    
    return (
        <ul id="meals">
            {isFetching && <h3 className="loading-message">Loading available meals...</h3>}
            {!isFetching && availableMeals.map((meal) => (
                <li key={meal.id} className="meal-item">
                    <div className="article">
                        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
                        <h3>{meal.name}</h3>
                        <p className="meal-item-price">{meal.price}</p>
                        <p className="meal-item-description meal-item-actions">{meal.description}</p>
                    </div>
                    <button 
                        onClick={() => addItemToCart({
                            id: meal.id,
                            name: meal.name,
                            price: Number(meal.price)
                        })}  
                        className="meal-item-actions button"
                    >Add to Cart</button>
                </li>
            ))}
        </ul>
    );
}