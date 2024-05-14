import { useQuery } from "@tanstack/react-query";
import { getEvents } from "../Api/getEvents";
import { useState } from "react";
import {
	Box,
	Button,
	Flex,
	Spinner,
	Stack,
	Text,
	Heading,
	Input,
	Card,
} from "@chakra-ui/react";
import EventCard from "../Components/Events/EventCard";
import { Divider } from "@chakra-ui/react";

import Navbar from "../Components/Layout/Navbar";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

function Schedules() {
	const [page, setPage] = useState(1);

	const { data, isLoading } = useQuery({
		queryKey: ["GetEvents", page, 5],
		queryFn: () => getEvents(page, 5),
	});

	const handlePrev = () => {
		if (page > 1) {
			setPage((prevPage) => prevPage - 1);
		}
	};

	const handleNext = () => {
		if (page < 5) {
			setPage((prevPage) => prevPage + 1);
		}
	};

	return (
		<Stack gap={0}>
			<Box
				background="url('/bg_schedule_header.png')"
				objectFit={"cover"}
				width="100%"
				height={{ base: "200px", md: "300px", xl: "663px" }}
			>
				<Navbar />
				<Stack mt="143px" ml="350px" mb="336px" color="white">
					<Heading>Schedule Page</Heading>
					<Box borderLeft={"1px solid #F84A43"} pl={2} fontWeight={"600"}>
						A comprehensive overview of all the upcoming events
					</Box>
				</Stack>
			</Box>
			<Flex
				justifyContent={"center"}
				alignItems={"center"}
				background="url('/bg_schedule_body.png')"
				backgroundRepeat={"no-repeat"}
			>
				{isLoading ? (
					<Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"}>
						<Spinner
							thickness="4px"
							speed="0.65s"
							emptyColor="gray.200"
							color="blue.500"
							size="xl"
						/>
					</Flex>
				) : (
					<Card
						variant={"elevated"}
						maxW={"1143px"}
						w={"1143px"}
						rounded={"xl"}
						boxShadow={"xl"}
						my={8}
					>
						<Stack>
							<Flex
								bgColor={"#2E2E2E"}
								color={"white"}
								p={8}
								alignItems="center"
								gap={6}
							>
								<Text>Search Your Event: </Text>
								<Input
									variant="filled"
									bgColor={"white"}
									w={"30%"}
									rounded={"28px"}
									placeholder="Please Type Event Name"
									_placeholder={{
										color: "#b3b3b3",
									}}
								/>
								<Button
									bgGradient="linear(to-l, #7D7D7D, #2F2E2E)"
									color={"white"}
									borderRadius={"32px"}
									px={6}
									py={6}
								>
									Search
								</Button>
							</Flex>
							<Flex
								direction={"column"}
								alignItems="center"
								justifyContent={"center"}
								gap={8}
								mt={4}
							>
								{data?.map((item) => (
									<Stack key={item.id}>
										<EventCard
											id={item.id}
											eventDescription={item.eventDescription}
											eventName={item.eventName}
											eventBannerImageUrl={item.eventBannerImageUrl}
											eventCity={item.eventCity}
											eventCountry={item.eventCountry}
											eventDate={item.eventDate}
											key={item.id}
										/>
										<Divider />
									</Stack>
								))}
							</Flex>
							<Flex justifyContent={"center"} gap={10} mb={4}>
								<Button
									onClick={() => handlePrev()}
									isDisabled={page === 1}
									color={"white"}
									borderRadius={"32px"}
									bgGradient="linear(to-l, #FF7848, #F94B44)"
									_hover={{
										bgGradient: "linear(to-l, #FF7848, #F94B44)",
										color: "white",
									}}
								>
									<ChevronLeftIcon w={8} h={8} />
								</Button>
								<Button
									onClick={() => handleNext()}
									isDisabled={page === 5}
									color={"white"}
									borderRadius={"32px"}
									bgGradient="linear(to-l, #FF7848, #F94B44)"
									_hover={{
										bgGradient: "linear(to-l, #FF7848, #F94B44)",
										color: "white",
									}}
								>
									<ChevronRightIcon w={8} h={8} />
								</Button>
							</Flex>
						</Stack>
					</Card>
				)}
			</Flex>
		</Stack>
	);
}

export default Schedules;
