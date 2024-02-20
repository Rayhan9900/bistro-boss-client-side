

function FoodCard({ item }) {
    const { name, image, recipe, price } = item
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <p className=" absolute right-0 mr-4 mt-4 px-4 text-yellow-400 bg-slate-900">${price}</p>
                <div className="card-body text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-outline border-0 border-b-4 border-accent hover:bg-yellow-400">Add to card</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FoodCard