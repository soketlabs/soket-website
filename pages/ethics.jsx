import {
    Grid
} from '@mui/material';

import TextBox from '@/components/TextBox';

import styles from '@/styles/LanguageModel.module.scss';

export default function Ethics() {
    return (
        <section className={styles.language_model_container}>
            <h3 className={styles.topic_heading}>ETHICS OF AI</h3>
            <h1>Research Interests</h1>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6} lg={4}>
                    <TextBox
                        title="Value Alignment"
                        description="Ensure that AGI systems are aligned with human values and goals. This involves developing mechanisms that allow AGI to understand and prioritize human values while avoiding unintended negative consequences."
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <TextBox
                        title="Safety Measures"
                        description="Prioritize safety in AGI development to prevent undesirable outcomes. This includes researching techniques for designing AGI systems that are robust, verifiably safe, and able to recover from failures."
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <TextBox
                        title="Transparency and Explainability"
                        description="AGI systems that can explain their decisions and actions in understandable terms. This promotes accountability and helps build trust between humans and AGI systems."
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <TextBox
                        title="Ethical Frameworks"
                        description="Establish ethical frameworks for AGI that guide its behavior in accordance with universally accepted principles such as fairness, autonomy, privacy, and non-maleficence."
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <TextBox
                        title="Collaboration and Regulation"
                        description="Foster collaboration among AI researchers, policymakers, ethicists, and other stakeholders to collectively shape the development and deployment of AGI. Sensible regulations and guidelines can play a critical role in ensuring AGI's ethical development."
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <TextBox
                        title="Benefit Sharing"
                        description="Address the potential economic and societal impacts of AGI by considering mechanisms for equitable distribution of benefits and resources. This could involve strategies such as wealth redistribution or investment in social programs."
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <TextBox
                        title="Long-Term Safety"
                        description="Focus on the long-term safety of AGI by researching methods to ensure that AGI systems continue to behave ethically and align with human values even as they become more advanced and capable."
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <TextBox
                        title="Human-AI Collaboration"
                        description="Explore ways in which AGI can collaborate with humans to amplify human capabilities rather than replace them. This could involve creating systems that work alongside humans, enhancing creativity, problem-solving, and decision-making."
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <TextBox
                        title="Continuous Ethical Review"
                        description="Establish mechanisms for ongoing ethical review of AGI systems, including regular evaluations and updates to ensure that they remain aligned with evolving societal values and norms."
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <TextBox
                        title="Value Sensitive Design"
                        description="Incorporate value-sensitive design principles throughout the AGI development process to anticipate and address potential ethical challenges."
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <TextBox
                        title="Global Cooperation"
                        description="Foster international cooperation and coordination in AGI research and development to ensure that ethical considerations are taken into account on a global scale."
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
