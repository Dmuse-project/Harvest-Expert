import styles from "../styles/components/_cta.module.scss";
import Link from "next/link";


export default function CTA() {
  return (
    <section className={styles.cta} id="cta">
      <div className={styles.content}>
        <h2>Ready to Experience the Harvest Touch?</h2>
        <p>
          Let’s give your space the shine it deserves.  
          Book your cleaning session now and enjoy a spotless, refreshing environment — the Harvest Expert way.
        </p>
        <button className={styles.btn}>
          <Link  href="https://wa.link/c80h8r"> Book Your Cleaning Now </Link></button>
      </div>
    </section>
  );
}