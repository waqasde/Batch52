import React from 'react';
import { useRouter } from 'next/router';

const OrderConfirmation = ({ orderDetails }) => {
    const router = useRouter();
    const query = router.query;
  
    // Handle "Go Back to Shopping" button click
    const handleGoBack = () => {
        router.push('/'); // Replace with your desired homepage route
    };
    try {
        orderDetails = JSON.parse(decodeURIComponent(query.orderDetails)); // Decode URL-encoded string
    } catch (error) {
        console.error('Error parsing order details:', error);
        // Handle parsing errors gracefully, e.g., display an error message
    }

    return (
        <div className="order-confirmation-container">
            <h1>Order Confirmation</h1>
            <p>Thank you for your order!</p>
            {orderDetails && (
                <div className="order-details">
                    <h2>Order Details</h2>
                    <ul>
                        <li>Order name: {orderDetails.name}</li>
                        <li>Email: {orderDetails.email}</li>
                        <li>Shipping Address: {orderDetails.shippingAddress}</li>
                        
                    </ul>
                </div>
            )}
            <button onClick={handleGoBack}>Go Back to Shopping</button>
        </div>
    );
};

export default OrderConfirmation;
