import styles from './Bg.module.css'
import { ReactComponent as Logo } from './logo.svg';

export const Bg = () => {
    return(
        <div className={ styles.back }>
            <div className={ styles.lgBack}>
                <Logo className={styles.logo}/>
            </div>
        </div>
    )
}