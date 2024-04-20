import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import Link from 'next/link';
 
import { products } from "@/constant";
function Products()  {
   
    
    return (
       
        <div>
            <h1>Products Page</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <Link href={`/products/${product.id}`}>
                             {product.name} 
                        </Link>
                    </li>
                ))}
            </ul>
           
        </div>
         
    );
};

export default Products;
