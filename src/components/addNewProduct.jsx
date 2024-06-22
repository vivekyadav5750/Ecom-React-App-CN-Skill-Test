import { useRef } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

export default function AddNewProduct() {
    const dispatch = useDispatch();

    const nameRef = useRef();
    const descriptionRef = useRef();
    const priceRef = useRef();
    const ratingRef = useRef();
    const imageRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const description = descriptionRef.current.value;
        const price = priceRef.current.value;
        const rating = ratingRef.current.value;
        const image = imageRef.current.value;

        const product = {
            title: name,
            description,
            price: parseInt(price),
            rating:{
                rate: rating,
                count: 0
            },
            image
        }
        console.log(product);
        dispatch({type: 'products/addProduct', payload: product});
        toast.success("Product Added Successfully!");

        nameRef.current.value = '';
        descriptionRef.current.value = '';
        priceRef.current.value = '';
        ratingRef.current.value = '';
        imageRef.current.value = '';

    }

  return (
    <>
      <div className="bg-white w-1/2  flex flex-col m-8 ">
        <h1 className="m-4 text-xl">Add a Product</h1>
        
        <form
            onSubmit={handleSubmit}
          className="flex flex-col text-lg space-y-4 rounded-md ml-4 mr-4 mb-4 "
        >
          <label className="flex flex-col   ">
            Name:
            <input
              className="border-2 border-black rounded-md mt-2 h-9 p-2"
              type="text"
              name="name"
              ref={nameRef}
            />
          </label>
          <label className="flex flex-col">
            Description:
            <input
              className="border-2 border-black rounded-md  mt-2 h-9 p-2"
              type="text"
              name="description"
                ref={descriptionRef}
            />
          </label>
          <label className="flex flex-col">
            Price:
            <input
              className="border-2 border-black rounded-md mt-2 h-8 p-2"
              type="number"
              name="price"
                ref={priceRef}
            />
          </label>
          <label className="flex flex-col">
            Rating:
            <input
              className="border-2 border-black rounded-md mt-2 h-8 p-2"
              type="number"
              name="rating"
                ref={ratingRef}
            />
          </label>
            <label className="flex flex-col">
                Image:
                <input
                className="border-2 border-black rounded-md mt-2 h-9 p-2"
                type="text"
                name="image"
                ref={imageRef}
                />
            </label>
          <button
            className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Add
          </button>
        </form>
      </div>
    </>
  );
}
