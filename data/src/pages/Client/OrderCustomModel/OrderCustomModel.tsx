import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Transition from "../../../components/Transition/Transition";
import BtnLink from "../../../components/Button/Button";
import styles from "./OrderCustomModels.module.css"

const OrderCustomModel: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Transition>
            <div className={styles.container}>
                <form>
                    <div className={styles.back} onClick={() => navigate("/custom-models")} data-tooltip='Go Back'>
                        <i className="fas fa-arrow-left"></i>
                    </div>
                    <h1>Order a Custom Model</h1>
                    <div className={styles.input}>
                        <label htmlFor="Name">
                            Name*
                            <input type="text" />
                        </label>
                        <label htmlFor="Description">
                            Description*
                            <textarea></textarea>
                        </label>
                        <label className={`${styles.file}`} htmlFor="file">
                            <div className={`${styles.icon}`}>
                                <i className="fas fa-upload"></i>
                            </div>
                            <div className={`${styles.text}`}>
                                <span>Click here to upload image</span>
                            </div>
                            <input type="file" id="file" />
                        </label>
                        <BtnLink text="Order Model" link="/custom-models"></BtnLink>
                    </div>
                    <div className={styles.info}>
                        <p>*This step requires extra payment</p>
                        <p>*Make sure you have filled all the fields so that we can make your model as high quality as possible according to your requirements</p>
                    </div>
                </form>
            </div>
        </Transition>
    );
}

export default OrderCustomModel;