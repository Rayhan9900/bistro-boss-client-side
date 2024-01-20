
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/menu-bg.png'


function Menu() {
    return (
        <div>

            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg}></Cover>

            <h2>amamamamaammamammamamamamaamamamamamama</h2>
        </div>
    )
}

export default Menu