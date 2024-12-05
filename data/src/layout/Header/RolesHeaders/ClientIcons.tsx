import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faTh } from '@fortawesome/free-solid-svg-icons';
import styles from '../Header.module.css'

interface ClientIconProps {
    productCount: number;
}

const ClientIcons: React.FC<ClientIconProps> = ({ productCount }: ClientIconProps) => {
    return (
        <>
            <div className={styles['icon-wrapper']} data-tooltip="Dashboard">
                <Link to="/client-dashboard"><FontAwesomeIcon icon={faTh} size="2x" style={{ cursor: 'pointer' }} /></Link>
            </div>
            <span>|</span>
            <div className={styles['icon-wrapper']} data-tooltip="Shopping Cart">
                <Link to="/wallet"><FontAwesomeIcon icon={faShoppingCart} size="2x" style={{ cursor: 'pointer' }} /></Link>
                {productCount > 0 && (
                    <div className={styles.circle}>
                        {productCount}
                    </div>
                )}
            </div>
        </>
    );
}

export default ClientIcons;