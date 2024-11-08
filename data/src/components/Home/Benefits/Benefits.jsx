import styles from './Benefits.module.css'

function Benefits() {
    return (
        <div className={`${styles.container}`}>
            <div className={`${styles.computer}`}></div>
            <div className={`${styles.content}`}>
                <h1>Why should you choose CustomCADs?</h1>
            </div>
        </div>
    );
}

export default Benefits;