import {
    Grid
} from '@mui/material';

import TextBox from '@/components/TextBox';

import styles from '@/styles/Home.module.scss';

export default function Home() {
    return (
        <>
            
            <section className={styles.home_section}>
                <section className={styles.hero_section}>
                    <h1>Advancing AI research towards <span className={styles.underline}>ethical</span> <span className={styles.bold}>Artificial General Intelligence</span></h1>
                    <div className={styles.summary_container}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <TextBox 
                                    title="LLMs for Indic languages"
                                    description="Building foundational language models for 22 scheduled Indian languages"
                                    link={'/llm'}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextBox 
                                    title="Research on ethical AI"
                                    description="AGI ethics involves alignment, safety, transparency, fairness, collaboration, and global cooperation"
                                    link={"/ethics"}
                                />
                            </Grid>
                        </Grid>
                    </div>
                </section>
            </section>
            
        </>
    )
}