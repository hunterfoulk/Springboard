import React, { useContext, useState, useEffect } from 'react'
import "./trendingCard.scss"
import Page from "../../images/flame.svg"
import { ThreadContext } from "../../context/contexts/threadContext"
import { FaCommentAlt } from 'react-icons/fa';
import { ThemeContext } from "../../context/contexts/themeContext"
import { Link, useHistory } from "react-router-dom";


interface Props {

}

const TrendingCard: React.FC<Props> = ({ }) => {
    const { dispatch: threadDispatch, threadData } = useContext(ThreadContext);
    const { dispatch: themeDispatch, themeData, } = useContext(ThemeContext);
    const history = useHistory();
    const [state, setState] = useState([])

    useEffect(() => {
        setState(threadData.trendings)


        return () => {
            threadDispatch({ type: 'CLEAR_RESULTS' });

        }
    }, [])

    const handleThreadRoute = async (thread: any) => {

        history.push({
            pathname: `/t/${thread.thread_id}/${thread.thread_title}`,
            state: { id: thread.thread_id },

        });

    }


    return (
        <>
            <div className={`trending-card-${themeData.theme}`}>
                <div className="trending-card-header">
                    <img src={Page} />
                    <span>Trending Threads</span>
                </div>
                <div className="trendings-bottom-container">
                    {state.map((thread: any) => {
                        state.length = 4

                        return (
                            <div className="trend">
                                <div className="trend-content">
                                    <FaCommentAlt className="comment-icon" />
                                    <span style={{ fontSize: "14px", marginLeft: "5px", marginTop: "2px" }}>{thread.comments.length}</span>
                                    <span onClick={() => handleThreadRoute(thread)} className="title">{thread.thread_title}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default TrendingCard