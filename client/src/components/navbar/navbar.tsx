import React, { useContext, useState } from 'react'
import "./navbar.scss"
import { Link, useHistory } from "react-router-dom";
import ThemeSwitch from "../switch/themeSwitch"
import { ThemeContext } from "../../context/contexts/themeContext"
import { IoMdSearch } from 'react-icons/io';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { AiFillThunderbolt } from 'react-icons/ai';
import { IoMdTrendingUp } from 'react-icons/io';
import categoryActions from "../../actions/actions"
import Loading from "../loading/navLoader"

interface Props {

}

const Navbar: React.FC<Props> = ({ }) => {
    const history = useHistory();
    const { dispatch: themeDispatch, themeData } = useContext(ThemeContext);
    const [term, setTerm] = useState("")
    const { fetchTrends } = categoryActions();
    const [trends, setTrends] = useState([])
    const [loading, setLoading] = useState(true)

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


    const handleChange = async (event: React.ChangeEvent<{ value: string }>) => {
        setTerm(event.target.value);

        console.log("event", event.target.value)

        if (term.length >= 0) {
            const trendingArr = await fetchTrends()
            console.log("trendings", trendingArr)

            setLoading(false)
            setTrends(trendingArr)
        }

    };

    return (
        <>
            <div className={`navbar-${themeData.theme}`}>
                <div className="nav-left">

                    <span style={{ cursor: "pointer", marginLeft: "15px" }} onClick={home}>Springboard</span>
                </div>
                <div className="nav-middle">
                    <input type="text" value={term} onChange={handleChange} />
                    {term !== "" && <div className="search-dropdown">
                        <div className="term-container">
                            <div className="term-icon-container">
                                <span><IoMdSearch /></span>
                            </div>
                            <div className="term-text-container">
                                <span>
                                    {term}
                                </span>
                            </div>
                            <div className="close-term-container">
                                <span><IoIosCloseCircleOutline onClick={() => setTerm("")} /></span>
                            </div>
                        </div>
                        <div className="trending-header">
                            <span className="trending-icon"><AiFillThunderbolt /></span>
                            <span>Trending Threads</span>
                        </div>
                        <div className="trends-container">
                            {loading ? <Loading /> : <div className="trend-container">{trends.map((trend: any) => (
                                <div className="trend">
                                    <div className="trend-title">
                                        <span className="trend-chart-icon">
                                            <IoMdTrendingUp />
                                        </span>
                                        <span>
                                            {trend.thread_title}
                                        </span>
                                    </div>
                                    <div className="trend-body">
                                        <span>{trend.body}</span>
                                    </div>
                                    <div className="trend-footer">
                                        <div className="image-container">
                                            <img src={trend.image} />
                                        </div>
                                        <span>t/{trend.title.charAt(0).toUpperCase() + trend.title.slice(1)}</span>

                                    </div>
                                </div>
                            ))}</div>}
                        </div>
                    </div>}
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