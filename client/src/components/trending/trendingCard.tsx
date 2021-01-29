import React, { useContext, useState, useEffect } from 'react'
import "./trendingCard.scss"
import Page from "../../images/flame.svg"
import { ThreadContext } from "../../context/contexts/threadContext"
import { FaCommentAlt } from 'react-icons/fa';


interface Props {

}

const TrendingCard: React.FC<Props> = ({ }) => {
    const { dispatch: threadDispatch, threadData } = useContext(ThreadContext);
    const [state, setState] = useState([])

    useEffect(() => {
        setState(threadData.trendings)


        return () => {
            threadDispatch({ type: 'CLEAR_RESULTS' });

        }
    }, [])



    return (
        <>
            <div className="trending-card">
                <div className="trending-card-header">
                    <img src={Page} />
                    <span>Trending Threads</span>
                </div>
                <div className="trendings-bottom-container">
                    {state.map((item: any) => {
                        state.length = 5

                        return (
                            <div className="trend">
                                <div className="trend-content">
                                    <FaCommentAlt className="comment-icon" />
                                    <span style={{ fontSize: "14px", marginLeft: "5px", marginTop: "2px" }}>{item.comments.length}</span>
                                    <span className="title">{item.thread_title}</span>
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