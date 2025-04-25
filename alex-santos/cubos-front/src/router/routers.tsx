import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home/Home";
import Login from "@/pages/Login/Login";
import DetailsMovie from "@/pages/DetailsMovie/DetailsMovie";
import Register from "@/pages/Register/Register";
import { SecurityToken } from "@/provider/SecurityToken";

const routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={
            <SecurityToken>
              <Home />
            </SecurityToken>
          }
        />
        <Route
          path="details-movie/:id"
          element={
            <SecurityToken>
              <DetailsMovie />
            </SecurityToken>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default routers;
