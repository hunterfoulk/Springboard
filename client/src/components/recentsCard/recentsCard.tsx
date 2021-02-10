import React, { useContext } from 'react'
import "./recentsCard.scss"
import { ThemeContext } from "../../context/contexts/themeContext"

interface Props {
    recents: string[]
}

const RecentCard: React.FC<Props> = ({ recents }) => {
    const { dispatch: themeDispatch, themeData, } = useContext(ThemeContext);

    return (
        <>
            <div className={`recent-card-${themeData.theme}`}>
                <div className="recent-header">
                    <span>Recents</span>

                </div>
                <div className="recents-container">
                    {recents.map((recent: any) => {
                        recents.length = 5
                        return (
                            <div className="recent">
                                <div className="image-container">
                                    <div className="recent-image-container">

                                        <img src={recent.image} />
                                    </div>
                                </div>
                                <div className="title-container">
                                    <span>t/{recent.title.charAt(0).toUpperCase() + recent.title.slice(1)}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default RecentCard