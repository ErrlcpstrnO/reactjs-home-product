import react from 'react';
import { Link } from 'react-router-dom';
import Rating from './rating.js';

export default function Product(props){
    const {product} = props
    return(
        <div key= {product._id} className="card">
        <Link to={`/product/${product._id}`}>
         <img  className="medium" src={product.image} alt={product.name}/>
         </Link>
        <div className="card-body">
            <a href={`/product/${product._id}`}>
                <h2 className="title">{product.name}</h2>
            </a>
            <Rating
            rating= {product.rating}
            numReviews= {product.numReviews}>
            </Rating>
            <div className="price">Php {product.price}</div>
        </div>
    </div>
    )
}

