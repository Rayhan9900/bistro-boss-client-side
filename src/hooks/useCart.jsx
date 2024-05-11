//api axios (axios secure),tan stack
import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "./useAxiosSecure"
import useAuth from "./useAuth"


const useCart = () => {

    // return code

    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();


    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?email=${user.email}`)
            return res.data
        }
    });
    return [cart, refetch]

    // // tan stack query
    // const axiosSecure = useAxiosSecure();
    // const { data: cart = [] } = useQuery({
    //     queryKey: ['cart'],
    //     queryFn: async () => {
    //         const res = await axiosSecure.get('/carts')
    //         return res.data
    //     }
    // });
    // return [cart]

}

export default useCart;