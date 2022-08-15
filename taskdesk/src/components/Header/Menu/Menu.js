import styles from './Menu.module.css'
import {Link} from "react-router-dom";

export const Menu = () => {
    return(
        <div>
            <div className={styles.butt}>
                <Link to='/add' className={styles.a}>Add Task</Link>
            </div>
            <div className={styles.butt}>
                <Link to='/board' className={styles.a}>Show Desk</Link>
            </div>
        </div>
    )
}