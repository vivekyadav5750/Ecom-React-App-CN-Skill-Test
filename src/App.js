import {  Routes, Route, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";
import Navbar from "./components/navbar";
import Product from "./pages/product";
import AddProduct from "./pages/addProduct";
import { ToastContainer } from "react-toastify";
import EcommProduct from "./pages/ecomm";
import Cart from "./pages/cart";

// function App() {
//   return (
//     // <Provider store={store}>
//       <RouterProvider routes={router} />
//     // </Provider>
//   );
// }

export default function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<EcommProduct />} />
          <Route path="product" element={<Product />} />
          <Route path="addProduct" element={<AddProduct />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
      <ToastContainer/>
    </BrowserRouter>
    </Provider>
  );
}

// export default App;
