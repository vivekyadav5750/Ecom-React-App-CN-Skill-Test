import { useSelector } from "react-redux";
import CartProduct from "../components/cartProduct"
import { productSelector } from "../redux/productReducer";

export default function Cart() {
    const { Carts } = useSelector(productSelector);

    return (
        <>
            {Carts.length === 0 ? (
                <div className="text-center text-4xl mt-10 font-semibold text-gray-700">Cart is empty</div>
            ) : (
                <CartProduct Carts={Carts} />
            )}
        </>
    )
}