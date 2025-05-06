"use client";

import Header from "@/components/Header";
import { useAppContext } from "@/contexts/AppContext";
import {
	Button,
	Center,
	Flex,
	Input,
	Text,
	Highlight,
	useToast
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

interface LoginProps {}

interface SignInFormInput {
	email: string;
	password: string;
}

const Login: React.FC<LoginProps> = () => {
	const { isAuthenticated, signIn } = useAppContext();
	const router = useRouter();
	const toast = useToast();

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting }
	} = useForm<SignInFormInput>();

	useEffect(() => {
		console.log(isAuthenticated);
		if (isAuthenticated) {
			router.replace("/movies");
		}
	}, [isAuthenticated, router]);

	const onSubmit = async (data: SignInFormInput) => {
		try {
			await signIn(data.email, data.password);
			router.push("/movies");
		} catch (err: any) {
			toast({
				title: "Erro ao entrar",
				description: err?.message || "Verifique suas credenciais",
				status: "error",
				duration: 3000,
				isClosable: true
			});
		}
	};

	return (
		<>
			<Flex minHeight={"100vh"} width={"100%"} flexDirection={"column"}>
				<Header modality="register" />
				<Flex
					flex="1 0 auto"
					backgroundImage=" url('background.png')"
					backgroundPosition="center -320px"
					position="relative"
					width="100%"
					height="100%"
					_before={{
						content: '""',
						position: "absolute",
						top: 0,
						left: 0,
						width: "100%",
						height: "100%",
						background: "rgba(18, 17, 19, 0.4)",
						bgGradient:
							"linear-gradient(180deg, rgba(18, 17, 19, 1) 0%, rgba(18, 17, 19, 0.46) 30%, rgba(18, 17, 19, 1) 50%)",
						zIndex: 1
					}}
				>
					<Center backgroundColor={"unset"} zIndex={2} width={"100%"}>
						<form onSubmit={handleSubmit(onSubmit)}>
							<Flex
								backgroundColor={"#232225"}
								minWidth={"18.75rem"}
								height={"15rem"}
								flexDirection={"column"}
							>
								<Flex
									padding={"1rem 1rem 0rem 1rem"}
									backgroundColor={"unset"}
									flexDirection={"column"}
									width={"100%"}
									gap={"0.5rem"}
								>
									<Text
										color={"#FFF"}
										backgroundColor={"unset"}
										fontSize={"0.8rem"}
										fontFamily={"var(--font-roboto)"}
										fontWeight={"700"}
									>
										Email
									</Text>
									<Input
										width={"100%"}
										placeholder="Digite seu email"
										fontFamily={"var(--font-roboto)"}
										backgroundColor={"#1A191B"}
										borderColor={"#3C393F"}
										color={"#FFF"}
										_placeholder={{ color: "#6F6D78" }}
										{...register("email", { required: "Email é obrigatório" })}
									/>
									{errors.email && (
										<Text
											fontSize="0.75rem"
											color="red.300"
											backgroundColor={"unset"}
										>
											{errors.email.message}
										</Text>
									)}
								</Flex>
								<Flex
									padding={"1rem 1rem 0rem 1rem"}
									backgroundColor={"unset"}
									flexDirection={"column"}
									width={"100%"}
									gap={"0.5rem"}
								>
									<Text
										color={"#FFF"}
										backgroundColor={"unset"}
										fontSize={"0.8rem"}
										fontFamily={"var(--font-roboto)"}
										fontWeight={"700"}
									>
										Senha
									</Text>
									<Input
										type="password"
										width={"100%"}
										placeholder="Digite sua senha"
										fontFamily={"var(--font-roboto)"}
										backgroundColor={"#1A191B"}
										borderColor={"#3C393F"}
										color={"#FFF"}
										_placeholder={{ color: "#6F6D78" }}
										{...register("password", {
											required: "Senha é obrigatória"
										})}
									/>
									{errors.password && (
										<Text
											fontSize="0.75rem"
											color="red.300"
											backgroundColor={"unset"}
										>
											{errors.password.message}
										</Text>
									)}
								</Flex>
								<Flex
									backgroundColor={"unset"}
									padding={"1rem 1rem 0rem 1rem"}
									alignItems={"center"}
									justifyContent={"space-between"}
								>
									<Link href={"/login"} backgroundColor={"unset"}>
										<Text
											backgroundColor={"unset"}
											width={"100%"}
											fontFamily={"var(--font-roboto)"}
											color={"#8E4EC6"}
										>
											Esqueci minha senha
										</Text>
									</Link>

									<Button
										backgroundColor={"#8E4EC6"}
										borderRadius={"2px"}
										width={{ base: "5rem" }}
										type="submit"
										isLoading={isSubmitting}
									>
										<Text
											fontFamily={"var(--font-roboto)"}
											fontWeight={"400"}
											backgroundColor={"#8E4EC6"}
											color={"#FFF"}
										>
											Entrar
										</Text>
									</Button>
								</Flex>
							</Flex>
						</form>
					</Center>
				</Flex>
				<Flex borderColor={"#F1E6FD30 !important"} borderTop={"1px"}>
					<Center width={"100%"}>
						<Text textAlign={"center"} padding={"20px"}>
							<Highlight
								query={["Cubos", "Movies"]}
								styles={{
									fontFamily: "var(--font-montserrat)",
									color: "#B5B2BC",
									fontWeight: "600"
								}}
							>
								2025 © Todos os direitos reservados a Cubos Movies
							</Highlight>
						</Text>
					</Center>
				</Flex>
			</Flex>
		</>
	);
};

export default Login;
