import React, { useEffect, useRef } from 'react';
import Info from '../../../components/Home/Info/Info';
import Benefits from '../../../components/Home/Benefits/Benefits';
import ModelsWheel from '../../../components/Home/ModelsWheel/ModelsWheel';
import Card from '../../../components/Home/Cards/Card';
import Contacts from '../../../components/Home/Contacts/Contacts';
import Cad from '../../../components/Home/HomeModel/HomeModel';
import Figures from '../../../components/Home/HomeFigures/Figures';
import FiguresAnimation from '../../../components/Home/HomeFigures/FiguresAnimation';
import styles from './Home.module.css';

const Home: React.FC = () => {
    const sectionsRef = useRef<(HTMLElement | null)[]>([]);
    const boxRef = useRef<HTMLDivElement | null>(null);

    if (history.scrollRestoration) {
        history.scrollRestoration = 'manual';
    } else {
        window.onbeforeunload = function () {
            window.scrollTo(0, 0);
        }
    }

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
            if (section) {
                sectionObserver.observe(section);
            }
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
        <div className={styles.home}>

            <section ref={(el) => (sectionsRef.current[0] = el)} id="section1" className={`${styles.main} ${styles.section}`}>
                <Info scrollTargetId="section2" />
                <div className={styles.cover}></div>
                <Figures />
                <FiguresAnimation />
                {/* <Cad isHomeCad={true} /> */}
            </section>

            <section ref={(el) => (sectionsRef.current[1] = el)} id="section2" className={`${styles.advantages} ${styles.section}`}>
                <Benefits />
            </section>

            <hr />

            <section ref={(el) => (sectionsRef.current[2] = el)} id="section3" className={`${styles.models} ${styles.section}`}>
                <h1>Most Popular 3D Models</h1>
                <ModelsWheel />
            </section>

            <hr />

            <section ref={(el) => (sectionsRef.current[3] = el)} id="section4" className={`${styles.payments} ${styles.section}`}>
                <h1>3D Models Prices</h1>
                <div className={styles.cards}>
                    <Card
                        ref={boxRef}
                        title="Order from Gallery (Digital)"
                        icon="fa-regular fa-images"
                        pricing="15"
                        desc1="Ready-made designs"
                        desc2="Fast printing and delivery"
                        desc3="Affordable and convenient"
                        image="/assets/cards/gallery.png"
                        link="/gallery"
                    />
                    <Card
                        ref={boxRef}
                        title="Custom 3D Model (Digital)"
                        icon="fas fa-cube"
                        pricing="25"
                        desc1="Tailored design to your specifications"
                        desc2="Delivered as a digital file"
                        desc3="Perfect for further customization or personal use"
                        image="/assets/cards/custom.png"
                        link="/not-implemented"
                    />
                    <Card
                        ref={boxRef}
                        title="3D Model & Printed"
                        icon="fa-solid fa-print"
                        pricing="35"
                        desc1="Personalized 3D design"
                        desc2="Physical product delivered to your door"
                        desc3="High-quality print with attention to detail"
                        image="/assets/cards/printer.png"
                        link="/not-implemented"
                    />
                </div>
            </section>

            <hr />

            <section ref={(el) => (sectionsRef.current[4] = el)} id="section5" className={styles.contacts}>
                <Contacts />
            </section>
        </div>
    );
};

export default Home;