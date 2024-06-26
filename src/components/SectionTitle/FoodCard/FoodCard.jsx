import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";


function FoodCard({ item }) {
    const { name, image, recipe, price, _id } = item;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();


    const handleAddToCard = () => {
        if (user && user.email) {
            // send cart item to the database

            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name}added to cart `,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        // refetch the cart to update the  cart items count
                        refetch();
                    }
                })
        }
        else {
            Swal.fire({
                title: "  Your are not Logged In",
                text: "Please login to add to the cart?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    // send the user  to the user loging page
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }

    return (
        <div>
            <div className="card w-96 h-[520px]  outline outline-offset-2 outline-yellow-300 bg-blue-700 shadow-2xl shadow-sky-600">
                <figure><img src={image} alt="Shoes" /></figure>
                <p className=" absolute right-0 mr-4 mt-4 px-4 text-yellow-400 bg-slate-900">${price}</p>
                <div className="card-body flex flex-col items-center">
                    <h2 className="card-title text-cyan-500">{name}</h2>
                    <p className="text-lime-400/100">{recipe}</p>
                    <div className="card-actions justify-center">
                        <button
                            onClick={handleAddToCard}
                            className="btn btn-outline border-0 border-b-4 border-accent hover:bg-yellow-400 text-cyan-400">
                            Add to card
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FoodCard