import styles from './Sheet.module.css'

function Sheet({ title, icon, details }) {
    return (
        <div className={`${styles.sheet}`}>
            <i className={icon}></i>
            <div className={`${styles.title}`}>
                {title}
            </div>

            <div className={`${styles.details}`}>
                {details}
            </div>
        </div>
    );
}

export default Sheet;