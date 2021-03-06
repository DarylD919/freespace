import bcrypt from 'bcryptjs';

const data = {
    users:[
        {
            name: 'Daryl',
            email: 'admin@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name: 'Dan',
            email: 'user@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        },
    ],
    products:[
        {
            
            name:'Monitor',
            category:'computer',
            image:'/images/product-1.jpg',
            price: 120,
            countInStock: 10,
            brand:'HyperX',
            rating: 2.5,
            numReviews: 10,
            description: 'Made of pure grade vibranium',
        },
        {
            
            name:'Monitor Stand',
            category:'computer & tools',
            image:'/images/product-2.jpg',
            price: 50,
            countInStock: 1,
            brand:'Razor',
            rating: 4,
            numReviews: 19,
            description: 'Made of pure grade vibranium',
        },
        {
            
            name:'Monitor Clamps',
            category:'computer',
            image:'/images/product-3.jpg',
            price: 90,
            countInStock: 5,
            brand:'Logitech',
            rating: 4.5,
            numReviews: 10,
            description: 'Made of pure grade vibranium',
        },
        {
            
            name:'Monitor Grips',
            category:'computer & tools',
            image:'/images/product-4.jpg',
            price: 200,
            countInStock: 10,
            brand:'Corsair',
            rating: 3,
            numReviews: 50,
            description: 'Made of pure grade vibranium',
        },
        {
            
            name:'Monitor Tools',
            category:'computer',
            image:'/images/product-5.jpg',
            price: 500,
            countInStock: 0,
            brand:'G-Skills',
            rating: 3.5,
            numReviews: 110,
            description: 'Made of pure grade vibranium',
        },
        {
            
            name:'Monitor Brass',
            category:'computer',
            image:'/images/product-6.jpg',
            price: 450,
            countInStock: 15,
            brand:'Hydro',
            rating: 4,
            numReviews: 100000,
            description: 'Made of pure grade vibranium',
        },
    ],
};
export default data;