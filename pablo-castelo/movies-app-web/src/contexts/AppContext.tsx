"use client";

import {
	createContext,
	useContext,
	useState,
	useEffect,
	ReactNode
} from "react";
import { useRouter } from "next/navigation";

import api from "@/api";

interface User {
	name: string;
	email: string;
	token: string;
}

interface IAppContext {
	user: User | null;
	setUser: (user: User | null) => void;
	isAuthenticated: boolean;
	logout: () => void;
	signIn: (email: string, password: string) => Promise<void>;
	signUp: (name: string, email: string, password: string) => Promise<void>;
}

const AppContext = createContext<IAppContext | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
	const [user, setUser] = useState<User | null>(null);
	const router = useRouter();

	useEffect(() => {
		const storedUser = localStorage.getItem("user");
		console.log('stored', storedUser)
		if (storedUser) setUser(JSON.parse(storedUser));
	}, []);

	useEffect(() => {
		if (user) {
			localStorage.setItem("user", JSON.stringify(user));
		} else {
			localStorage.removeItem("user");
		}
	}, [user]);

	const logout = () => {
		localStorage.removeItem("token");
		setUser(null);
		router.push("/login");
	};

	const signIn = async (email: string, password: string) => {
		const response = await api.post("/auth/login", { email, password });
		const { access_token, user } = response.data;

		localStorage.setItem("token", access_token);
		setUser(user);
		router.push("/movies");
	};

	const signUp = async (name: string, email: string, password: string) => {
		await api.post("/auth/register", { name, email, password });
		await signIn(email, password);
	};

	return (
		<AppContext.Provider
			value={{
				user,
				setUser,
				isAuthenticated: !!user,
				logout,
				signIn,
				signUp,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useAppContext = () => {
	const context = useContext(AppContext);
	if (!context) {
		throw new Error("useAppContext must be used inside AppProvider");
	}
	return context;
};
