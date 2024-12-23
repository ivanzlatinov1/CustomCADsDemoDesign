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
                    <div className={styles.back} onClick={() => navigate(-1)} data-tooltip='Go Back'>
                        <i className="fas fa-arrow-left"></i>
                    </div>
                    <h1>Order a Custom Model</h1>
                    <div className={styles.input}>
                        <label htmlFor="Name">
                            Model Name*
                            <input type="text" required />
                        </label>
                        <label htmlFor="Description">
                            Description*
                            <textarea required></textarea>
                        </label>
                        <div className={`${styles.check}`}>
                            <input
                                type="checkbox"
                                id="check"
                            />
                            <label htmlFor="check"><span>Want a delivery?</span></label>
                        </div>
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