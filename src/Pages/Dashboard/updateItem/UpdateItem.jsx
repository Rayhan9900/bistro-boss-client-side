import { useLoaderData } from "react-router-dom"
import SectionTitle from "../../../components/SectionTitle/SectionTitle"
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaEdit } from "react-icons/fa";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
    const { name, category, recipe, price, _id } = useLoaderData();

    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const onSubmit = async (data) => {
        console.log(data)
        // image upload to image and then get an url 
        const imageFile = { image: data.image[0] };
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-Type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            // now send the menu item data to the server with  the image 
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            };
            //
            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
            console.log(menuRes);
            if (menuRes.data.modifiedCount > 0) {
                // show success popup
                // reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is updated to the menu.`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }

            console.log('with image url', res.data);

        };
    }

    return (
        <div>
            <SectionTitle heading="Update Item" subHeading="Refresh info"></SectionTitle>
            <div className="items-center  bg-pink-700 w-[700px]">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text text-yellow-400">Recipe Name*</span>
                            </div>
                            <input
                                type="text"
                                defaultValue={name}
                                placeholder="Recipe Name"
                                {...register('name', { require: true })}

                                className="input input-bordered w-full " />
                        </label>
                    </div>
                    <div className="flex">
                        {/* category */}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-yellow-400">Category*</span>
                            </div>

                            <select defaultValue={category} {...register("category", { require: true })}
                                className="select select-bordered w-full max-w-xs">

                                <option disabled value="default"> Select a cetegory</option>
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
                                <span className="label-text text-yellow-400">Price*</span>
                            </div>
                            <input
                                type="number"
                                defaultValue={price}
                                placeholder="Price"
                                {...register('price', { require: true })}
                                className="input input-bordered w-full " />
                        </label>

                    </div>
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text text-yellow-400">Recipe Details*</span>
                        </div>
                        <textarea defaultValue={recipe} {...register('recipe', { require: true })} className="textarea textarea-bordered h-24" placeholder="Recipe Detalis"></textarea>
                        <div className="label">
                        </div>
                    </label>
                    <div className="form-control w-full my-6">
                        <input {...register('image', { require: true })} type="file" className="file-input w-full max-w-xs" />
                    </div>
                    <button className="btn text-accent  hover:bg-violet-600 ">
                        Update Menu Items <FaEdit className="text-teal-500" />
                    </button>
                </form>
            </div>
        </div>
    )
}

export default UpdateItem