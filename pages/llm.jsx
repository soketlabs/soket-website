import {
    Grid
} from '@mui/material';

import TextBox from '@/components/TextBox';

import styles from '@/styles/LanguageModel.module.scss';

export default function LanguageModel() {
    return (
        <section className={styles.language_model_container}>
            
            <h3 className={styles.topic_heading}>LLM FOR INDIC LANGUAGES</h3>
            
            <h1 className={styles.page_section_title}>Open Source Products <small className={styles.tag}>(to be released)</small></h1>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <TextBox
                        title="Mutilingual Tokenizer"
                        description="An efficient tokenizer for multi-lingual encoding"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <TextBox
                        title="BHASA-HI-7B-8K-Base"
                        description="A 7B transformer model with a context length of 8K pre-trained on Hindi"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <TextBox
                        title="BHASA-7B-8K-Base"
                        description="A 7B transformer model with a context length of 8K pre-trained on 22 scheduled languages of India"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <TextBox
                        title="BHASA-7B-8K-Instruct"
                        description="A 7B transformer model instruction tuned to align with human intents"
                    />
                </Grid>
            </Grid>

            <div className={styles.space}> </div>
            
            <h1 className={styles.page_section_title}>Research Interests</h1>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6} lg={4}>
                    <TextBox
                        title="Efficient and Representative Tokenisation"
                        description="This is a fundamental building block for enabling language models to work effectively with low-resource languages. It underpins various linguistic, computational, and societal aspects, contributing to accurate language understanding, efficient processing, and improved cross-cultural communication."
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <TextBox
                        title="LLMs for Low Resource Languages"
                        description="Building large language models for low-resource languages is not just about advancing technology; it's about promoting cultural diversity, inclusivity, and access to information for all communities, regardless of the size of their language group."
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <TextBox
                        title="Cross Lingual Knowledge Transfer"
                        description="Cross-Lingual Knowledge Transfer involves transferring insights, information, or expertise gained in one language to another, facilitating learning across language barriers. It is important as it enables efficient utilization of existing knowledge in multiple languages, enhancing accessibility, collaboration, and innovation in diverse linguistic contexts."
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <TextBox
                        title="Faster and Efficient Inference"
                        description="Efficient and fast inference in large language models refers to the ability to quickly generate accurate responses or predictions from the model while minimizing computational resources. It's crucial because it enables real-time applications like chatbots, search engines, and voice assistants to provide timely and seamless interactions, enhancing user experience and enabling widespread adoption."
                    />
                </Grid>
                
                <Grid item xs={12} md={6} lg={4}>
                    <TextBox
                        title="Fact Alignment"
                        description="Fact Alignment in large language models refers to the process of ensuring that generated text corresponds accurately to factual information. It's vital to maintain credibility and prevent misinformation, enhancing the model's reliability for tasks like answering questions, generating summaries, and aiding decision-making."
                    />
                </Grid>
            </Grid>
            
        </section>
    )
}
