import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';
import styles from '@/styles/Header.module.scss';

export default function Header() {
    return (
        <header className={styles.header_container}>
            <div className={styles.header_inner}>
                <div className={styles.primary_logo_container}>
                    <Link href="/">
                        <Image
                            priority
                            style={{
                                height: '70px',
                                width: '150px'
                            }}
                            src="/images/Soket-Logo.svg"
                            alt="Soket Labs Logo"
                            width={150}
                            height={70}
                        />
                    </Link>
                </div>
                
                <nav>
                    <ul>
                        {/* <Link href="/company">
                            <li>company</li>
                        </Link> */}
                        <Link href="/blogs/bhasha_wiki">
                            <li>blog</li>
                        </Link>
                        {/* <Link href="/llm">
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
                        </Link> */}
                    </ul>
                    {/* <div className={styles.social_container}>
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
                    </div> */}

                    {/* Get In Touch Button */}
                    <Button href="mailto:careers@soket.ai" variant="black">
                        GET IN TOUCH
                    </Button>
                </nav>
            </div>
            
        </header>
    )
}