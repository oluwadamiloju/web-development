var foodValue = {
    apple: { 
        price: 150,
        category: 'Fruits', 
        nutrients: {
            fat: 0.2, 
            carbs: 13.8, 
            protein: 0.3, 
            calories: 52, 
            vitamin: 4
        }
    },
    orange: {
        price: 100,
        category: 'Fruits', 
        nutrients: {
            fat: 0, 
            carbs: 15.4, 
            protein: 1, 
            calories: 60, 
            vitamin: 84
        }
    },
    burger: {
        price: 1500,
        category: 'Fast food', 
        nutrients: {
            fat: 10.1, 
            carbs: 30.3, 
            protein: 13.3, 
            calories: 266, 
            vitamin: 0
        }
    },
    coffee: {
        price: 600,
        category: 'Beverage', 
        nutrients: {
            fat: 8.5, 
            carbs: 63, 
            protein: 19, 
            calories: 403, 
            vitamin: 0
        }
    }
}

console.log(foodValue.apple.price, foodValue.orange.nutrients.calories, foodValue.burger.category);
