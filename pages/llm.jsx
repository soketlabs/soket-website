import {
    Grid
} from '@mui/material';

import TextBox from '@/components/TextBox';

import styles from '@/styles/LanguageModel.module.scss';

export default function LanguageModel() {
    return (
        <section className={styles.language_model_container}>
            <h3 className={styles.topic_heading}>LLM FOR INDIC LANGUAGES</h3>
            <h1>Research Interests</h1>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6} lg={4}>
                    <TextBox
                        title="Efficient Tokenisation"
                        description="Building foundational language models for 22 scheduled Indian languages"
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <TextBox
                        title="LLMs for Resource Scare Languages"
                        description="Building foundational language models for 22 scheduled Indian languages"
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <TextBox
                        title="Faster Inference"
                        description="Building foundational language models for 22 scheduled Indian languages"
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <TextBox
                        title="Interlanguage Knowledge Transfer"
                        description="Building foundational language models for 22 scheduled Indian languages"
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <TextBox
                        title="Fact Alignment"
                        description="Building foundational language models for 22 scheduled Indian languages"
                    />
                </Grid>
            </Grid>

            <div className={styles.space}> </div>

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
            </Grid>
            
        </section>
    )
}
