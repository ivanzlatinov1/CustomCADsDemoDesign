import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BtnLink from '../../Button/Button';
import styles from './Contacts.module.css';

const Contacts: React.FC = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
    });

    const [errors, setErrors] = useState<Record<string, string>>({});

    const validateForm = (): boolean => {
        const newErrors: Record<string, string> = {};

        if (!formValues.name.trim()) {
            newErrors.name = "Name is required.";
        }

        if (!formValues.email.trim() || !/\S+@\S+\.\S+/.test(formValues.email)) {
            newErrors.email = "A valid email address is required.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        setErrors({ ...errors, [name]: "" });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            /* Backend Logic */
        }
    };

    return (
        <div className={`${styles["contacts"]}`}>
            <h1>Candidate for a designer in our company!</h1>
            <h2>( Learn about roles <Link to="/roles">here</Link> )</h2>
            <form onSubmit={handleSubmit}>
                <div className={`${styles.first}`}>
                    <div className={`${styles["form-field"]}`}>
                        <label>Name:</label>
                        {errors.name && <small className="error-message">{errors.name}</small>}
                        <input
                            type="text"
                            id="name"
                            name="name"
                            onChange={handleChange}
                            value={formValues.name}
                            className={errors.name ? "invalid" : ""}
                        />
                    </div>

                    <div className={`${styles["form-field"]}`}>
                        <label>Email:</label>
                        {errors.email && <small className="error-message">{errors.email}</small>}
                        <input
                            type="email"
                            id="email"
                            name="email"
                            onChange={handleChange}
                            value={formValues.email}
                            className={errors.email ? "invalid" : ""}
                        />
                    </div>
                </div>

                <div className={`${styles["form-field"]}`}>
                    <label>Tell us about you. How many years of experience do you have? What platform are you using for 3D modeling? Send us your certificates (if you have).</label>
                    <textarea
                        id="description"
                        name="description"
                        rows={4}
                        cols={50}
                    />
                </div>

                <label className={`${styles.file}`} htmlFor="file">
                    <div className={`${styles.icon}`}>
                        <i className="fas fa-upload"></i>
                    </div>
                    <div className={`${styles.text}`}>
                        <span>Click here to upload an image</span>
                    </div>
                    <input type="file" id="file" />
                </label>

                <div className={`${styles.submit}`}>
                    <BtnLink text="Submit" type="submit" />
                </div>
            </form>
        </div>
    );
};

export default Contacts;
