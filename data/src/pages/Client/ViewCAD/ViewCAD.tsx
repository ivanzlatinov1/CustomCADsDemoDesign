import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Transition from "../../../components/Transition/Transition";
import styles from "./ViewCAD.module.css";

interface ViewCADProps { }

const ViewCAD: React.FC<ViewCADProps> = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { delivery } = location.state || { delivery: false };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Transition>
            <div className={styles.container}>
                <div className={styles.model}>
                    <div className={styles.visualizer}>
                        {/* 3D Model */}
                        <p style={{fontWeight: 'bold'}}>3D Model</p>
                    </div>
                    <div className={styles.buttons}>
                        <button onClick={() => navigate(-1)}><span>Go Back</span></button>
                        <button><span>Download CAD</span></button>
                        <button
                            onClick={() => navigate("/shipment-details")}
                            disabled={!delivery}
                        >
                            <span>Shipment Details</span>
                        </button>
                    </div>
                </div>
            </div>
        </Transition>
    );
};

export default ViewCAD;
