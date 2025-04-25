import { createContext } from "react";

interface ITokenProps {
    access_token: string | null;
}

export const TokenContext = createContext<ITokenProps>({ access_token: " " });
