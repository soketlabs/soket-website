import Image from 'next/image';
import Link from 'next/link';

import SoketLogo from '../public/images/logo.svg';

import styles from '@/styles/Header.module.scss';

export default function Header() {
    return (
        <section className={styles.header_container}>
            <Link href="/">
                <Image
                    priority
                    src={SoketLogo}
                    alt="Soket Labs Logo"
                />
            </Link>
            <nav>
                <ul>
                    <li><a href="https://google.com">company</a></li>
                    <li>research</li>
                    <li>team</li>
                    <li>contact</li>
                </ul>
            </nav>
        </section>
    )
}