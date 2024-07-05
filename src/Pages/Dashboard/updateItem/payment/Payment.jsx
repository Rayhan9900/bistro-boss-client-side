import { loadStripe } from "@stripe/stripe-js"
import SectionTitle from "../../../../components/SectionTitle/SectionTitle"
import { Elements } from "@stripe/react-stripe-js"
import CheckoutFrom from "./CheckoutFrom"

// TODO: add publisha
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gatway_PK)

const Payment = () => {

    return (
        <div>
            <SectionTitle heading="Payment" subHeading="Please pay to eat " ></SectionTitle>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutFrom />
                </Elements>
            </div>
        </div>
    )
}

export default Payment