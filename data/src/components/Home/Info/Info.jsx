import Button from '../../Button/Button'
import styles from './Info.module.css'

function Info() {
    return (
        <>
            <div className={`${styles["main-info"]}`}>
                <h1>CustomCADs</h1>
                <h2 className={`${styles.quote}`}>Design, Create, Innovate</h2>
                <p>Join our 3D designer platform or order your custom models.</p>
                <p>From design to 3D print, we've got you covered.</p>
                <div className={`${styles.buttons}`}>
                    <Button link="/register" text="Get Started" className={`${styles.btn}`} />
                    <h2 className={`${styles.or}`}>OR</h2>
                    <Button link="/register" text="Explore" className={`${styles.btn}`} />
                </div>
            </div>
        </>
    );
}

export default Info;