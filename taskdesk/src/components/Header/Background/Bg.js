import styles from './Bg.module.css'
import { ReactComponent as Logo } from './logo.svg';
import {Link} from "react-router-dom";

export const Bg = () => {
    return(
        <div className={styles.lgBack}>
            <Link to="/">
                <Logo className={styles.logo}/>
            </Link>
        </div>
    )
}