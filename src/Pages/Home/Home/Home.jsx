import { Helmet } from "react-helmet-async"
import Banner from "../Banner/Banner"
import BistroSection from "../Bistro/BistroSection"
import Category from "../Category/Category"
import Featured from "../Featured/Featured"
import PopularMenu from "../PopularMenu/PopularMenu"
import Recommends from "../Recommends/Recommends"
import Testimonials from "../Testimonials/Testimonials"
import Contact from "../contact/Contact"

function Home() {
    return (
        <div>

            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>

            <Banner></Banner>
            <Category></Category>
            <BistroSection></BistroSection>
            <PopularMenu></PopularMenu>
            <Contact></Contact>
            <Recommends></Recommends>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    )
}

export default Home