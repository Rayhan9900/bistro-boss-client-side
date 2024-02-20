import { Link } from "react-router-dom"
import Cover from "../../Shared/Cover/Cover"
import MenuItem from "../../Shared/MenuItem/MenuItem"


function MenuCategory({ items, title, img }) {

    return (
        <div className="pt-8 ">
            {title && <Cover img={img} title={title} ></Cover>}
            <div className="grid md:grid-cols-2 gap-10 mt-16">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    />)
                }
            </div>
            <div className="text-center p-4">
                <Link to={`/order/${title}`}>
                    <button className="btn btn-outline border-0 border-b-4 border-accent hover:bg-yellow-400">Order Your Favorate Food</button></Link>
            </div>
        </div>
    )
}

export default MenuCategory