import React from 'react';

import Link from 'next/link';
 
import { products } from "@/constant";
function Products()  {
   
    
    return (
       
        <div>
            <h1>Products Page</h1>
            <ul>
                {products.map(product => (
                    <li key={product.Id}>
                        <Link href={`/products/${product.Id}`}>
                             {product.name} 
                        </Link>
                    </li>
                ))}
            </ul>
           
        </div>
         
    );
};

export default Products;
