import Footer from '@/components/Footer';
import Header from '@/components/Header';

import styles from '@/styles/Layout.module.scss';

export default function Layout({children}) {
    return (
        <section className={styles.layout_section}>
            <Header/>
            {children}
            <Footer/>
        </section>
    )
}