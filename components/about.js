"use client"
import styles from "../styles/components/_about.module.scss";
import { useState } from "react";

export default function About() {
      const [showModal, setShowModal] = useState(false);
  return (
    <>
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <div className={styles.image}></div>
        <div className={styles.text}>
          <h2>About Harvest Expert LTD</h2>
          <p>
            At <strong>Harvest Expert LTD</strong>, cleaning isn’t just our service,
            it’s our signature. We believe a clean environment inspires peace, confidence, and productivity.  
            That’s why every member of our team is trained to deliver excellence from the smallest detail 
            to the final finishing touch.
          </p>
          <p>
            We serve homes, offices, and commercial spaces across Nigeria, providing reliable, 
            on-time, and high-quality cleaning that gives our clients peace of mind.
          </p>
         
           <button className={styles.btn} onClick={() => setShowModal(true)}>Learn More</button>
        </div>
      </div>
    </section>

       {showModal && (
        <div className={styles.modalBackdrop} onClick={() => setShowModal(false)}>
          <div className={styles.modal} onClick={e => e.stopPropagation()}>
            <h3>More About Harvest Expert LTD</h3>
            <p>
              Our mission is to redefine cleanliness across Nigeria by combining professionalism, 
              integrity, and precision. From luxury homes to corporate offices, we provide tailored 
              cleaning solutions that elevate every environment.
            </p>
            <button className={styles.btn} onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
      </>
  );
}



