import React from "react";
import { Link } from "react-router-dom";
import RoleModel from "../RoleModel";

const ClientRole: React.FC = () => {
    return (
        <RoleModel
            role="Client"
            list1Item1={
                <>Purchase any 3D Model from our <Link to="/gallery">Gallery</Link></>
            }
            list1Item2="Order a Custom 3D Model"
            list1Item3="Track, Modify and Delete your Orders"
            list2Item1={
                <>Register as a <Link to="/register/client">Client</Link></>
            }
            list2Item2="Provide the necessary info"
            list2Item3="Enjoy the thrill!"
        />
    );
}

export default ClientRole;
