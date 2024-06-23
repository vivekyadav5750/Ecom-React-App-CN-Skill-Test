/* eslint-disable react/prop-types */
import EcommItemCard from "./ecom-itemCard";

import "react-toastify/dist/ReactToastify.css";

export default function EcommProductsCard({ products, sort }) {
  // const dispatch = useDispatch();

  const sortedProducts = sort
    ? [...products].sort((a, b) => a.price - b.price)
    : products;
  console.log("sortedProducts :: ", sortedProducts);

  return (
    <>
      <div className="flex flex-col w-full justify-center items-center bg- ">
        {sortedProducts.map((product, index) => (
          <EcommItemCard data={product} index={index} key={index} />
        ))}
      </div>
    </>
  );
}

// set props set
// EcommProductsCard.propTypes = {
//   products: PropTypes.array,
//   sort: PropTypes.bool,
// };