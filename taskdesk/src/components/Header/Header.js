import {Bg} from "./Background";
import {Menu} from "./Menu";
import styles from './Header.module.css'

export const Header = () => {
    return(
        <div className={styles.holder}>
            <div className={styles.string}>
                <div className={styles.elem}>
                    <Bg/>
                </div>
                <div className={styles.elem}>
                    <Menu/>
                </div>
            </div>
        </div>

    )
}