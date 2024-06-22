import { useDispatch } from "react-redux";
import EcommItemCard from "./ecom-itemCard";

import "react-toastify/dist/ReactToastify.css";

export default function EcommProductsCard({ products, sort }) {
  const dispatch = useDispatch();

  //   const handleEditClick = (index) => {
  //     console.log("index :: ", index);

  //     const card = document.getElementById(index);
  //     const subcard1 = card.childNodes[0];
  //     const subcard2 = card.childNodes[1];

  //     subcard1.childNodes[1].classList.remove("hidden");
  //     subcard1.childNodes[2].classList.add("hidden");

  //     subcard2.childNodes[0].classList.remove("hidden");
  //     subcard2.childNodes[1].classList.add("hidden");
  //   };

  //   const handleCancelClick = (index) => {
  //     const card = document.getElementById(index);
  //     const subcard1 = card.childNodes[0];
  //     const subcard2 = card.childNodes[1];

  //     subcard1.childNodes[1].classList.add("hidden");
  //     subcard1.childNodes[2].classList.remove("hidden");

  //     subcard2.childNodes[0].classList.add("hidden");
  //     subcard2.childNodes[1].classList.remove("hidden");
  //   };

  //   const handleDeleteClick = (index) => {
  //     console.log("index :: ", index);
  //     dispatch({ type: "products/deleteProduct", payload: index });
  //     toast.error("Product Deleted Successfully!");
  //   };

  //   const handleSaveClick = (index) => {
  //     const card = document.getElementById(index);
  //     const subcard1 = card.childNodes[0];
  //     const subcard2 = card.childNodes[1];

  //     const title = document.getElementById(`${index}name`);
  //     const price = document.getElementById(`${index}price`);
  //     const rate = document.getElementById(`${index}rate`);
  //     const description = document.getElementById(`${index}description`);

  //     const product = {
  //       title: title.value,
  //       price: price.value,
  //       rating: {
  //         rate: rate.value,
  //         count: 0,
  //       },
  //       description: description.value,
  //       image: products[index].image,
  //     };

  //     dispatch({ type: "products/editProduct", payload: { index, product } });

  //     subcard1.childNodes[1].classList.add("hidden");
  //     subcard1.childNodes[2].classList.remove("hidden");

  //     subcard2.childNodes[0].classList.add("hidden");
  //     subcard2.childNodes[1].classList.remove("hidden");

  //     toast.success("Product Updated Successfully!");
  //   };

  const sortedProducts = sort
    ? [...products].sort((a, b) => a.price - b.price)
    : products;
  console.log("sortedProducts :: ", sortedProducts);

  return (
    <>
      <div className="flex flex-col w-full justify-center items-center bg- ">
        {sortedProducts.map((product, index) => (
          <EcommItemCard product={product} index={index} key={index} />
        ))}
      </div>
    </>
  );
}
