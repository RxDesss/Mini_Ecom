exports.getProducts = (req, res, next) => {
    res.json({
        name: 'getpoduct',
        statuscode: 200,
        data: [
            {
                id: 1,
                title: "Essence Mascara Lash Princess",
                category: "beauty",
                price: 9.99,
                discountPercentage: 7.17,
                rating: 4.94,
            },
            {
                id: 2,
                title: "Eyeshadow Palette with Mirror",
                category: "beauty",
                price: 10.99,
                discountPercentage: 3.17,
                rating: 4.94,
            },
            {
                id: 3,
                title: "Powder Canister",
                category: "beauty",
                price: 19.99,
                discountPercentage: 17.17,
                rating: 14.94,
            },
            {
                id: 4,
                title: "Red Lipstick",
                category: "beautEssence Mascara Lash Princessy",
                price: 92.99,
                discountPercentage: 72.17,
                rating: 42.94,
            },
            {
                id: 5,
                title: "Red Nail Polish",
                category: "beauty",
                price: 94.99,
                discountPercentage: 74.17,
                rating: 44.94,
            },
        ]

    })
}


exports.getSingleProduct = (req, res, next) => {
    res.json({
        name: 'getSingleProduct',
        statuscode: 200,
        data: [
            {
                    "id": 1,
                    "title": "Essence Mascara Lash Princess",
                    "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
                    "category": "beauty",
                    "price": 9.99,
                    "discountPercentage": 7.17,
                    "rating": 4.94,
                    "stock": 5
               
            }
        ]
    })
}