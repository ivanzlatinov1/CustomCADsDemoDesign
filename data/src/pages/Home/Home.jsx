import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button'
import styles from './Home.module.css';

function Home() {
    return (
        <div className={`${styles.home}`}>

            <div className={`${styles.main}`}>
                <div className={`${styles["main-info"]}`}>
                    <h2>CustomCADs</h2>
                    <p>Design, Create, Innovate</p>
                    <p>Join our 3D designer platform or order your custom models. From design to 3D print, we've got you covered.</p>
                    <Button />
                </div>
            </div>

            <div className={`${styles.info}`}>

            </div>
        </div>
    );
}

export default Home;