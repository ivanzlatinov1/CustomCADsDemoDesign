import React from 'react';
import { Link } from 'react-router-dom';
import Transition from '../../../components/Transition/Transition';
import styles from './Error.module.css'

interface ErrorPageParams {
    status: number | undefined
}

function ErrorPage({ status }: ErrorPageParams) {

    let title, message, tip, link;
    switch (status) {
        case 400:
            title = "Oops! Something Went Wrong.";
            message = "The server couldn't understand your request. Please check your input and try again.";
            tip = "Double-check the URL or form data you're submitting.";
            break;

        case 401:
            title = "Access Denied";
            message = "You need to log in to view this content.";
            tip = "If you believe you’re seeing this in error, please contact support."
            link = <Link to="/login">Sign In</Link>;
            break;

        case 403:
            title = "Access Forbidden";
            message = "You don’t have permission to access this resource.";
            tip = "If you think you should have access, please reach out to the administrator.";
            break;

        case 404:
            title = "Page Not Found";
            message = "We couldn’t find the page you’re looking for.";
            tip = "Double-check the URL or head back to the homepage.";
            break;

        default:
            title = "Something Went Wrong";
            message = "An unexpected error occurred. Please try again later.";
            tip = "If the issue persists, contact our support team.";
            break;
    }

    return (
        <Transition>
            <div className={`${styles.container}`}>
                <h1 className={styles.title}>{title}</h1>
                <h3 className={styles.message}>{message}</h3>
                <p className={styles.tip}>{tip}</p>
                {link && <div className={styles.link}>{link}</div>}
                <div className={styles.link}>
                    <Link className={styles.link} to="/support">Contact support</Link>
                </div>
            </div>
        </Transition>
    );
}

export default ErrorPage;