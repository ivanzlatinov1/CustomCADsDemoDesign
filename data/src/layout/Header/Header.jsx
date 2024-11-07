import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faUserCog} from '@fortawesome/free-solid-svg-icons';
import styles from "./Header.module.css"

function Header()
{
    return (
    <header className={`${styles.header}`}>
        <FontAwesomeIcon icon={faBars} size="2x" />
        <FontAwesomeIcon icon={faUserCog} size="2x" />
    </header>
    );
}

export default Header;