import { useState, useEffect } from "react";



export default function MealOffer() {
    
    const [availableMeals, setAvailableMeals] = useState([]);


    useEffect(() => {
        async function fetchMeals() {
            const response = await fetch("http://localhost:3000/meals");
            const fetchedMeals = await response.json();
            setAvailableMeals(fetchedMeals);
        }
        fetchMeals();
    }, []);

    console.log(availableMeals);
    
    return (
        <ul id="meals">
            {availableMeals.map((meal) => (
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


// Import meals from backend
// List them to be rendered