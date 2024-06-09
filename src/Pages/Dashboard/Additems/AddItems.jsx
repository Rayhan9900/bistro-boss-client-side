import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle"
import { FaUtensils } from "react-icons/fa";


function AddItems() {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
    };

    return (
        <div>
            <SectionTitle heading="add an items" subHeading="what's new?" ></SectionTitle>
            <div className="items-center bg-cyan-400 w-[700px]">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label className="form-control w-full my-5">
                            <div className="label">
                                <span className="label-text">Recipe Name*</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Recipe Name"
                                {...register('name')}
                                className="input input-bordered w-full " />
                        </label>
                    </div>
                    <div className="flex">
                        {/* category */}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Category*</span>
                            </div>
                            <select {...register("category")}
                                className="select select-bordered w-full max-w-xs">
                                <option disabled selected> Select a cetegory</option>
                                <option value="salad">salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </label>
                        {/* price */}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Price*</span>
                            </div>
                            <input
                                type="number"
                                placeholder="Price"
                                {...register('price')}
                                className="input input-bordered w-full " />
                        </label>

                    </div>
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Recipe Details*</span>
                        </div>
                        <textarea className="textarea textarea-bordered h-24" placeholder="Recipe Detalis"></textarea>
                        <div className="label">
                        </div>
                    </label>
                    <div className="form-control w-full my-6">
                        <input type="file" className="file-input w-full max-w-xs" />
                    </div>
                    <button className="btn">
                        Add Items <FaUtensils />
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AddItems