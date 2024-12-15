import { useEffect, useState } from "react";
import Transition from "../../../components/Transition/Transition";
import Cart from "./Cart";
import AddressForm from "./AddressForm/AddressForm";
import CartNavigation from "./Navigation/CartNavigation";
import styles from './Cart.module.css'

const MainCart: React.FC = () => {
    const steps = ["Products", "Address", "Checkout"];
    const [currentStep, setCurrentStep] = useState(0);

    const goToNextStep = () => {
        setCurrentStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
    };

    const goToPreviousStep = () => {
        setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Transition>
            {currentStep === 0 && <Cart onNextStep={goToNextStep} />}
            
            {currentStep === 1 && <AddressForm onPreviousStep={goToPreviousStep} onNextStep={goToNextStep} />}
            
            <CartNavigation steps={steps} currentStep={currentStep} />
        </Transition>
    );
}

export default MainCart;