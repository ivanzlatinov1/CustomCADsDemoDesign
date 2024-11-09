import styles from './ModelsWheel.module.css'

function ModelsWheel() {
    return (
        <div className={`${styles.slider}`}>
            <div className={`${styles.left}`}>
                &#60;
            </div>
            <div className={`${styles.right}`}>
                &#62;
            </div>
        </div>
    );
}

export default ModelsWheel;
