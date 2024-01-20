
import featuredImg from '../../../assets/home/featured.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle'

import './Featured.css'

function Featured() {
    return (
        <div className='featured-item bg-fixed text-white pt-8 my-20'>
            <SectionTitle subHeading="check it out" heading="Featured Item" />
            <div className="md:flex justify-center items-center pb-20 pt-12 px-36 bg-slate-500 bg-opacity-60">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p className='text-fuchsia-600 font-bold'>Aug 20,2029</p>
                    <p className="uppercase text-purple-700"> Where can i get some?</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At debitis odio eum deserunt, velit delectus rerum suscipit fuga porro corporis, sint dolor ipsum ut et impedit odit repellendus magnam omnis asperiores iusto excepturi dicta praesentium? Quisquam harum ab necessitatibus aliquid, molestiae commodi! Hic qui temporibus voluptas dolores eveniet accusamus et.</p>

                    <button className='btn btn-outline  border-b-4 border-b-accent mt-4 text-yellow-400 '>Order Now</button>
                </div>
            </div>
        </div>
    )
}

export default Featured