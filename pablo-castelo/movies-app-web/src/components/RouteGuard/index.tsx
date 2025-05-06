"use client";

import { useAppContext } from "@/contexts/AppContext";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

interface RouteGuardProps {
	children: ReactNode;
}

const RouteGuard: React.FC<RouteGuardProps> = ({ children }) => {
	const { isAuthenticated } = useAppContext();
	const router = useRouter();

	console.log("isauth", isAuthenticated)

	useEffect(() => {
		if (!isAuthenticated) {
			router.replace("/login");
		}
	}, [isAuthenticated, router]);

	return <>{(isAuthenticated && children) || null}</>;
};

export default RouteGuard;
