import { useEffect } from "react";
import Transition from "../../../../components/Transition/Transition";
import BtnLink from "../../../../components/Button/Button";
import styles from "./Checkout.module.css"

interface CheckoutProps {
    onPreviousStep: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({ onPreviousStep }: CheckoutProps) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Transition>
            <div className={styles.container}>
                <h1>Page Not Implemented!</h1>
                <BtnLink text="Go Back" onClick={onPreviousStep} />
            </div>
        </Transition>
    );
}

export default Checkout;