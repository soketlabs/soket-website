import {useRouter} from 'next/router';

import styles from '@/styles/TextBox.module.scss';

export default function TextBox(props) {

    const router = useRouter();

    console.log(router)

    return (
        <div className={styles.text_box + ' ' + (props.link ? styles.link: '')} onClick={() => {router.push(props.link || '')}}>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    )
}
