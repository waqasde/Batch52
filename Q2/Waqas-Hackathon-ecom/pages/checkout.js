import React, { useState } from 'react';
import styles from '../styles/Home.module.css';
import { useSelector, useDispatch } from 'react-redux';
const Checkout = () => {
   

    // Form state with initial values
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        city: '',
        state: '',
        zip: '',
    });

    // Handle form input changes
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };
    function redirectToOtherPage(url) {
        window.location.href = url;
    }
    // Submit form handler (replace with your payment processing logic)
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            
            const orderDetails = {
                name: formData.name,
                email: formData.email,
                shippingAddress: formData.address
            };
            
           
            // Simulate payment processing (replace with actual integration)
            console.log('Processing payment...');
            await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulated delay

            console.log('Payment processed successfully!');
            
            // Clear cart items (replace with actual cart update logic)
            // Redirect user to confirmation or order history page
            redirectToOtherPage('/orderconfirmation'); // Replace with appropriate path
        } catch (error) {
            console.error('Error processing payment:', error);
            // Handle errors gracefully, e.g., display an error message
        }
    };

    return (
        <div className={styles.container}>
            <h1>Checkout</h1>
            <form onSubmit={handleSubmit}>
                <div className={`${styles.small} ${styles.mediumpadding}`}>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={`${styles.small} ${styles.mediumpadding}`}>
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={`${styles.small} ${styles.mediumpadding}`}>
                    <label htmlFor="address">Address:</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />
                </div>
                {/* ... other form fields */}
                <button type="submit">Place Order</button>
            </form>
        </div>
    );
};

export default Checkout;