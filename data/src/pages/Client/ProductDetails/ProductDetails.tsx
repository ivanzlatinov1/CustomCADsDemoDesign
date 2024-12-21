import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Transition from "../../../components/Transition/Transition";
import BtnLink from "../../../components/Button/Button";
import styles from "./ProductDetails.module.css"

const ProductDetails: React.FC = () => {
    const navigate = useNavigate();

    const model = {
        src: "https://i.pinimg.com/736x/22/5c/ec/225cec06c0f55b5cd441fdcc43565e34.jpg",
        name: "Model Name",
        category: "Category",
        likes: "100",
        views: "1.293",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        price: "$30.99",
        author: "Designer",
        upload_date: "12.12.2024"
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Transition>
            <div className={styles.container}>
                <div className={`${styles.product}`}>
                    <div className={`${styles.model}`}>
                        <div className={`${styles.visualizer}`}>
                            {/* 3D Model */}
                        </div>
                    </div>
                    <div className={`${styles.details}`}>
                        <div className={`${styles.info}`}>
                            <h1>{model.name}</h1>
                            <p><strong>Category:</strong> {model.category}</p>
                            <p><strong>Made by:</strong> {model.author}</p>
                            <hr />
                            <p className={`${styles.desc}`}>{model.description}</p>
                            <hr />
                            <p><strong>Price:</strong> {model.price}</p>
                            <p><strong>Uploaded on:</strong> {model.upload_date}</p>
                        </div>

                        <div className={`${styles.buttons}`}>
                            <BtnLink className={`${styles.back}`} text="Go Back" onClick={() => navigate(-1)} />
                            <BtnLink className={`${styles.back}`} text="Original Model" link="#" />
                            <BtnLink className={`${styles.back}`} text="Customize" link="/edit-model" />
                        </div>
                        <p>*Customizing the model may reflect its price!</p>
                    </div>
                </div>
            </div>
        </Transition>
    );
}

export default ProductDetails;