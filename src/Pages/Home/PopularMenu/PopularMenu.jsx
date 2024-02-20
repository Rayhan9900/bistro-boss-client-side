// import { useEffect, useState } from "react
import SectionTitle from "../../../components/SectionTitle/SectionTitle"
import MenuItem from "../../Shared/MenuItem/MenuItem"
import useMenu from "../../../hooks/useMenu"

function PopularMenu() {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')


    // const [menu, setMenu] = useState([])

    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {

    //             const popularItem = data.filter(item => item.category === 'popular')
    //             setMenu(popularItem)
    //         })
    // }, [])

    return (
        <section>

            <SectionTitle subHeading={"check it out Popular"} heading={"from our menu"} />
            <div className="grid md:grid-cols-2 gap-10">
                {
                    popular.map(item =>
                        <MenuItem
                            key={item._id}
                            item={item}
                        />

                    )
                }
            </div>
            <div className="text-center p-4">
                <button className="btn btn-outline border-0 border-b-4 border-accent hover:bg-yellow-400">View Full Menu</button>
                {/* <button className="btn btn-outline  border-b-4 border-accent">View Full Menu</button> */}
            </div>
        </section>
    )
}

export default PopularMenu