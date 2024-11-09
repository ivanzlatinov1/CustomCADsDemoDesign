import Sheet from './Sheets/Sheet';
import styles from './Benefits.module.css'

function Benefits() {
    return (
        <div className={`${styles.container}`}>
            <div className={`${styles.computer}`}></div>
            <div className={`${styles.content}`}>
                <h1>Why should you choose CustomCADs?</h1>
                <Sheet 
                title="Custom Designs"
                icon=""
                details="Describe your project, and we will create it from scratch in SolidWorks and deliver it 3D-printed."
                />
            </div>
        </div>
    );
}

export default Benefits;