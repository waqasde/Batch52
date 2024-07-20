import CategoryCard from '../components/CategoryCard';
import styles from '../styles/Home.module.css';

const HomePage = () => {
  return (
    <main className={styles.container}>
      <div className={styles.small}>
        <CategoryCard image="https://i.imgur.com/ezeey7i.jpeg"  name="Bags" />
        <CategoryCard image="https://i.imgur.com/DEdQR1f.jpegg" name="Caps" />
        <CategoryCard image="https://i.imgur.com/5Q4FWEo.jpeg" name="Aprons" />
      </div>
      <div className={styles.large}>
        <CategoryCard image="https://i.imgur.com/VJyYkUS.jpeg" name="Shoes" />
        <CategoryCard
          image="https://i.imgur.com/K5OfiDs.jpeg"
          name="Accessories"
        />
      </div>
    </main>
  );
};

export default HomePage;
