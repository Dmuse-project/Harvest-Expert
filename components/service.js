import styles from "../styles/components/_services.module.scss";

export default function Services() {
  const services = [
    { title: "Residential Cleaning", desc: "A spotless home that smells like peace and freshness." },
    { title: "Office & Commercial Cleaning", desc: "Professional spaces that reflect excellence and order." },
    { title: "Post-Construction Cleaning", desc: "We handle the mess so you can enjoy your new space instantly." },
    { title: "Deep Cleaning & Disinfection", desc: "From corners to ceilings — we don’t miss a spot." },
  ];

  return (
    <section className={styles.services} id="services">
      <h2>Our Professional Cleaning Services</h2>
      <div className={styles.grid}>
        {services.map((s, i) => (
          <div key={i} className={styles.card}>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}