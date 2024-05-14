import {
	Card,
	CardBody,
	Heading,
	Image,
	Text,
	Flex,
	Stack,
} from "@chakra-ui/react";
import { EventCardProps } from "../../Types/Event";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faClock,
	faLocationDot,
	faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";

function EventCard(props: EventCardProps) {
	const navigate = useNavigate();

	const eventDate = new Date(props.eventDate);
	const date = eventDate.toISOString().split("T")[0];
	const time = eventDate.toISOString().split("T")[1].split(":");
	const formatTime = `${time[0]}:${time[1]}`;

	return (
		<Card
			direction={{ base: "column", sm: "row" }}
			variant="elevated"
			maxW={{ base: "300px", md: "500px", xl: "700px" }}
			minW={"700px"}
			maxH={{ base: "100%", lg: "125px" }}
			boxShadow={"lg"}
			overflow={"hidden"}
			onClick={() => navigate(`/event-detail/${props.id}`)}
			cursor="pointer"
		>
			<Image
				objectFit="cover"
				maxW={{ base: "300px", xl: "700px" }}
				maxH={{ base: "100%", lg: "125px" }}
				src={props.eventBannerImageUrl}
				alt="Caffe Latte"
			/>

			<CardBody>
				<Stack gap={2}>
					<Heading size="md">{props.eventName}</Heading>
					<Flex gap={4}>
						<Flex gap={2} alignItems={"center"}>
							<FontAwesomeIcon icon={faCalendarDays} color="#F84A43" />
							<Text>{date}</Text>
						</Flex>
						<Flex gap={2} alignItems={"center"}>
							<FontAwesomeIcon icon={faClock} color="#F84A43" />
							<Text>{formatTime}</Text>
						</Flex>
						<Flex gap={2} alignItems={"center"}>
							<FontAwesomeIcon icon={faLocationDot} color="#F84A43" />
							<Text>{props.eventCity}, </Text>
							<Text>{props.eventCountry}</Text>
						</Flex>
					</Flex>
					<Text noOfLines={2} whiteSpace={"wrap"}>
						{props.eventDescription}
					</Text>
				</Stack>
			</CardBody>
		</Card>
	);
}

export default EventCard;
