import Head from "next/head";

import Footer from '@/components/Footer';
import Header from '@/components/Header';

import styles from '@/styles/Layout.module.scss';

export default function Layout({children}) {
    return (
        <section className={styles.layout_section}>
            <Head>
                <title>Advancing AI research towards ethical Artificial General Intelligence</title>
                <meta name='description' content='Soket Labs is an AI research firm with a vision to further the advancement in AI towards ethical AGI. We are beginning this journey by build an indigenous large language model trained on Indic languages.'/>
            </Head>
            <Header/>
            {children}
            <Footer/>
        </section>
    )
}