// SingleProduct.js
import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import "./product.css"

const SingleProduct = () => {
    const { title } = useParams(); // Extract the title from the URL
    const location = useLocation(); // Get the state from the location
    const products = location.state?.products; // Safely access the products object

    // Find the product that matches the title from the URL
    const product = products
        ? Object.values(products).find((prod) => prod.title === title)
        : null;

    // console.log("Product Title: ", title);
    // console.log("Product Details: ", product);

    return (

        <div className="cards">
            <div className='card' >
                <h1>{title}</h1>
                {product ? (
                    <div className='card2' >
                        <div className="mobileData">
                            <p><strong>Subcategory: </strong>mobile</p>
                            <p><strong>Title:</strong> {product.title}</p>
                            <p><strong>Price:</strong> {product.price}</p>
                            <p><strong>Popularity:</strong> {product.popularity}</p>
                        </div>
                        <div className="discription">
                            <strong>Discription</strong>
                            <p>This is  discription of the Product - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident dolorum mollitia recusandae possimus expedita qui tenetur fuga voluptas, ullam blanditiis.</p>
                        </div>

                    </div>
                ) : (
                    <p>No product details available.</p>
                )}
                <button className='reversebtn' onClick={() => window.location.href = '/'}>Back to Home</button>

            </div>




        </div>

    );
};

export default SingleProduct;
