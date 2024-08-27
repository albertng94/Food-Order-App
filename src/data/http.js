export async function fetchAvailableMeals() {
    const response = await fetch("http://localhost:3000/meals");
    const fetchedMeals = await response.json();

    if (!response.ok) {
        throw new Error("Failed to fetch meals.");
    }

    return fetchedMeals;
}

export async function storeUserCommand(cartItems, userOrder) {
    const response = await fetch("http://localhost:3000/orders", {
        method: "POST",
        body: JSON.stringify({
            order: {
                items: cartItems,
                customer: userOrder
            }
        }),
        headers: {
            "Content-Type": "application/json"
        }
    });
    const resData = await response.json();
    if (!response.ok) {
        throw new Error("Failed to process command.");
    }
    return resData.message;
}