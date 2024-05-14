import { Card, CardBody, Heading, Image, Text, Flex } from "@chakra-ui/react";
import { EventCardProps } from "../../Types/Event";

function EventCard(props: EventCardProps) {
	return (
		<Card
			direction={{ base: "column", sm: "row" }}
			variant="elevated"
			maxH={"125px"}
			maxW={"700px"}
			boxShadow={"lg"}
			overflow={"hidden"}
		>
			<Image
				objectFit="cover"
				maxW={"500px"}
				maxH={"125px"}
				src={props.eventBannerImageUrl}
				alt="Caffe Latte"
			/>

			<CardBody>
				<Heading size="md">{props.eventName}</Heading>
				<Flex>
					<Text>date</Text>
				</Flex>
				<Text py="2" noOfLines={2} whiteSpace={"wrap"}>
					{props.eventDescription}
				</Text>
			</CardBody>
		</Card>
	);
}

export default EventCard;
