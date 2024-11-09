import React, { useEffect, useRef } from 'react';
import Bubbles from '../../components/Home/Background/Bubbles/Bubbles';
import Info from '../../components/Home/Info/Info';
import Benefits from '../../components/Home/Benefits/Benefits';
import ModelsWheel from '../../components/Home/ModelsWheel/ModelsWheel';
import Card from '../../components/Home/Cards/Card';
import styles from './Home.module.css';

function Home() {
    const sectionsRef = useRef([]);
    const boxRef = useRef(null);

    useEffect(() => {
        const sectionObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.visible);
                    }
                });
            },
            { threshold: 0.1 }
        );

        sectionsRef.current.forEach((section) => {
            sectionObserver.observe(section);
        });

        const boxObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.visible);
                    } else {
                        entry.target.classList.remove(styles.visible);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (boxRef.current) {
            boxObserver.observe(boxRef.current);
        }

        return () => {
            sectionObserver.disconnect();
            boxObserver.disconnect();
        };
    }, []);

    return (
        <div className={`${styles.home}`}>
            <section ref={(el) => (sectionsRef.current[0] = el)} className={`${styles.main} ${styles.section}`}>
                <Info />
                <div className={`${styles.cover}`}></div>
            </section>

            <section ref={(el) => (sectionsRef.current[1] = el)} className={`${styles.advantages} ${styles.section}`}>
                <Benefits />
            </section>

            <section ref={(el) => (sectionsRef.current[2] = el)} className={`${styles.models} ${styles.section}`}>
                <h1>Most Popular 3D Models</h1>
                <ModelsWheel />
            </section>

            <section ref={(el) => (sectionsRef.current[3] = el)} className={`${styles.payments} ${styles.section}`}>
                <h1>3D Models Prices</h1>
                <div className={`${styles.cards}`}>
                    <Card ref={boxRef}
                        title="Order from Gallery (Digital)"
                        icon="fa-regular fa-images"
                        pricing="15"
                        description="asd"
                        image="/assets/cards/gallery.png" />
                    <Card ref={boxRef}
                        title="Custom 3D Model (Digital)"
                        icon="fas fa-cube"
                        pricing="25"
                        description="asd"
                        image="/assets/cards/custom.png" />
                    <Card ref={boxRef}
                        title="Custom 3D Model & Printed"
                        icon="fa-solid fa-print"
                        pricing="35"
                        description="asd"
                        image="/assets/cards/printer.png" />
                </div>
            </section>

            <section ref={(el) => (sectionsRef.current[4] = el)} className={`${styles.contacts} ${styles.section}`}>
                <div className={`${styles["contact-info"]}`}>
                </div>
            </section>

            <Bubbles />
        </div>
    );
}

export default Home;
