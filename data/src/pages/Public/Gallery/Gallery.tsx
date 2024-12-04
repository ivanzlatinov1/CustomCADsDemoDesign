import React, { useState, useEffect } from "react"
import $ from "jquery"
import Transition from "../../../components/Transition/Transition"
import Introduction from "./components/Intro/Introduction"
import Search from "./components/Search/Search"
import Pagination from "./components/Pagination/Pagination"
import Model from "./components/Model/Model"
import styles from "./Gallery.module.css"

const modelData = [
    {
        src: "https://i.pinimg.com/736x/4c/a5/92/4ca592067318c81476d1b1857bd12479.jpg",
        name: "Computer",
        category: "Electronics",
        likes: "100",
        views: "1.590",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        price: "30$",
        author: "Designer",
        upload_date: "12.12.2024"
    },
    {
        src: "https://i.pinimg.com/736x/ba/1d/a3/ba1da367b352136f712dfeb621ff158c.jpg",
        name: "Monster",
        category: "Toys",
        likes: "100",
        views: "3.973",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        price: "30$",
        author: "Designer",
        upload_date: "12.12.2024"
    },
    {
        src: "https://i.pinimg.com/736x/51/e4/92/51e4925fa8940347ef3604146a7d132d.jpg",
        name: "Car",
        category: "Vehicles",
        likes: "100",
        views: "1.772",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        price: "30$",
        author: "Designer",
        upload_date: "12.12.2024"
    },
    {
        src: "https://i.pinimg.com/736x/22/5c/ec/225cec06c0f55b5cd441fdcc43565e34.jpg",
        name: "Cartoon Jeep",
        category: "Vehicles",
        likes: "100",
        views: "1.293",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        price: "30$",
        author: "Designer",
        upload_date: "12.12.2024"
    },
    {
        src: "https://i.pinimg.com/736x/71/d7/e0/71d7e055438106c7fdf1dad9ec94f170.jpg",
        name: "Cannon",
        category: "Others",
        likes: "100",
        views: "4.423",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        price: "30$",
        author: "Designer",
        upload_date: "12.12.2024"
    },
    {
        src: "https://i.pinimg.com/736x/8c/1f/9d/8c1f9d58058a448749bdf4fff3b0cec7.jpg",
        name: "Scooter",
        category: "Vehicles",
        likes: "100",
        views: "1.191",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        price: "30$",
        author: "Designer",
        upload_date: "12.12.2024"
    },
    {
        src: "https://i.pinimg.com/736x/f2/80/90/f28090f7cf473f19c97008601b99dbae.jpg",
        name: "Robot",
        category: "Electronics",
        likes: "100",
        views: "782",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        price: "30$",
        author: "Designer",
        upload_date: "12.12.2024"
    },
    {
        src: "https://i.pinimg.com/736x/4f/69/cb/4f69cb02b3b3fff27bb5fde0063b0619.jpg",
        name: "Fries",
        category: "Others",
        likes: "100",
        views: "1.832",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        price: "30$",
        author: "Designer",
        upload_date: "12.12.2024"
    },
    {
        src: "https://i.pinimg.com/736x/e8/d8/95/e8d8952e395e0745f96f78f67f005baa.jpg",
        name: "Toaster",
        category: "Furniture",
        likes: "100",
        views: "3.212",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        price: "30$",
        author: "Designer",
        upload_date: "12.12.2024"
    }
];

const Gallery: React.FC = () => {
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const totalItems = 45;
    const itemsPerPage = 9;

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
