import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faUserCog } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faMoneyCheckDollar } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styles from "./Header.module.css"

function Header() {

    const toggleSearch = (search, button) => {
        const searchBar = document.getElementById(search);
        const searchBtn = document.getElementById(button);

        searchBtn.addEventListener('click', () => {
            searchBar.classList.toggle(`${styles["show-search"]}`)
        })
    }

    return (
        <header className={`${styles.header}`}>

            <div className={`${styles["content-start"]}`}>
                <FontAwesomeIcon icon={faBars} size="2x" style={{ cursor: 'pointer' }} />
            </div>

            <div className={`${styles["content-middle"]}`}>
                
            </div>

            <div className={`${styles["content-end"]}`}>
                <FontAwesomeIcon icon={faShoppingCart} size="2x" style={{ cursor: 'pointer' }} />
                <span>|</span>
                <FontAwesomeIcon icon={faMoneyCheckDollar} size="2x" style={{ cursor: 'pointer' }} />
                <span>|</span>
                <FontAwesomeIcon icon={faBell} size="2x" style={{ cursor: 'pointer' }} />
                <span>|</span>
                <FontAwesomeIcon icon={faUserCog} size="2x" style={{ cursor: 'pointer' }} />
            </div>
        </header>
    );
}

export default Header;