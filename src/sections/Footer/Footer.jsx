import styles from '../Footer/FootStyles.module.css';

function Footer() {
  return (
  <section id='footer' className={styles.container}>
    <p>
        &copy; 2024 Dadrion Tuircuit. <br />
        All rights reserved
        </p>
  </section>
  );
}

export default Footer;