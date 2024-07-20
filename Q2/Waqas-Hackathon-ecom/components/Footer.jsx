import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      Copyright <span className={styles.brand}>Waqas E-comm batch52</span> &copy;{' '}
      {new Date().getFullYear()}
    </footer>
  );
};

export default Footer;
