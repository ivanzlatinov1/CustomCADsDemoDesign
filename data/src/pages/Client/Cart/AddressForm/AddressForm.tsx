import { useEffect } from "react";
import Transition from "../../../../components/Transition/Transition";
import styles from "./AddressForm.module.css"

interface AddressFormProps {
    onPreviousStep: () => void;
    onNextStep: () => void;
}

const AddressForm: React.FC<AddressFormProps> = ({ onPreviousStep, onNextStep }) => {
    const steps = ["Your Products", "Address", "Checkout"];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Transition>
            <div className={styles.container}>
                <h1>Address</h1>
                <button onClick={onPreviousStep}>Back to Cart</button>

                <button onClick={onNextStep}>Proceed to Checkout</button>
            </div>
        </Transition>
    );
}

export default AddressForm;