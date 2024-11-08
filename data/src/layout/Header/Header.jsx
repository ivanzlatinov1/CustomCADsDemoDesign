import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faUserCog } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import styles from "./Header.module.css"

function Header() {
    return (
        <header className={`${styles.header}`}>

            <div className={`${styles["content-start"]}`}>
                <FontAwesomeIcon icon={faBars} size="2x" />
            </div>

            <div className={`${styles["content-middle"]}`}>

            </div>

            <div className={`${styles["content-end"]}`}>
                <FontAwesomeIcon icon={faCoins} size="2x" />
                <span>|</span>
                <FontAwesomeIcon icon={faShoppingCart} size="2x" />
                <span>|</span>
                <FontAwesomeIcon icon={faUserCog} size="2x" />
            </div>

        </header>
    );
}

export default Header;