import React from 'react'
import "./navbar.scss"
import { Link, useHistory } from "react-router-dom";

interface Props {

}

const Navbar: React.FC<Props> = ({ }) => {
    const history = useHistory();

    const home = () => {
        history.push({
            pathname: `/`,

        });
    }

    return (
        <>
            <div className="navbar">
                <span style={{ cursor: "pointer" }} onClick={home}>AnonBoard</span>
            </div>
        </>
    )
}

export default Navbar