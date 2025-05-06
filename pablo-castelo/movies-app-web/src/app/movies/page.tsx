"use client";

import api from "@/api";
import Header from "@/components/Header";
import RouteGuard from "@/components/RouteGuard";
import SearchIcon from "@/components/SearchIcon";
import {
	Button,
	Center,
	Flex,
	Input,
	InputGroup,
	InputRightElement,
	Text,
	Highlight,
	Wrap,
	Card,
	WrapItem,
	Grid,
	GridItem,
	useDisclosure,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	useToast
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

interface MoviesProps {}

interface CreateMovieFormData {
	title: string;
	originalTitle: string;
	releaseDate: string;
	duration: number;
	description: string;
	budget: number;
	imageUrl?: string;
}

const Movies: React.FC<MoviesProps> = () => {
	const [movies, setMovies] = useState<any[]>([]);
	const { isOpen, onOpen, onClose } = useDisclosure();
	const toast = useToast();
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset
	} = useForm<CreateMovieFormData>();

	useEffect(() => {
		const getMovies = async () => {
			const token = localStorage.getItem("token");
			try {
				const response = await api.get("/movies", {
					headers: { Authorization: `Bearer ${token}` }
				});
				console.log("response", response.data);
				setMovies(response.data);
			} catch (err) {
				console.log("Erro ao buscar filmes");
			}
		};

		getMovies();
	}, []);

	useEffect(() => {
		const getMovies = async () => {
			const token = localStorage.getItem("token");
			try {
				const response = await api.get("/movies", {
					headers: { Authorization: `Bearer ${token}` }
				});
				console.log("response", response.data);
				setMovies(response.data);
			} catch (err) {
				console.log("Erro ao buscar filmes");
			}
		};

		getMovies();
	}, [isOpen]);

	const onSubmit = async (data: CreateMovieFormData) => {
		const token = localStorage.getItem("token");
		try {
			await api.post(
				"/movies",
				{
					title: data.title,
					originalTitle: data.originalTitle,
					releaseDate: data.releaseDate,
					description: data.description,
					duration: data.duration,
					budget: data.budget,
					imageUrl: data?.imageUrl
				},
				{
					headers: {
						Authorization: `Bearer ${token}`
					}
				}
			);

			toast({
				title: "Filme criado com sucesso!",
				status: "success",
				duration: 3000,
				isClosable: true
			});

			reset();
			onClose();
		} catch (error) {
			toast({
				title: "Erro ao criar filme.",
				status: "error",
				duration: 3000,
				isClosable: true
			});
		}
	};
	return (
		<>
			<RouteGuard>
				<Flex minHeight={"100vh"} width={"100%"} flexDirection={"column"}>
					<Header modality="logout" />
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
						<Flex
							backgroundColor={"unset"}
							zIndex={2}
							width={"100%"}
							padding={"1rem"}
							flexDirection={"column"}
						>
							<Flex
								backgroundColor={"unset"}
								flexDirection={"column"}
								gap={"0.625rem"}
								paddingBottom={"1rem"}
								maxWidth={"30rem"}
								alignSelf={"center"}
								width={"100%"}
							>
								<InputGroup backgroundColor={"unset"}>
									<Input
										width={"100%"}
										placeholder="Pesquise por filmes"
										fontFamily={"var(--font-roboto)"}
										fontWeight={"700"}
										backgroundColor={"#1A191B"}
										borderColor={"#3C393F"}
										color={"#FFF"}
										_placeholder={{ color: "#6F6D78" }}
									/>
									<InputRightElement backgroundColor={"unset"}>
										<SearchIcon />
									</InputRightElement>
								</InputGroup>

								<Flex backgroundColor={"unset"} width={"100%"} gap={"3px"}>
									<Button
										backgroundColor={"#B744F714"}
										borderRadius={"2px"}
										width={{ base: "5.625rem" }}
										blur={"none"}
										disabled
									>
										<Text
											fontFamily={"var(--font-roboto)"}
											fontWeight={"400"}
											backgroundColor={"#B744F714"}
											color={"#F1DDFFFA"}
										>
											Filtros
										</Text>
									</Button>

									<Button
										backgroundColor={"#8E4EC6"}
										borderRadius={"2px"}
										width={"100%"}
										onClick={() => {
											onOpen();
										}}
									>
										<Text
											fontFamily={"var(--font-roboto)"}
											fontWeight={"400"}
											backgroundColor={"#B744F714"}
											color={"#FFF"}
										>
											Adicionar Filme
										</Text>
									</Button>
								</Flex>
							</Flex>

							<Flex
								backgroundColor={"unset"}
								flexDirection={"column"}
								alignItems={"center"}
								justifyContent={"center"}
							>
								<Grid
									templateColumns={{
										base: "repeat(1, 1fr)",
										sm: "repeat(2, 1fr)",
										md: "repeat(3, 1fr)",
										lg: "repeat(4, 1fr)",
										xl: "repeat(5, 1fr)"
									}}
									gap={"1rem"}
									backgroundColor={"unset"}
								>
									{movies.map((movie, index) => (
										<GridItem key={index}>
											<Card
												width={"185px"}
												height={"280px"}
												backgroundImage={
													movie?.imageUrl ? movie.imageUrl : "spider.png"
												}
												backgroundSize={"cover"}
												padding={"1rem"}
												justifyContent={"flex-end"}
												_before={{
													content: '""',
													position: "absolute",
													top: 0,
													left: 0,
													width: "100%",
													height: "100%",
													bgGradient:
														"linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(18, 17, 19, 0.3) 60%, rgba(0, 0, 0, 0.9) 100%)",
													zIndex: 1
												}}
											>
												<Text
													backgroundColor={"unset"}
													fontFamily={"var(--font-montserrat)"}
													fontWeight={"700"}
													fontSize={"0.875rem"}
													zIndex={2}
													color={"#EEE"}
													casing={"uppercase"}
												>
													{movie.title}
												</Text>
											</Card>
										</GridItem>
									))}
								</Grid>
							</Flex>
						</Flex>
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

				<Modal isOpen={isOpen} onClose={onClose} isCentered>
					<ModalOverlay />
					<ModalContent backgroundColor={"#1A191B"}>
						<ModalHeader color={"#FFF"}>Cadastrar Filme</ModalHeader>
						<ModalCloseButton />
						<form onSubmit={handleSubmit(onSubmit)}>
							<ModalBody>
								<Flex minWidth={"100%"} flexDirection={"column"}>
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
											Título
										</Text>
										<Input
											width={"100%"}
											placeholder="Título do filme"
											fontFamily={"var(--font-roboto)"}
											backgroundColor={"#1A191B"}
											borderColor={"#3C393F"}
											color={"#FFF"}
											_placeholder={{ color: "#6F6D78" }}
											{...register("title", {
												required: "Título é obrigatório"
											})}
										/>
										{errors.title && (
											<Text
												fontSize="0.75rem"
												color="red.300"
												backgroundColor={"unset"}
											>
												{errors.title.message}
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
											Título original
										</Text>
										<Input
											width={"100%"}
											placeholder="Título original"
											fontFamily={"var(--font-roboto)"}
											backgroundColor={"#1A191B"}
											borderColor={"#3C393F"}
											color={"#FFF"}
											_placeholder={{ color: "#6F6D78" }}
											{...register("originalTitle", {
												required: "Senha é obrigatória"
											})}
										/>
										{errors.originalTitle && (
											<Text
												fontSize="0.75rem"
												color="red.300"
												backgroundColor={"unset"}
											>
												{errors.originalTitle.message}
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
											Data de lançamento
										</Text>
										<Input
											type="date"
											width={"100%"}
											fontFamily={"var(--font-roboto)"}
											backgroundColor={"#1A191B"}
											borderColor={"#3C393F"}
											color={"#FFF"}
											{...register("releaseDate", {
												required: "Data de lançamento é obrigatória"
											})}
										/>
										{errors.releaseDate && (
											<Text
												fontSize="0.75rem"
												color="red.300"
												backgroundColor={"unset"}
											>
												{errors.releaseDate.message}
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
											Duração (minutos)
										</Text>
										<Input
											type="number"
											placeholder="Ex: 120"
											fontFamily={"var(--font-roboto)"}
											backgroundColor={"#1A191B"}
											borderColor={"#3C393F"}
											color={"#FFF"}
											_placeholder={{ color: "#6F6D78" }}
											{...register("duration", {
												required: "Duração é obrigatória",
												valueAsNumber: true
											})}
										/>
										{errors.duration && (
											<Text
												fontSize="0.75rem"
												color="red.300"
												backgroundColor={"unset"}
											>
												{errors.duration.message}
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
											Descrição
										</Text>
										<Input
											as="textarea"
											placeholder="Descrição do filme"
											fontFamily={"var(--font-roboto)"}
											backgroundColor={"#1A191B"}
											borderColor={"#3C393F"}
											color={"#FFF"}
											paddingTop={"0.5rem"}
											_placeholder={{ color: "#6F6D78" }}
											rows={4}
											{...register("description", {
												required: "Descrição é obrigatória"
											})}
										/>
										{errors.description && (
											<Text
												fontSize="0.75rem"
												color="red.300"
												backgroundColor={"unset"}
											>
												{errors.description.message}
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
											Orçamento
										</Text>
										<Input
											type="number"
											placeholder="Ex: 150000000"
											fontFamily={"var(--font-roboto)"}
											backgroundColor={"#1A191B"}
											borderColor={"#3C393F"}
											color={"#FFF"}
											_placeholder={{ color: "#6F6D78" }}
											{...register("budget", {
												required: "Orçamento é obrigatório",
												valueAsNumber: true
											})}
										/>
										{errors.budget && (
											<Text
												fontSize="0.75rem"
												color="red.300"
												backgroundColor={"unset"}
											>
												{errors.budget.message}
											</Text>
										)}
									</Flex>

									<Flex
										padding={"1rem 1rem 1rem 1rem"}
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
											URL da imagem (opcional)
										</Text>
										<Input
											type="url"
											placeholder="https://..."
											fontFamily={"var(--font-roboto)"}
											backgroundColor={"#1A191B"}
											borderColor={"#3C393F"}
											color={"#FFF"}
											_placeholder={{ color: "#6F6D78" }}
											{...register("imageUrl")}
										/>
									</Flex>
								</Flex>
							</ModalBody>

							<ModalFooter>
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
										Cadastrar
									</Text>
								</Button>
							</ModalFooter>
						</form>
					</ModalContent>
				</Modal>
			</RouteGuard>
		</>
	);
};

export default Movies;
