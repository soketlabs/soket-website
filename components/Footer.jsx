import styles from '@/styles/Footer.module.scss';

export default function Footer() {
    return (
        <section className={styles.footer_section}>
            <small>Soket Labs Technology and Research Private Limited &#169; 2023</small>
            <small><b>Disclaimer: </b>Some content on this website is generated using AI</small>
        </section>
    )
}