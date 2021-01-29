import React from 'react'
import "./cards.scss"
import Moment from 'react-moment';
import { triggerAsyncId } from 'async_hooks';
import { Link, useHistory } from "react-router-dom";

interface Props {
    card: Category
    setState: React.Dispatch<React.SetStateAction<string>>

}

const Card: React.FC<Props> = ({ card, setState }) => {
    const history = useHistory();

    const handleRoute = async (card: any) => {
        let category = card.title.charAt(0).toUpperCase() + card.title.slice(1)
        console.log("PUSH", category)
        console.log("id", card.category_id)
        history.push({
            pathname: `/t/${category}`,
            state: { category: card.category_id, header: category, dropdownState: category },

        });

    }


    return (
        <>
            <div className="card">
                <div className="card-left">
                    <div className="image-container">

                        <img src={card.image} />

                    </div>
                    <div className="title-container">
                        <span onClick={() => handleRoute(card)}>{card.title.charAt(0).toUpperCase() + card.title.slice(1)}</span>
                        <p>{card.details}</p>
                    </div>
                </div>
                <div className="card-right">
                    <div className="recent-threads-text">
                        <span>
                            Recent Threads
                        </span>


                    </div>
                    <div className="recent-threads-container">

                        {card.threads.length === 0 ? <span>No threads currently posted.</span> :
                            card.threads.map((thread) => {
                                card.threads.length = 3
                                return (
                                    <div className="recent-thread">

                                        <span className="recent-thread-title">{thread.thread_title}</span>
                                        <Moment fromNow className="date">{thread.date}</Moment>

                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card