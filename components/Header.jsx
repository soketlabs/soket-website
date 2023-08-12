import Image from 'next/image';
import Link from 'next/link';

import SoketLogo from '../public/images/logo.svg';
import GithubLogo from '../public/images/github-mark.svg';
import HFLogo from '../public/images/hf-logo.svg';

import styles from '@/styles/Header.module.scss';

export default function Header() {

    function renderLogo(className) {
        return (
            <Link className={className} href="/">
                <Image
                    priority
                    src={SoketLogo}
                    alt="Soket Labs Logo"
                />
            </Link>
        )
    }

    return (
        <section className={styles.header_container}>
            {renderLogo(styles.primary_logo_container)}
            <nav>
                <ul>
                    <Link href="/company">
                        <li>company</li>
                    </Link>
                    <Link href="/llm">
                        <li>llm</li>
                    </Link>
                    <Link href="/ethics">
                        <li>ethics</li>
                    </Link>
                    <Link href="/research">
                        <li>research</li>
                    </Link>
                    <Link href="/team">
                        <li>team</li>
                    </Link>
                    <Link href="/contact">
                        <li>contact</li>
                    </Link>
                </ul>
                <div className={styles.social_container}>
                    <Link href="https://github.com/soketlabs" target="_blank">
                        <Image
                            priority
                            src={GithubLogo}
                            alt="Github Logo"
                        />
                    </Link>
                    <Link href="https://huggingface.co/soketlabs" target="_blank">
                        <Image
                            priority
                            src={HFLogo}
                            alt="HuggingFace Logo"
                        />
                    </Link>
                </div>
            </nav>
            {renderLogo(styles.secondary_logo_container)}
        </section>
    )
}