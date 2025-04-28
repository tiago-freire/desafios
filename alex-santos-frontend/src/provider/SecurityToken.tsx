import { TokenContext } from "@/context/tokenContext";
import { ReactNode, useContext, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

interface ISecurityToken {
  children: ReactNode;
}

export const SecurityToken = ({ children }: ISecurityToken) => {
  const { access_token } = useContext(TokenContext);

  const [authentic, setAuthentic] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem("access_token");

    if (!storedToken || storedToken === "undefined" || storedToken === "null") {
      setAuthentic(false);
      alert("Por favor, realize o login");
      navigate("/login");
      return;
    }

    if (!access_token) {
      setAuthentic(false);
      alert("Sessão expirada. Por favor, faça login novamente");
      localStorage.removeItem("access_token");
      navigate("/login");
      return;
    }

    setAuthentic(true);
  }, [access_token, navigate]);

  return authentic ? children : null;
};
