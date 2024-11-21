import React from "react";
import { Link } from "react-router-dom";
import RoleModel from "../RoleModel";

const ContributorRole: React.FC = () => {
    return (
        <RoleModel
            role="Contributor"
            list1Item1={
                <>Upload your 3D Models to our <Link to="/gallery">Gallery</Link></>
            }
            list1Item2="Get 75% of the profit earned"
            list1Item3="Track, Modify and Delete your 3D Models"
            list2Item1={
                <>Register as a <Link to="/register/contributor">Contributor</Link></>
            }
            list2Item2="Provide the necessary info"
            list2Item3="Enjoy the thrill!"
        />
    );
}

export default ContributorRole;
