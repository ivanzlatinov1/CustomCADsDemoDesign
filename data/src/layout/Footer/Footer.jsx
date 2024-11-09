import styles from "./Footer.module.css"

function Footer() {
    return (
        <footer className={`${styles.footer}`}>
            <div className={`${styles["gradient-border-top"]}`}></div>
            <div className={`${styles.content}`}>
                <div>
                    <h2>CustomCADs</h2>
                    <p>Your go-to platform for custom 3D designs, pre-made models, and designer connections.</p>
                </div>
                <div className={`${styles.links}`}>
                    <h2>Contacts</h2>
                    <div className={`${styles.contacts}`}>
                        <a href="https://www.instagram.com/custom_cads/" target="_blank">
                        Email
                        </a>
                        <a href="https://www.instagram.com/custom_cads/" target="_blank">
                        Instagram
                        </a>
                        <a href="https://www.instagram.com/custom_cads/" target="_blank">
                        Facebook
                        </a>
                        <a href="https://www.instagram.com/custom_cads/" target="_blank">
                        Twitter
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;