import { useEffect, useState } from "react";
import Transition from "../../../../components/Transition/Transition";
import BtnLink from "../../../../components/Button/Button";
import styles from "./AddressForm.module.css";

interface AddressFormProps {
  onPreviousStep: () => void;
  onNextStep: () => void;
}

const AddressForm: React.FC<AddressFormProps> = ({ onPreviousStep, onNextStep }) => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    postalCode: "",
    phone: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formValues.firstName.trim()) {
      newErrors.firstName = "First Name is required.";
    }

    if (!formValues.lastName.trim()) {
      newErrors.lastName = "Last Name is required.";
    }

    if (!formValues.email.trim() || !/\S+@\S+\.\S+/.test(formValues.email)) {
      newErrors.email = "A valid email address is required.";
    }

    if (!formValues.city.trim()) {
      newErrors.city = "City is required.";
    }

    if (!formValues.postalCode.trim()) {
      newErrors.postalCode = "Postal Code is required.";
    }

    if (!formValues.phone.trim()) {
      newErrors.phone = "Phone Number must follow the format XXX XXX XXX.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onNextStep();
    }
  };

  return (
    <Transition>
      <div className={styles.container}>
        <h1>Your Address</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles["input-row"]}>
            <div className={styles["input-group"]}>
              <label htmlFor="first_name">First Name</label>
              <input
                placeholder="First Name"
                id="first_name"
                name="firstName"
                type="text"
                value={formValues.firstName}
                onChange={handleChange}
                className={errors.firstName ? "invalid" : ""}
              />
              {errors.firstName && <small className="error-message">{errors.firstName}</small>}
            </div>

            <div className={styles["input-group"]}>
              <label htmlFor="last_name">Last Name</label>
              <input
                placeholder="Last Name"
                id="last_name"
                name="lastName"
                type="text"
                value={formValues.lastName}
                onChange={handleChange}
                className={errors.lastName ? "invalid" : ""}
              />
              {errors.lastName && <small className="error-message">{errors.lastName}</small>}
            </div>
          </div>

          <div className={styles["input-group"]}>
            <label htmlFor="email">Email Address</label>
            <input
              placeholder="Your email address"
              id="email"
              name="email"
              type="text"
              value={formValues.email}
              onChange={handleChange}
              className={errors.email ? "invalid" : ""}
            />
            {errors.email && <small className="error-message">{errors.email}</small>}
          </div>

          <div className={styles["input-row"]}>
            <div className={styles["input-group"]}>
              <label htmlFor="country">Country</label>
              <input type="text" value="Bulgaria" disabled style={{ color: "gray" }} />
            </div>

            <div className={styles["input-group"]}>
              <label htmlFor="city">City</label>
              <input
                placeholder="Your city"
                id="city"
                name="city"
                type="text"
                value={formValues.city}
                onChange={handleChange}
                className={errors.city ? "invalid" : ""}
              />
              {errors.city && <small className="error-message">{errors.city}</small>}
            </div>

            <div className={styles["input-group"]}>
              <label htmlFor="postal">Postal Code</label>
              <input
                placeholder="Your postal code"
                id="postal"
                name="postalCode"
                type="text"
                value={formValues.postalCode}
                onChange={handleChange}
                className={errors.postalCode ? "invalid" : ""}
              />
              {errors.postalCode && <small className="error-message">{errors.postalCode}</small>}
            </div>
          </div>

          <div className={styles["input-group"]}>
            <label htmlFor="phone">Phone Number</label>
            <input
              placeholder="Phone Number (XXX XXX XXX)"
              id="phone"
              name="phone"
              type="text"
              value={formValues.phone}
              onChange={handleChange}
              className={errors.phone ? "invalid" : ""}
            />
            {errors.phone && <small className="error-message">{errors.phone}</small>}
          </div>

          <div className={styles.btn}>
            <BtnLink text="Go Back" onClick={onPreviousStep} />
            <BtnLink text="Proceed to Checkout" type="submit" />
          </div>
        </form>
      </div>
    </Transition>
  );
};

export default AddressForm;