import styles from '@/styles/Company.module.scss';

export default function Company() {
    return (
        <section className={styles.company_container}>
            {/* <h3 className={styles.topic_heading}>COMPANY</h3> */}
            {/* <h1>Soket Labs</h1> */}
            <p><span className={styles.bold}>Soket Labs</span> is an AI research firm with a vision to <span className={styles.highlight}>further the advancement in AI towards ethical AGI.</span> We are beginning this journey by build an indigenous large language model trained on Indic languages.</p>
        </section>
    )
}
