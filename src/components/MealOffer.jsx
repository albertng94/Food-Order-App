import { useState, useEffect } from "react";
import Error from "./Error.jsx";



export default function MealOffer() {
    
    const [availableMeals, setAvailableMeals] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState(false);


    useEffect(() => {
        async function fetchMeals() {
            setIsFetching(true);
            try {
                const response = await fetch("http://localhost:3000/meals");
                const fetchedMeals = await response.json();

                if (!response.ok) {
                    throw new Error("Failed to fetch meals.");
                }

                setAvailableMeals(fetchedMeals);
            } catch (error) {
                setError({
                    message: error.message || "Unable to load available meals, please try again later..."
                });
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
            title={"An error occurred!"} 
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
                    <button className="meal-item-actions button">Add to Cart</button>
                </li>
            ))}
        </ul>
    );
}


// Error handling
// Optimize code