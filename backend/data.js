import bcrypt from 'bcryptjs';

const data= {
   users: [
      {
        name: 'mabuX',
        email: 'admin@example.com',
        password: bcrypt.hashSync('1234', 8),
        isAdmin: true,
      },
      {
         //customer
        name: 'John',
        email: 'user@example.com',
        password: bcrypt.hashSync('1234', 8),
        isAdmin: false,
      },
    ],
    products: [
      {
          name: "Men's Boxer",
          category: "Brief",
          image:'/images/brief1.jpg',
          price: 50,
          countInStock: 10,
          brand: "Bench",
          rating: 5,
          numReviews: 10,
          description: "100% Cotton and good quality"
      },
      {
          name: "BENCH",
          category: "Bench",
          image:'/images/brief2.jpg',
          price: 50,
          countInStock: 5,
          brand: "Bench",
          rating: 3.5,
          numReviews: 10,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." 
      },
      {
          name: "shopee",
          category: "Brief",
          image:'/images/brief3.jpg',
          price: 50,
          countInStock: 12,
          brand: "Bench",
          rating: 5,
          numReviews: 10,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." 
      },
      {
          name: "Stetchable Briefs",
          category: "Brief",
          image:'/images/brief4.jpg',
          price: 50,
          countInStock: 2,
          brand: "Bench",
          rating: 5,
          numReviews: 10,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." 
      },
      {
          name: "Men’s brief 6pcs",
          category: "Brief",
          image:'/images/brief5.jpg',
          price: 50,
          countInStock: 0,
          brand: "Bench",
          rating: 4,
          numReviews: 10,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." 
      },
      {
          name: "Brief WALKER",
          category: "Brief",
          image:'/images/brief6.jpg',
          price: 50,
          countInStock: 3,
          brand: "Bench",
          rating: 4,
          numReviews: 10,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." 
      },
      {
          name: "Hipster Brief",
          category: "Brief",
          image:'/images/brief7.jpg',
          price: 50,
          countInStock: 10,
          brand: "Bench",
          rating: 4,
          numReviews: 15,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." 
      },
      {
          name: "Asstd Briefs",
          category: "Brief",
          image:'/images/brief8.jpg',
          price: 50,
          countInStock: 19,
          brand: "Bench",
          rating: 4,
          numReviews: 10,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." 
      },
  ]
}

export default data;