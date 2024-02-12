
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/menu-bg.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';



function Menu() {

    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')

    return (
        <div>

            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title="our menu"></Cover>
            {/* {Main Cover} */}
            <SectionTitle subHeading="Don't miss" heading="Today's offer" />
            {/* Offered menu items */}
            <MenuCategory items={offered} />
            {/* dessert menu items */}
            <MenuCategory items={desserts} title={"Dessert"} img={dessertImg}
            />
            {/* pizza menu items */}
            <MenuCategory items={pizza} title={"Pizza"} img={pizzaImg}
            />
            {/* Salad menu items */}
            <MenuCategory items={salad} title={"Salad"} img={saladImg}
            />
            {/* Soup menu items */}
            <MenuCategory items={soup} title={"Soup"} img={soupImg}
            />

        </div>
    )
}

export default Menu