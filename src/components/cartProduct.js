import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";

export default function CartProduct({ Carts }) {
    console.log("Carts :: ", Carts);
    const dispatch = useDispatch();
    const handleRemoveProduct = (index) => {
        console.log("index :: ", index);
        dispatch({type: "products/removeFromCart", payload: index});
    }

  return (
    <>
      <div className="flex flex-col w-full justify-center items-center bg- ">
        {Carts.map((product, index) => (
          <div
            key={index}
            id={index}
            className="flex  w-5/6 h-32 bg-white m-2 p-4 items-center  justify-between rounded-md shadow-md "
          >
            {/* 1st part of div list */}
            <div className="w-1/2 flex flex-row bg- space-x-8 ">
              <img src={product.image} className="w-24 h-24 " alt="product" />

              {/* Actual Part */}
              <div className={`space-y-4 `}>
                <div>
                  <h3 className="font-semibold">{product.title}</h3>
                  <p>Rs. {product.price}</p>
                </div>
                <div className="flex">
                  {Array(Math.floor(product.rating.rate))
                    .fill()
                    .map((_, index) => (
                      <FaStar key={index} className="text-yellow-300" />
                    ))}

                  {Array(5 - Math.floor(product.rating.rate))
                    .fill()
                    .map((_, index) => (
                      <FaStar key={index} className="text-gray-500" />
                    ))}
                </div>
              </div>
            </div>

            {/* 2nd part of div list */}
            <div className="w-1/2 flex flex-row bg- pr-8  text-justify ">
              {/*Actual Part  */}
              <div className="space-y-8 w-full  h-24">
                <div className="pr-2">Qty : {product.quantity}</div>

                <div className="flex flex-row justify-start  ">
                  <button className="bg-red-600 text-white px-2 py-2 rounded-md shadow-md font-semibold hover:bg-red-400 hover:text-black" onClick={() => handleRemoveProduct(index)}>
                    Remove from Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
