/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { MdDeleteForever, MdEdit } from "react-icons/md";
import { useDispatch } from "react-redux";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function EcommItemCard({ data, index }) {
  const dispatch = useDispatch();

  const [editMode, setEditMode] = useState(false);
  const [product, setProduct] = useState(data);

  const handleDeleteClick = (index) => {
    dispatch({ type: "products/deleteProduct", payload: index });
    toast.error("Product Deleted Successfully!");
  };

  const handleSaveClick = () => {
    dispatch({
      type: "products/editProduct",
      payload: { id: product.id, updatedProduct: product },
    });
    toast.success("Product Updated Successfully!");
    setEditMode(false);
  };

  const handleOnChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  /**This function handle cancel button click.
   * If cancel clicked then:-
   * 1. setEditMode to false
   * 2. setProduct to data (original data)
   */
  const handleCancelClick = () => {
    setEditMode(false);
    setProduct(data);
  };

  useEffect(() => {
    setProduct(data);
  }, [data]);

  return (
    <>
      <div
        key={index}
        id={index}
        className="flex  w-5/6 h-32 bg-white m-2 p-4 items-center  justify-between "
      >
        {/* 1st part of div list */}
        <div className="w-1/2 flex flex-row bg- space-x-8 ">
          <img src={product.image} className="w-24 h-24 " alt="product" />

          {/* Actual Part */}
          <div className={`space-y-4`}>
            <div>
              <input
                value={product.title}
                readOnly={!editMode}
                name="title"
                onChange={handleOnChange}
                className={`${
                  editMode ? "border-2" : "border-none"
                } font-semibold bg-transparent focus:outline-none `}
              />
              <p>
                Rs.{" "}
                <input
                  value={product.price}
                  onChange={handleOnChange}
                  name="price"
                  readOnly={!editMode}
                  className={`${
                    editMode ? "border-2" : "border-none"
                  } focus:outline-none w-2/5  `}
                />
              </p>
            </div>

            {!editMode ? (
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
            ) : (
              <div className="flex">
                <p>
                  <input
                    defaultValue={product.rating.rate}
                    className="w-10 border-2 "
                    id={`${index}rate`}
                  />
                </p>
              </div>
            )}
          </div>
        </div>

        {/* 2nd part of div list */}
        <div className="w-1/2 flex flex-row bg- pr-8  text-justify ">
          {/*Actual Part  */}
          <div className="space-y-3 w-full  h-24">
            <textarea
              value={product.description}
              readOnly={!editMode}
              name="description"
              onChange={handleOnChange}
              className={`bg-transparent ${
                editMode ? "border-2" : "border-none"
              } w-full h-16 resize-none focus:outline-none`}
            />

            {!editMode ? (
              <div className="flex flex-row justify-end  space-x-3 ">
                <MdEdit
                  size={22}
                  className="text-yellow-600 cursor-pointer"
                  onClick={() => setEditMode(true)}
                />
                <MdDeleteForever
                  size={22}
                  className="text-red-600 cursor-pointer"
                  onClick={() => handleDeleteClick(index)}
                />
              </div>
            ) : (
              <div className="flex flex-row justify-end space-x-4 ">
                <button
                  className="bg-gray-500 text-white px-2 py-1  hover:bg-gray-400 rounded-md"
                  onClick={handleCancelClick}
                >
                  Cancel
                </button>
                <button
                  className="bg-gray-500 text-white px-2 py-1 hover:bg-gray-400 rounded-md"
                  // className={bg}
                  // onClick={() => setClick(!click)}
                  onClick={handleSaveClick}
                >
                  Save Click it
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
