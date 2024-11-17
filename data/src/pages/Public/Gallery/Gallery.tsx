import React from "react";
import Transition from "../../../components/Transition/Transition";
import styles from "./Gallery.module.css"

const Gallery: React.FC = () => { 
    return (
        <Transition>
            <div className={`${styles.container}`}>
                <h1>Gallery</h1>
            </div>
        </Transition>
    );
}

export default Gallery;