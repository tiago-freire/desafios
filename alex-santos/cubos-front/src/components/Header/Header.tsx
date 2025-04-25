import { useEffect, useState } from "react";
import LogoCubos from "@/assets/logo/cuboslogo.png";
import LogoCubosMobile from "@/assets/logo/Vectorcubos.png";
import { Button } from "../ui/button";
import ImageSun from "@/assets/icons/sun.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWidth = () => setIsMobile(window.innerWidth <= 768);

    checkWidth();
    window.addEventListener("resize", checkWidth);

    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  const token = localStorage.getItem("access_token");

  const handleRemoveToken = () => {
    window.location.href = "/";
    localStorage.removeItem("access_token");
  };

  return (
    <div className="w-full flex justify-between bg-[#121113]/95 p-4 border-b-2 border-b-[#F1E6FD30]">
      <Link to={"/"} className="flex items-center space-x-2">
        <img
          src={isMobile ? LogoCubosMobile : LogoCubos}
          alt="Logo Cubos"
          className="text-white"
        />
        <h3 className="text-white">Movies</h3>
      </Link>
      <div className="flex items-center space-x-2">
        <Button variant="ghost" className="bg-[#B744F714] cursor-pointer">
          <img src={ImageSun} alt="" className="w-[24px] h-[24px] text-white" />
        </Button>
        <Button
          onClick={handleRemoveToken}
          variant="ghost"
          className="bg-[#8E4EC6] text-white cursor-pointer"
        >
          {token ? "Logout" : "Entrar"}
        </Button>
      </div>
    </div>
  );
};

export default Header;
