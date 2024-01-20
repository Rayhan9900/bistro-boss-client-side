import SectionTitle from "../../../components/SectionTitle/SectionTitle"

import chef from '../../../assets/home/slide1.jpg'

function Recommends() {
    return (
        <div>
            <SectionTitle
                subHeading="Should Try"
                heading="chef recommends"
            />


            <div className="flex md:grid-cols-3 gap-6">
                <div className="card w-96 glass">
                    <figure><img className="w-[420px] h-[300px]" src={chef} alt="car!" /></figure>
                    <div className="card-body ">
                        <h2 className="card-title text-sky-700">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-outline border-0  border-b-4 border-accent hover:bg-yellow-400">Add to card</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 glass">
                    <figure><img className="w-[420px] h-[300px]" src={chef} alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-rose-500">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-outline border-0 border-b-4 border-accent hover:bg-yellow-400">Add to card</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 glass">
                    <figure><img className="w-[420px] h-[300px]" src={chef} alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-cyan-600">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-outline border-0 border-b-4 border-accent hover:bg-yellow-400">Add to card</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Recommends