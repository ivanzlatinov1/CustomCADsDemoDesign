import React from "react";
import { Link } from "react-router-dom";
import RoleModel from "../RoleModel";

const DesignerRole: React.FC = () => {
    return (
        <RoleModel
            role="Designer"
            list1Item1="Become part of our friendly team of 3D Designers"
            list1Item2="Validate Contributor's 3D Models"
            list1Item3="Take on and Complete Client's Orders"
            list1Item4={
                <>Upload your own 3D Models directly to our <Link to="/gallery">Gallery</Link></>
            }
            list1Item5="Get 100% of the profit earned + monthly salary"

            list2Item1={
                <>Email us &nbsp;
                    <a href="https://mail.google.com" target="_blank" rel="noopener noreferrer">
                        HERE
                    </a>
                </>
            }
            list2Item2="Express your desire to join our team"
            list2Item3="Provide relevant experience"
            list2Item4="Land an interview"
            list2Item5="Enjoy the thrill!"
        />
    );
}

export default DesignerRole;
