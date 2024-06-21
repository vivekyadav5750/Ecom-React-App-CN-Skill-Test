import { FaStar } from "react-icons/fa";
import { MdDeleteForever, MdEdit } from "react-icons/md";
import { useDispatch } from "react-redux";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function EcommItemCard({ products, sort }) {
  const notedit = "00000";
  const dispatch = useDispatch();

  const handleEditClick = (index) => {
    console.log("index :: ", index);

    const card = document.getElementById(index);
    const subcard1 = card.childNodes[0];
    const subcard2 = card.childNodes[1];

    subcard1.childNodes[1].classList.remove("hidden");
    subcard1.childNodes[2].classList.add("hidden");

    subcard2.childNodes[0].classList.remove("hidden");
    subcard2.childNodes[1].classList.add("hidden");
  };

  const handleCancelClick = (index) => {
    const card = document.getElementById(index);
    const subcard1 = card.childNodes[0];
    const subcard2 = card.childNodes[1];

    subcard1.childNodes[1].classList.add("hidden");
    subcard1.childNodes[2].classList.remove("hidden");

    subcard2.childNodes[0].classList.add("hidden");
    subcard2.childNodes[1].classList.remove("hidden");
  };

  const handleDeleteClick = (index) => {
    console.log("index :: ", index);
    dispatch({ type: "products/deleteProduct", payload: index });
    toast.error("Product Deleted Successfully!");
  };

  const handleSaveClick = (index) => {
    const card = document.getElementById(index);
    const subcard1 = card.childNodes[0];
    const subcard2 = card.childNodes[1];

    const title = document.getElementById(`${index}name`);
    const price = document.getElementById(`${index}price`);
    const rate = document.getElementById(`${index}rate`);
    const description = document.getElementById(`${index}description`);

    const product = {
      title: title.value,
      price: price.value,
      rating: {
        rate: rate.value,
        count: 0,
      },
      description: description.value,
      image: products[index].image,
    };

    dispatch({ type: "products/editProduct", payload: { index, product } });

    subcard1.childNodes[1].classList.add("hidden");
    subcard1.childNodes[2].classList.remove("hidden");

    subcard2.childNodes[0].classList.add("hidden");
    subcard2.childNodes[1].classList.remove("hidden");

    toast.success("Product Updated Successfully!");
  };

  const sortedProducts = sort
    ? [...products].sort((a, b) => (a.price) - (b.price))
    : products;
  console.log("sortedProducts :: ", sortedProducts);

  return (
    <>
      <div className="flex flex-col w-full justify-center items-center bg- ">
        {/* if sort is true then sort products as incr as price or else show as it is */}
        {sortedProducts.map((product, index) => (
          <div
            key={index}
            id={index}
            className="flex  w-5/6 h-32 bg-white m-2 p-4 items-center  justify-between "
          >
            {/* 1st part of div list */}
            <div className="w-1/2 flex flex-row bg- space-x-8 ">
              <img src={product.image} className="w-24 h-24 " alt="product" />

              {/* Editable Part */}
              <div className="space-y-4  hidden">
                <div>
                  <h3 className="font-semibold">
                    <input
                      defaultValue={product.title}
                      className="w-96 border-2"
                      autoFocus
                      id={`${index}name`}
                    />
                  </h3>
                  <p>
                    Rs.{" "}
                    <input
                      defaultValue={product.price}
                      className="w-12 border-2"
                      id={`${index}price`}
                    />
                  </p>
                </div>
                <div className="flex">
                  <p>
                    <input
                      defaultValue={product.rating.rate}
                      className="w-10 border-2 "
                      id={`${index}rate`}
                    />
                  </p>
                </div>
              </div>

              {/* Actual Part */}
              <div className={`space-y-4  ${notedit}`}>
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
              {/* Editable Part */}
              <div className="space-y-1 w-full hidden h-24">
                <textarea
                  defaultValue={product.description}
                  className="w-full h-16 resize-none border-2"
                  autoFocus
                  // name="myTextarea"
                  id={`${index}description`}
                />

                <div className="flex flex-row justify-end space-x-4 ">
                  <button
                    className="bg-gray-500 text-white px-2 py-1  hover:bg-gray-400 rounded-md"
                    onClick={() => handleCancelClick(index)}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-gray-500 text-white px-2 py-1 hover:bg-gray-400 rounded-md"
                    onClick={() => handleSaveClick(index)}
                  >
                    Save
                  </button>
                </div>
              </div>

              {/*Actual Part  */}
              <div className="space-y-3 w-full  h-24">
                <div className="pr-2">{product.description}</div>

                <div className="flex flex-row justify-end  space-x-3 ">
                  <MdEdit
                    size={22}
                    className="text-yellow-600 cursor-pointer"
                    onClick={() => handleEditClick(index)}
                  />
                  <MdDeleteForever
                    size={22}
                    className="text-red-600 cursor-pointer"
                    onClick={() => handleDeleteClick(index)}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
        
      </div>
    </>
  );
}
