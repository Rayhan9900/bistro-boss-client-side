import { useEffect, useState } from "react"
import SectionTitle from "../../../components/SectionTitle/SectionTitle"
import MenuItem from "../../Shared/MenuItem/MenuItem"

function PopularMenu() {

    const [menu, setMenu] = useState([])

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {

                const popularItem = data.filter(item => item.category === 'popular')
                setMenu(popularItem)
            })
    }, [])

    return (
        <section>

            <SectionTitle subHeading={"check it out"} heading={"from our menu"} />
            <div className="grid md:grid-cols-2 gap-10">
                {
                    menu.map(item => <MenuItem key={item._id} item={item} />

                    )
                }
            </div>
            <div className="text-center p-4">
                <button className="btn btn-outline  border-b-4 border-accent">View Full Menu</button>
            </div>
        </section>
    )
}

export default PopularMenu