import Link from 'next/link';

import styles from '@/styles/Contact.module.scss';

export default function Contact() {
    return (
        <section className={styles.contact_container}>
            <h2>Contact</h2>
            <Link href="mailto:hi@soket.ai">
                <h3>hi@soket.ai</h3>
            </Link>
        </section>
    )
}
