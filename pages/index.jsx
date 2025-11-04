    import {
    Grid
} from '@mui/material';

import TextBox from '@/components/TextBox';
import HeroImages from '@/components/HeroImages';
import Button from '@/components/Button';
import AboutSoket from '@/components/AboutSoket';
import AIForHumanity from '@/components/AIForHumanity';
import JoinUs from '@/components/JoinUs';

import styles from '@/styles/Home.module.scss';

export default function Home() {
    return (
        <>
            <section className={styles.home_section}>
                <section className={styles.hero_section}>
                    <h1 className='lg:text-[72px] tracking-tightest mb-4 leading-tight tracking-tight font-space-grotesk font-medium'>Building AGI with a Conscience</h1>
                    <p className='px-4 lg:px-10 lg:w-1/2 mx-auto text-center mb-10 text-lg'>
                    We believe the future of intelligence must be efficient, ethical, and equitable — from code to deployment.
                    </p>
                    <div className="flex justify-center mb-12 lg:mb-20">
                        <Button href="mailto:careers@soket.ai" variant="black">
                            CONNECT WITH US
                        </Button>
                    </div>
                    <div className="my-12">
                        <HeroImages />
                    </div>
                </section>
                <AboutSoket />
                <AIForHumanity />
                <JoinUs />
            </section>
        </>
    )
}