import styles from "../styles/components/_hero.module.scss";
import Link from "next/link";

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1>Experience the Sparkle of True Clean.</h1>
          <p>
            At <strong>Harvest Expert LTD</strong>, we don’t just clean, we transform spaces.  
            From offices to homes, we restore freshness, shine, and comfort every single time.
          </p>
          <button className={styles.cta}><Link href="https://wa.link/c80h8r">       
            Book a Cleaning Today</Link>
     </button>
        </div>
      </div>
    </section>
  );
}