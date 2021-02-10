import React, { useContext } from 'react'
import "./navbar.scss"
import { Link, useHistory } from "react-router-dom";
import ThemeSwitch from "../switch/themeSwitch"
import { ThemeContext } from "../../context/contexts/themeContext"


interface Props {

}

const Navbar: React.FC<Props> = ({ }) => {
    const history = useHistory();
    const { dispatch: themeDispatch, themeData } = useContext(ThemeContext);

    const home = () => {
        history.push({
            pathname: `/`,

        });
    }

    const handleThemeChange = () => {
        localStorage.setItem("theme", themeData.theme === "light" ? "dark" : "light")
        themeDispatch({
            type: "CHANGE_THEME",
            theme: themeData.theme === "light" ? "dark" : "light",
        })
    }
    return (
        <>
            <div className={`navbar-${themeData.theme}`}>
                <div className="nav-left">

                    <span style={{ cursor: "pointer" }} onClick={home}>AnonBoard</span>
                </div>
                <div className="nav-right">

                    <ThemeSwitch

                        size="medium"
                        onChange={handleThemeChange}
                        checked={themeData.theme === "light"}
                    />
                </div>
            </div>
        </>
    )
}

export default Navbar