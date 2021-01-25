import data from '../data.js';
import Product from '../components/product.js';
import { useState } from 'react';


export default function HomeScreen(){
  const [products, setProducts] = useState([]);
    return(
        <div>
            <div className="row center">
          {
            data.products.map(product =>(
              <Product key={product._id} product={product}> </Product>
            ))
          }

            </div>
        </div>
    )
}