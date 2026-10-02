import {
    Grid
} from '@mui/material';

import TeamBox from '@/components/TeamBox';

import AbhishekProfile from '../public/images/profile/abhishek.jpg';

import styles from '@/styles/LanguageModel.module.scss';

export default function Team() {
    return (
        <section className={styles.language_model_container}>
            {/* <h3 className={styles.topic_heading}>TEAM</h3>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6} lg={4}>
                    <TeamBox
                        imgSrc={AbhishekProfile}
                        name={"Abhishek Upperwal"}
                        designation={"Founder"}
                        linkedinProfileLink={"https://linkedin.com/in/upperwal"}
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    
                </Grid>
            </Grid> */}

            <h3 className={styles.call}>If our AGI vision aligns with yours, please feel free to get in touch with us at <a href="mailto:careers@soket.ai">careers@soket.ai</a></h3>
        </section>
    )
}
