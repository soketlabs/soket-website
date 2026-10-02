import Link from "next/link";
import SocialMeta from "@/components/SocialMeta";
import { contactEmails, officeAddress } from "@/data/contact";
import styles from "@/styles/Contact.module.scss";

export default function Contact() {
  return (
    <>
      <SocialMeta
        title="Contact Us | Soket AI"
        description="Get in touch with Soket AI for general inquiries, partnerships, or visit our Bengaluru office."
        path="/contact"
      />
      <main className={styles.contact_page}>
        <h1>Contact us</h1>
        <p className={styles.intro}>
          Reach out for general inquiries or partnership opportunities. We&apos;d
          love to hear from you.
        </p>

        <section className={styles.section} aria-labelledby="email-heading">
          <h2 id="email-heading">Email</h2>
          <ul className={styles.email_list}>
            {contactEmails.map(({ address, label, description }) => (
              <li key={address} className={styles.email_item}>
                <p className={styles.email_label}>{label}</p>
                <Link href={`mailto:${address}`} className={styles.email_link}>
                  {address}
                </Link>
                <p className={styles.email_description}>{description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.section} aria-labelledby="office-heading">
          <h2 id="office-heading">Office</h2>
          <address className={styles.address}>
            <strong>{officeAddress.name}</strong>
            {officeAddress.lines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </address>
          <Link
            href={officeAddress.mapUrl}
            className={styles.map_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Google Maps →
          </Link>
        </section>
      </main>
    </>
  );
}
