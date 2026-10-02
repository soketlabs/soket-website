import {
    Grid
} from '@mui/material';

import TextBox from '@/components/TextBox';

import styles from '@/styles/LanguageModel.module.scss';

export default function Research() {
    return (
        <section className={styles.language_model_container}>
            <h3 className={styles.topic_heading}>FUTURE WORK</h3>
            <h1 className={styles.page_section_title}>Research Interests</h1>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6} lg={4}>
                    <TextBox
                        title="AI for Defence"
                        description="Advanced AI with human-level cognitive abilities applied in warfare for strategic decision-making, autonomous systems, and threat assessment"
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <TextBox
                        title="AI for Drug Discovery"
                        description="Harnessing AI with human-like intelligence to revolutionize pharmaceutical research, accelerating drug development, target identification, and molecular design"
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <TextBox
                        title="Scaling ML Optimisation with Quantum Computing"
                        description="Leveraging quantum algorithms to accelerate machine learning model training and hyperparameter optimization, unlocking faster and more efficient results"
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <TextBox
                        title="AI for Law Enforcement"
                        description="Utilizing highly capable AI to enhance crime analysis, predictive policing, and investigative processes, improving public safety and resource allocation"
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <TextBox
                        title="AI for Education"
                        description="Applying advanced AI with human-like learning capabilities to personalize teaching, offer real-time feedback, and create immersive educational experiences, fostering effective and adaptive learning environments"
                    />
                </Grid>
            </Grid>

            {/* <div className={styles.space}> </div>

            <h1>Open Source Products <small>(to be released)</small></h1>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6} lg={4}>
                    <TextBox
                        title="Mutilingual Tokenizer"
                        description="Building foundational language models for 22 scheduled Indian languages"
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <TextBox
                        title="IPT-7B-Base"
                        description="Building foundational language models for 22 scheduled Indian languages"
                    />
                </Grid>
            </Grid> */}
            
        </section>
    )
}
