import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Transition from "../../../components/Transition/Transition";
import BtnLink from "../../../components/Button/Button";
import styles from "./ProductDetails.module.css"

const ProductDetails: React.FC = () => {
    const navigate = useNavigate();

    const [model, setModel] = useState({
        src: "https://i.pinimg.com/736x/22/5c/ec/225cec06c0f55b5cd441fdcc43565e34.jpg",
        name: "Model Name",
        category: "Category",
        delivery: true,
        quantity: 2,
        likes: "100",
        views: "1.293",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        price: "$30.99",
        author: "Designer",
        upload_date: "12.12.2024",
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleDeliveryToggle = () => {
        setModel((prevModel) => ({
            ...prevModel,
            delivery: !prevModel.delivery,
        }));
    };

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
                            <div className={`${styles.check}`}>
                                <input
                                    type="checkbox"
                                    id="check"
                                    checked={model.delivery}
                                    onChange={handleDeliveryToggle}
                                />
                                <label htmlFor="check"><span>Delivery:</span></label>
                            </div>
                            <p><strong>Category:</strong> {model.category}</p>
                            <hr />
                            <p className={`${styles.desc}`}>{model.description}</p>
                            <hr />
                            <div className={styles.calculations}>
                                <div>
                                    <p><strong>Price:</strong> {model.price}</p>
                                    <p><strong>Quantity:</strong> {model.quantity}</p>
                                </div>
                                <div className={styles.braces}></div>
                                <div className={styles.arrow}></div>
                                <p style={{ marginLeft: '10px' }}><strong>Final Price:</strong> ${model.quantity * parseFloat(model.price.replace('$', ''))}</p>
                            </div>
                        </div>

                        <div className={`${styles.buttons}`}>
                            <BtnLink className={`${styles.back}`} text="Go Back" onClick={() => navigate(-1)} />
                            <BtnLink className={`${styles.back}`} text="Original Model" link="#" />
                            <BtnLink className={`${styles.back}`} text="Customize" link="/viewer" />
                        </div>
                        <p>*Customizing the model may reflect its price!</p>
                    </div>
                </div>
            </div>
        </Transition>
    );
}

export default ProductDetails;