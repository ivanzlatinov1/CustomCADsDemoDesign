import React, { useEffect, useRef } from 'react';
import Bubbles from '../../components/Home/Background/Bubbles/Bubbles';
import Info from '../../components/Home/Info/Info';
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
            </section>

            <section ref={(el) => (sectionsRef.current[1] = el)} className={`${styles.section}`}>
                <Bubbles />
                <div className={`${styles.info}`}>
                    <div ref={boxRef} className={`${styles.box}`}>Box</div>
                </div>
            </section>

            <section ref={(el) => (sectionsRef.current[2] = el)} className={`${styles.contacts} ${styles.section}`}>
                <div className={`${styles["contact-info"]}`}>
                </div>
            </section>
        </div>
    );
}

export default Home;
