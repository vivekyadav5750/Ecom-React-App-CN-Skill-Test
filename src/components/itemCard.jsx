import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ItemCard({ products, Carts }) {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch({type: "products/addToCart", payload: product})
    toast.success("Product Added to Cart");
  };

  return (
    <>
      <div className="flex flex-col w-full justify-center items-center bg- ">
        {products.map((product, index) => (
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
              <div className="space-y-3 w-full  h-24">
                <div className="pr-2">{product.description}</div>

                <div className="flex flex-row justify-end  space-x-3 ">
                  <button className="bg-green-600 text-white px-2 py-2 rounded-md shadow-md font-semibold hover:bg-green-400 hover:text-black" onClick={() => handleAddToCart(product)}>Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        ))}
        
      </div>
    </>
  );
}
