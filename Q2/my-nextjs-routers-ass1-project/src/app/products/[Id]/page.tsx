'use client'
import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import { products } from "@/constant";
import { useRouter } from 'next/navigation'
type DetailType = {
  params: { Id: string };
  searchParams: any;
};
const findproductById = (id: string) => {
  const product = products.find((item) => item.Id == id);
  return product;
};
export default function Page ({ params, searchParams }: DetailType) {
 
  console.log("🚀 ~ Page ~ params:", params);


  const router = useRouter()
  const product = findproductById(params.Id);
  return (
   
    
    <main>
         <h1>Product Details Page for </h1>
      
      <h1 className="font-bold">ID :{product?.Id}  </h1>
      <h1 className="font-bold">Name :{product?.name} </h1>
      <button type="button" onClick={() => router.push('/')}>
        Back to home
      </button>
  </main>
      );
}


