import { RxCross2 } from "react-icons/rx";

export default function Filter(props) {
  const { sort, setSort } = props;

  const handleSort = () => {
    setSort(!sort);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center w-full">
        <div className="flex flex-col w-5/6 items-end ">
          <div className="flex flex-row space-x-2 bg-white hover:bg-gray-100 p-2 rounded-xl cursor-pointer">
            <h1 onClick={() => handleSort()}>Sort by price</h1>
            {sort && (
              <RxCross2
                size={16}
                className={`bg-gray-300 rounded-xl mt-1 hover:bg-slate-200 `}
                onClick={() => handleSort()}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
