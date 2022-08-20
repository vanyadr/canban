import styles from './Menu.module.css'
import {Link} from "react-router-dom";

export const Menu = () => {
    return(
        <div>
            <div className={styles.button}>
                <Link to='/add' className={styles.link}>Add Task</Link>
            </div>
            <div className={styles.button}>
                <Link to='/board' className={styles.link}>Show Desk</Link>
            </div>
        </div>
    )
}