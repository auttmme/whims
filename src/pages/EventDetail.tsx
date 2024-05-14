import { useQuery } from "@tanstack/react-query";
import {
	Box,
	Button,
	Flex,
	Stack,
	Text,
	Heading,
	Image,
	Card,
	CardBody,
	Circle,
	CardFooter,
} from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";

import Navbar from "../Components/Layout/Navbar";
import { useParams } from "react-router-dom";
import { CalendarIcon } from "@chakra-ui/icons";
import { getEventDetail } from "../Api/getEventDetail";
import { createPurchase } from "../Api/createPurchase";

function EventDetail() {
	const { id } = useParams();

	const { data } = useQuery({
		queryKey: ["GetEventDetail", id],
		queryFn: () => getEventDetail(Number(id)),
	});

	// const createdDate = new Date(data?.createdAt ?? "");
	// const formattedCreateDate = createdDate.toISOString().split("T")[0];
	// const eventDate = new Date(data?.eventDate ?? "");
	// const date = eventDate.toISOString().split("T")[0];
	// const time = eventDate.toISOString().split("T")[1].split(":");
	// const formatTime = `${time[0]}:${time[1]}`;

	const handlePurchase = () => {
		createPurchase();
	};

	return (
		<Stack gap={0}>
			<Box
				background="url('/bg_event_detail_header.jpeg')"
				objectFit={"cover"}
				width="100%"
				height={{ base: "200px", md: "300px", xl: "663px" }}
			>
				<Navbar />
				<Stack mt="143px" ml="350px" mb="336px" color="white">
					<Heading>Event Detail</Heading>
					<Box borderLeft={"1px solid #F84A43"} pl={2} fontWeight={"600"}>
						A comprehensive overview of all the upcoming events
					</Box>
				</Stack>
			</Box>
			<Flex justifyContent={"center"} alignItems={"center"} my={10}>
				<Flex>
					{/* event detail content */}
					<Flex direction={"column"} gap={8}>
						<Flex alignItems={"center"} gap={2} color={"#FF7848"}>
							<CalendarIcon color={"#FF7848"} w={"15px"} h="15px" />
							<Text fontWeight={"700"}></Text>
						</Flex>
						<Heading>{data?.eventName}</Heading>
						<Image src={data?.eventBannerImageUrl} />
						<Flex gap={4}>
							<Card bgColor={"#A0A0A026"} borderRadius={"12px"} width={"225px"}>
								<CardBody>
									<Flex alignItems={"center"} gap={4}>
										<Circle bgColor={"#FF7848"} size="44px">
											<CalendarIcon color={"white"} w={"15px"} h="15px" />
										</Circle>
										<Stack gap={0}>
											<Text color={"#6B6B6B"} fontWeight={"600"}>
												Event Date
											</Text>
											<Text fontWeight={"700"}></Text>
										</Stack>
									</Flex>
								</CardBody>
							</Card>
							<Card bgColor={"#A0A0A026"} borderRadius={"12px"} width={"225px"}>
								<CardBody>
									<Flex alignItems={"center"} gap={4}>
										<Circle bgColor={"#FF7848"} size="44px">
											<CalendarIcon color={"white"} w={"15px"} h="15px" />
										</Circle>
										<Stack gap={0}>
											<Text color={"#6B6B6B"} fontWeight={"600"}>
												Event Time
											</Text>
											<Text fontWeight={"700"}></Text>
										</Stack>
									</Flex>
								</CardBody>
							</Card>
							<Card bgColor={"#A0A0A026"} borderRadius={"12px"} width={"225px"}>
								<CardBody>
									<Flex alignItems={"center"} gap={4}>
										<Circle bgColor={"#FF7848"} size="44px">
											<CalendarIcon color={"white"} w={"15px"} h="15px" />
										</Circle>
										<Stack gap={0}>
											<Text color={"#6B6B6B"} fontWeight={"600"}>
												Event Location
											</Text>
											<Text fontWeight={"700"}>{data?.evenLocationLabel}</Text>
										</Stack>
									</Flex>
								</CardBody>
							</Card>
						</Flex>
						<Text fontWeight={"600"} color={"#8A8A8A"}>
							{data?.eventDescription}
						</Text>
						<Stack gap={0}>
							<Heading>Register Now</Heading>
							<Image src="/wave.svg" width={"10%"} />
						</Stack>
						<Card bgColor={"#D9D9D94D"}>
							<CardBody>
								{data?.eventPackage.map((item, index) => (
									<Stack key={index} gap={2}>
										<Text fontWeight={"700"}>{item}</Text>
										<Divider />
									</Stack>
								))}
							</CardBody>
							<CardFooter>
								<Flex
									w="100%"
									justifyContent={"space-between"}
									alignItems={"center"}
								>
									<Text fontWeight={"700"}>TOTAL PRRICE: </Text>
									<Button
										bgGradient="linear(to-l, #7D7D7D, #2F2E2E)"
										color={"white"}
										borderRadius={"32px"}
										px={6}
										py={6}
										onClick={() => handlePurchase()}
									>
										Order Now
									</Button>
								</Flex>
							</CardFooter>
						</Card>
					</Flex>
					{/* sidebarr */}
					<Stack></Stack>
				</Flex>
			</Flex>
		</Stack>
	);
}

export default EventDetail;
