import React from 'react';
import { Link } from 'react-router-dom';
import BtnLink from '../../Button/Button'
import styles from './Contacts.module.css'

const Contacts: React.FC = () => {
    return (
        <div className={`${styles["contacts"]}`}>
            <h1>Candidate for a designer in our company!</h1>
            <h2>( Learn about roles <Link to="/roles">here</Link> )</h2>
            <form action="" method="POST">
                <div className={`${styles.first}`}>
                    <div className={`${styles["form-field"]}`}>
                        <label>Name:</label>
                        <input type="text" id="name" name="name" required />
                    </div>

                    <div className={`${styles["form-field"]}`}>
                        <label>Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                </div>

                <div className={`${styles["form-field"]}`}>
                    <label>Tell us about you. How many years of experience do you have? What platform are you using for 3D modeling? Send us your certificates (if you have).</label>
                    <textarea id="description" name="description" rows={4} cols={50} required></textarea>
                </div>

                <label className={`${styles.file}`} htmlFor="file">
                    <div className={`${styles.icon}`}>
                        <i className="fas fa-upload"></i>
                    </div>
                    <div className={`${styles.text}`}>
                        <span>Click here to upload image</span>
                    </div>
                    <input type="file" id="file" />

                </label>


                <div className={`${styles.submit}`}>
                    <BtnLink text="Submit" type="submit" />
                </div>
            </form>
        </div>
    );
}

export default Contacts;