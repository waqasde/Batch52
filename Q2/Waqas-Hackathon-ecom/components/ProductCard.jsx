import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cart.slice';
import styles from '../styles/ProductCard.module.css';
import { useRouter } from 'next/router';
const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleAddToCart = async () => {
    try {
      await dispatch(addToCart(product)); // Add the product to the cart
      router.push('/cart'); // Redirect to the cart page after successful addition
    } catch (error) {
      console.error('Error adding to cart:', error);
      // Handle errors gracefully, e.g., display an error message to the user
    }
  };
  return (
    <div className={styles.card}>
      <Image src={product.image} height={300} width={220} />
      <h4 className={styles.title}>{product.product}</h4>
      <h5 className={styles.category}>{product.category}</h5>
      <p>$ {product.price}</p>
      <button
        onClick={ handleAddToCart }
        className={styles.button}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
