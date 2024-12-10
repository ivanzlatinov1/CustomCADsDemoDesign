import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTh } from '@fortawesome/free-solid-svg-icons';
import styles from '../../Header.module.css'

const DesignerIcons: React.FC = () => {
    return (
        <>
            <div className={styles['icon-wrapper']} data-tooltip="Dashboard">
                <Link to="/designer-dashboard"><FontAwesomeIcon icon={faTh} size="2x" style={{ cursor: 'pointer' }} /></Link>
            </div>
        </>
    );
}

export default DesignerIcons;