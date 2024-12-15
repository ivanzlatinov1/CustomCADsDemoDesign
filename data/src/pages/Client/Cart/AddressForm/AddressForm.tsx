import { useEffect } from "react";
import Transition from "../../../../components/Transition/Transition";
import BtnLink from "../../../../components/Button/Button";
import styles from "./AddressForm.module.css"

interface AddressFormProps {
    onPreviousStep: () => void;
    onNextStep: () => void;
}

const AddressForm: React.FC<AddressFormProps> = ({ onPreviousStep, onNextStep }) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Transition>
            <div className={styles.container}>
                <h1>Your Address</h1>
                <form>
                    <div className={styles["input-row"]}>
                        <div className={styles["input-group"]}>
                            <label htmlFor="first_name">First Name</label>
                            <input placeholder="First Name" id="city" type="text" />
                        </div>

                        <div className={styles["input-group"]}>
                            <label htmlFor="last_name">Last Name</label>
                            <input placeholder="Last Name" type="text" />
                        </div>
                    </div>
                    <div className={styles["input-group"]}>
                        <label htmlFor="address">Email Address</label>
                        <input placeholder="Your email address" type="text"></input>
                    </div>

                    <div className={styles["input-row"]}>
                        <div className={styles["input-group"]}>
                            <label htmlFor="country">Country</label>
                            <input type="text" value="Bulgaria" disabled style={{ color: "gray" }} />
                        </div>

                        <div className={styles["input-group"]}>
                            <label htmlFor="city">City</label>
                            <input placeholder="Your city" id="city" type="text" />
                        </div>

                        <div className={styles["input-group"]}>
                            <label htmlFor="postal">Postal Code</label>
                            <input placeholder="Your postal code" id="postal" type="text" />
                        </div>
                    </div>

                    <div className={styles["input-group"]}>
                        <label htmlFor="postal">Phone Number</label>
                        <input placeholder="Phone Number (XXX XXX XXX)" type="text" />
                    </div>
                    <div className={styles.btn}>
                        <BtnLink text="Go Back" onClick={onPreviousStep} />
                        <BtnLink text="Proceed to Checkout" onClick={onNextStep} />
                    </div>
                </form>
            </div>
        </Transition>
    );
}

export default AddressForm;