import { FC } from "react";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";

import "./scss/app.scss";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

const App: FC = () => {
  return (
    <div className="wrapper">
      <Header />

      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
