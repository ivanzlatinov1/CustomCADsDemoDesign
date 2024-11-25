import React, { useState, useEffect } from "react"
import $ from "jquery"
import Transition from "../../../components/Transition/Transition"
import Introduction from "./components/Intro/Introduction"
import Search from "./components/Search/Search"
import Pagination from "./components/Pagination/Pagination"
import Model from "./components/Model/Model"
import styles from "./Gallery.module.css"

const modelData = [
    { src: "https://i.pinimg.com/736x/4c/a5/92/4ca592067318c81476d1b1857bd12479.jpg", name: "Computer", role: "Ballon DOR", author: "author" },
    { src: "https://i.pinimg.com/736x/ba/1d/a3/ba1da367b352136f712dfeb621ff158c.jpg", name: "Monster", role: "EURO 2016", author: "author" },
    { src: "https://i.pinimg.com/736x/51/e4/92/51e4925fa8940347ef3604146a7d132d.jpg", name: "Car", role: "CHAMPIONS LEAGUE", author: "author" },
    { src: "https://i.pinimg.com/736x/ec/a6/0d/eca60d57728330f4e2ba8897b1022989.jpg", name: "Cat", role: "THE GOAT", author: "author" },
    { src: "https://i.pinimg.com/736x/63/ca/0a/63ca0a2167a04a514ddad52841db1039.jpg", name: "Stavri", role: "GOAT", author: "author" },
    { src: "https://i.pinimg.com/736x/3f/ae/fc/3faefce3be18559c2565e069cd171f19.jpg", name: "MasterUI", role: "Football DEVELOPER", author: "author" },
    { src: "https://i.pinimg.com/736x/f2/80/90/f28090f7cf473f19c97008601b99dbae.jpg", name: "Robot", role: "SQL Developer", author: "author" },
    { src: "https://i.pinimg.com/736x/4f/69/cb/4f69cb02b3b3fff27bb5fde0063b0619.jpg", name: "Fries", role: "Autist", author: "author" },
    { src: "https://i.pinimg.com/736x/a1/22/8f/a1228f4514609741863d29f888534da0.jpg", name: "John", role: "Autist", author: "author" }
];

const Gallery: React.FC = () => {
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const totalItems = 100;
    const itemsPerPage = 10;

    useEffect(() => {
        window.scrollTo(0, 0);

        const sliderClass = `.${styles.model}`;
        const activeClass = styles.active;

        $(sliderClass).on("click", function () {
            $(sliderClass).removeClass(activeClass);
            $(this).addClass(activeClass);
        });

        return () => {
            $(sliderClass).off("click");
        };
    }, [isAuthorized]);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <>
            <div className={isAuthorized ? styles.hidden : ""}>
                <Introduction setIsAuthorized={setIsAuthorized} />
            </div>

            {isAuthorized && (
                <Transition>
                    <div className={`${styles.gallery}`}>
                        <section className={`${styles.container}`}>
                            <Search />
                            <div className={`${styles.models}`}>
                                {modelData.map((model, index) => (
                                    <Model key={index} model={model} />
                                ))}
                            </div>
                            <div className={`${styles.pagination}`}>
                                <Pagination
                                    totalItems={totalItems}
                                    itemsPerPage={itemsPerPage}
                                    onPageChange={handlePageChange}
                                />
                            </div>
                        </section>
                    </div>
                </Transition>
            )}
        </>
    );
};

export default Gallery;
