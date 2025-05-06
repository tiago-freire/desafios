"use client";

import { Box, Button, Flex, IconButton, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import SunIcon from "../SunIcon";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/contexts/AppContext";

interface HeaderProps {
	modality: "register" | "login" | "logout";
}

const Header: React.FC<HeaderProps> = ({ modality }) => {
	const { logout } = useAppContext();
	const router = useRouter();

	const setButtonText = () => {
		switch (modality) {
			case "login":
				return "Login";

			case "logout":
				return "Logout";

			case "register":
				return "Cadastrar";
		}
	};

	return (
		<>
			<Flex
				height={{ base: "72px" }}
				padding={"20px 16px"}
				borderBottom={"1px"}
				borderColor={"#F1E6FD30"}
				justifyContent={"space-between"}
			>
				<Flex alignItems={"center"} gap={"1rem"}>
					<Box>
						<Image src={"logo.svg"} alt={"Movies app logo"} />
					</Box>
					<Text
						fontFamily={"var(--font-inter)"}
						fontWeight={"bold"}
						color={"#EEEEF0"}
					>
						Movies
					</Text>
				</Flex>

				<Flex gap={"0.5rem"} height={"2.75rem"}>
					<IconButton
						aria-label="Change theme"
						backgroundColor={"#B744F714"}
						width={"4rem"}
						fontSize={"1.5rem"}
						icon={<SunIcon />}
					/>
					<Button
						backgroundColor={"#8E4EC6"}
						borderRadius={"2px"}
						width={{ base: "5.625rem" }}
						onClick={() => {
							if (modality === "login" || modality === "register") {
								router.push(`/${modality}`);
							} else {
								logout();
							}
						}}
					>
						<Text
							fontFamily={"var(--font-roboto)"}
							fontWeight={"400"}
							backgroundColor={"#8E4EC6"}
							color={"#FFF"}
						>
							{setButtonText()}
						</Text>
					</Button>
				</Flex>
			</Flex>
		</>
	);
};

export default Header;
