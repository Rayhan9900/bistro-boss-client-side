

function FoodCard({ item }) {
    const { name, image, recipe, price } = item

    return (
        <div>
            <div className="card w-96 h-[520px]  outline outline-offset-2 outline-yellow-300 bg-blue-700 shadow-2xl shadow-sky-600">
                <figure><img src={image} alt="Shoes" /></figure>
                <p className=" absolute right-0 mr-4 mt-4 px-4 text-yellow-400 bg-slate-900">${price}</p>
                <div className="card-body flex flex-col items-center">
                    <h2 className="card-title text-cyan-500">{name}</h2>
                    <p className="text-lime-400/100">{recipe}</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-outline border-0 border-b-4 border-accent hover:bg-yellow-400 text-cyan-400">Add to card</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FoodCard