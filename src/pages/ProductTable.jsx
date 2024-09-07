import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./table.css"
export default function ProductTable({ products }) {
    const navigate = useNavigate(); // Initialize the navigate function

    function showDef(title) {
        // console.log(products);
        // console.log("clicked ", title);
        
        // Navigate to the product details page with the product title
        navigate(`/product/${title}`, { state: { products } });
    }
    return (

        <div className="table">
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Popularity</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr onClick={()=> showDef(product.title)} key={index}>
                            <td>{product.title}</td>
                            <td>{product.popularity}</td>
                            <td>{product.price}</td>
                            
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    );
}
