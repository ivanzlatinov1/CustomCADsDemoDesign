import React from "react";
import { Link } from "react-router-dom";
import Transition from "../../../components/Transition/Transition";
import styles from './Role.module.css'

interface ClientRoleProps {
    role: string;
    list1Item1: string | JSX.Element;
    list1Item2: string | JSX.Element;
    list1Item3: string | JSX.Element;
    list1Item4?: string | JSX.Element;
    list1Item5?: string | JSX.Element;
    list2Item1: string | JSX.Element;
    list2Item2: string | JSX.Element;
    list2Item3: string | JSX.Element;
    list2Item4?: string | JSX.Element;
    list2Item5?: string | JSX.Element;
}

const ClientRole: React.FC<ClientRoleProps> = ({ role, list1Item1, list1Item2, list1Item3, list1Item4, list1Item5,
     list2Item1, list2Item2, list2Item3, list2Item4, list2Item5 }) => {
    return (
        <Transition>
            <div className={`${styles.container}`}>
                <h1>Learn about being a <b>{role}</b>!</h1>
                <div className={`${styles.info}`}>
                    <div>
                        <h2>What can i do as one?</h2>
                        <h3>When you're a {role}, you can:</h3>
                        <ul>
                            <li>{list1Item1}</li>
                            <li>{list1Item2}</li>
                            <li>{list1Item3}</li>
                            {list1Item4 && list1Item5 ? (
                                <>
                                    <li>{list1Item4}</li>
                                    <li>{list1Item5}</li>
                                </>
                            ) : null}
                        </ul>
                    </div>
                    <div>
                        <h2>How do i become one?</h2>
                        <h3>To become a {role}, you have to:</h3>
                        <ul>
                            <li>{list2Item1}</li>
                            <li>{list2Item2}</li>
                            <li>{list2Item3}</li>
                            {list2Item4 && list2Item5 ? (
                                <>
                                    <li>{list2Item4}</li>
                                    <li>{list2Item5}</li>
                                </>
                            ) : null}
                        </ul>
                    </div>
                </div>
            </div>
        </Transition>
    );
}

export default ClientRole;