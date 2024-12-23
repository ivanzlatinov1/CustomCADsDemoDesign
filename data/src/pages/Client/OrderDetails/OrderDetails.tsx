import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Transition from "../../../components/Transition/Transition";
import BtnLink from "../../../components/Button/Button";
import styles from "./OrderDetails.module.css";

const OrderDetails: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [model, setModel] = useState({
        name: "Example Name",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim commodi aut vero doloribus voluptate alias esse eum exercitationem repudiandae pariatur! Ullam eaque et est rem consectetur ipsum sit. Numquam, suscipit.",
        delivery: true
    });

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setModel((prevModel) => ({
            ...prevModel,
            name: e.target.value,
        }));
    };

    const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setModel((prevModel) => ({
            ...prevModel,
            description: e.target.value,
        }));
    };

    const handleDeliveryToggle = () => {
        setModel((prevModel) => ({
            ...prevModel,
            delivery: !prevModel.delivery,
        }));
    };

    return (
        <Transition>
            <div className={styles.container}>
                <form>
                    <div className={styles.back} onClick={() => navigate("/custom-models")} data-tooltip="Go Back">
                        <i className="fas fa-arrow-left"></i>
                    </div>
                    <h1>Modify Your Model</h1>
                    <div className={styles.input}>
                        <label htmlFor="Name">
                            Model Name*
                            <input
                                type="text"
                                id="Name"
                                value={model.name}
                                required
                                onChange={handleNameChange}
                            />
                        </label>
                        <label htmlFor="Description">
                            Description*
                            <textarea
                                id="Description"
                                value={model.description}
                                required
                                onChange={handleDescriptionChange}
                            ></textarea>
                        </label>
                        <div className={`${styles.check}`}>
                            <input
                                type="checkbox"
                                id="check"
                                checked={model.delivery}
                                onChange={handleDeliveryToggle}
                            />
                            <label htmlFor="check">
                                <span>Delivery:</span>
                            </label>
                            <span style={{ color: model.delivery ? "green" : "red" }} className={styles.status}>
                                {model.delivery ? "Yes" : "No"}
                            </span>
                        </div>

                        <BtnLink text="Save" link="/custom-models"></BtnLink>
                    </div>
                    <div className={styles.info}>
                        <p>
                            *Make sure you have filled all the fields so that we can make your model as high
                            quality as possible according to your requirements.
                        </p>
                    </div>
                </form>
                <div className={`${styles.model}`}>
                    <div className={`${styles.visualizer}`}>
                        {/* 3D Model */}
                        <p>When the designer is finished with the model, it will appear here.</p>
                    </div>
                </div>
            </div>
        </Transition>
    );
};

export default OrderDetails;
