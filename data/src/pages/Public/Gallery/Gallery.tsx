import React, { useState, useEffect } from "react"
import $ from "jquery"
import Transition from "../../../components/Transition/Transition"
import Introduction from "./components/Intro/Introduction"
import Search from "./components/Search/Search"
import Pagination from "./components/Pagination/Pagination"
import Model from "./components/Model/Model"
import styles from "./Gallery.module.css"

const modelData = [
    { src: "https://i.pinimg.com/736x/00/af/70/00af70799d9ee068f3622e6e51c4ee61.jpg", name: "Ron", role: "Ballon DOR", author: "author" },
    { src: "https://i.pinimg.com/736x/28/9d/76/289d76602d3d3d08eb646c5b9bbbb7e8.jpg", name: "CrisRon", role: "EURO 2016", author: "author" },
    { src: "https://i.pinimg.com/736x/46/af/62/46af6287459048ed7024b5442544f8bc.jpg", name: "Ronaldo", role: "CHAMPIONS LEAGUE", author: "author" },
    { src: "https://i.pinimg.com/736x/72/81/00/728100f56d2ca6155bf400b93d8b3e99.jpg", name: "CR7", role: "THE GOAT", author: "author" },
    { src: "https://i.pinimg.com/736x/4e/18/53/4e185301e710d5e311b665beeed7f914.jpg", name: "Cris", role: "GOAT", author: "author" },
    { src: "https://i.pinimg.com/736x/4d/f9/ef/4df9eff4e5205755887dedc5ca7a9119.jpg", name: "RonCris", role: "Football DEVELOPER", author: "author" },
    { src: "https://i.pinimg.com/736x/43/2e/60/432e603d38f14fe8c2296c7751cae7f8.jpg", name: "GOAT", role: "SQL Developer", author: "author" },
    { src: "https://i.pinimg.com/736x/05/0f/83/050f8320179928ea941206d8d3cf0761.jpg", name: "Ron", role: "Autist", author: "author" },
    { src: "https://i.pinimg.com/736x/05/0f/83/050f8320179928ea941206d8d3cf0761.jpg", name: "Ron", role: "Autist", author: "author" }
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
                                {modelData.map((image, index) => (
                                    <Model key={index} image={image} />
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
