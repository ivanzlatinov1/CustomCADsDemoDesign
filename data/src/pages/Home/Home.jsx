import { Link } from 'react-router-dom';
import styles from './Home.module.css';

function Home() {
    return (
        <div className={`${styles.home}`}>
            <h1>Hello</h1>
            <Link to="/register">Register</Link>
        </div>
    );
}

export default Home;