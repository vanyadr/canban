import styles from './Logo.module.css'
import { ReactComponent as Logotype } from './logo.svg';
import {Link} from "react-router-dom";

export const Logo = () => {
    return(
        <div className={styles.lgBack}>
            <Link to="/">
                <Logotype className={styles.logo}/>
            </Link>
        </div>
    )
}