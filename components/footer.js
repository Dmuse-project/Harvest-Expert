

// export default function Footer() {
//   return (
//     <footer className={styles.footer}>
//       <div className={styles.grid}>
//         <div>
//           <h3>Harvest Expert LTD</h3>
//           <p>Professional cleaning that inspires freshness, order, and peace of mind.</p>
//         </div>
//         <div>
//           <h4>Contact</h4>
//           <p>📍 Lagos, Nigeria</p>
//           <p>📞 +234 800 123 4567</p>
//           <p>📧 info@harvestexpert.com</p>
//         </div>
//         <div>
//           <h4>Quick Links</h4>
//           <ul>
//             <li>Home</li>
//             <li>About</li>
//             <li>Services</li>
//             <li>Book Now</li>
//           </ul>
//         </div>
//       </div>
//       <div className={styles.copy}>
//         <p>© {new Date().getFullYear()} Harvest Expert LTD. All Rights Reserved.</p>
//       </div>
//     </footer>
//   );
// }

"use client";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
// import styles from "./Footer.module.scss";
import styles from "../styles/components/_footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Company Info */}
        <div className={styles.brand}>
          <h3>Harvest Expert LTD</h3>
          <p>Professional Cleaning Services in Nigeria</p>
          <p>Onitsha, Nigeria</p>
          <p>Phone: +234 813 844 9586 </p>
          <p>Email: harvestexpert21@gmail.com</p>
        </div>

        {/* Social Media */}
        <div className={styles.social}>
          <h4>Follow Us</h4>
          <ul>
            <li>
              <a
                href="https://www.facebook.com/groups/314755230536799/?ref=share&mibextid=NSMWBT"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/harvest.experts_cleaning?igsh=MTdwY2FiNGltcWk5ZA=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                href="http://tiktok.com/@hecleaningservices"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
              >
                <FaTiktok />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} Harvest Expert LTD. All rights reserved.</p>
      </div>
    </footer>
  );
}