import React, { useState, useEffect } from 'react'
import "./homepage.scss"
import Dropdown from "../components/dropdown/dropdown"
import Card from "../components/cards/cards"
import CategoryActions from "../actions/actions"
import ThreadModal from "../components/modal/modal"
import Loading from "../components/loading/loading"

interface Props {
    setState: React.Dispatch<React.SetStateAction<string>>

}

const Homepage: React.FC<Props> = ({ setState }) => {
    const [categories, setCategories] = useState<Category[]>([])
    const { getCategories } = CategoryActions();
    const [loading, setLoading] = useState(true)

    async function fetchCategories() {
        const response = await getCategories();
        setCategories(response)

        setLoading(false)
    }

    useEffect(() => {

        fetchCategories()

    }, [])


    console.log("categories", categories)
    return (
        <>
            {loading ? <Loading /> : <div className="homepage-main">
                <div className="h1-container">
                    <h1>Topics</h1>

                </div>
                <div className="cards-main">
                    {categories.map((card, i) => (

                        <Card card={card} setState={setState} />

                    ))}
                </div>



            </div>}

        </>
    )
}

export default Homepage
