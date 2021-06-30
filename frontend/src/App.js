import React from 'react';
// data.js is a js array that makes the products dynamic
import data from './data';
function App() {
  return (
    <div className="grid-container">
       <header className="row">
            <div>
                <a  className="brand" href="/">bridals</a>
            </div>
            <div>
                <a href="/cart">Cart</a>
                <a href="/signin">Sign In</a>
            </div>
       </header>

       <main>
            <div className="row center">
              {/* {} initiates js codes inside react code and JSX codes */}
              {
                // Use map() to convert each product to dynamic products designed in data.product. object and move them inside map()
                data.products.map(product => (
                  <div key={product._id} className="card">
                    <a href={`/product/${product._id}`}> {/* Sets the url of this img to it's specific id */}                      
                        <img 
                        className="medium" 
                        src= {product.image} 
                        alt= {product.name} 
                        />
                    </a>
                    <div className="card-body">
                        <a href={`/product/${product._id}`}> {/* Set the url of this img to it's specific id and also the name */}
                            <h2>{product.name}</h2>
                        </a>
                        <div className="rating">
                            <span><i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                        </div>
                        <div className="price">&#8358;{product.price} </div> {/* &#8358; code for naira */}
                    </div>
                  </div>
                ))
              }                
                
            </div>
       </main>

       <footer className="row center">
        All rights reserved
       </footer>
   </div> 
  );
}

export default App;
