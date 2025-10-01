import styles from "../styles/components/_testimonials.module.scss";

export default function Testimonials() {
  const feedbacks = [
    {
      name: "Mrs. Adesuwa O.",
      text: "Harvest Expert transformed my home! Their attention to detail is unmatched. My house feels brand new.",
    },
    {
      name: "David O.",
      text: "Professional, punctual, and polite. Their team made our office sparkle like never before. 10/10 service!",
    },
    {
      name: "Queeneth I.",
      text: "They don’t just clean they truly care. I’ve never been this satisfied with a cleaning company before.",
    },
  ];

  return (
    <section className={styles.testimonials} id="testimonials">
      <h2>What Our Clients Say</h2>
      <div className={styles.grid}>
        {feedbacks.map((item, i) => (
          <div key={i} className={styles.card}>
            <p className={styles.quote}>"{item.text}"</p>
            <h4>- {item.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}