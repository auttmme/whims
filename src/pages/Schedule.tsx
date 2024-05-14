import { useQuery } from "@tanstack/react-query";
import { getEvents } from "../Api/getEvents";
import { useState } from "react";
import { Box, Button, Flex, Spinner, Stack } from "@chakra-ui/react";
import EventCard from "../Components/Events/EventCard";
import { useNavigate } from "react-router-dom";

function Schedules() {
	const navigate = useNavigate();
	const [limit, setLimit] = useState(5);

	const handleLimit = () => {
		setLimit((prevLimit) => prevLimit + 5);
	};

	const { data, isFetching } = useQuery({
		queryKey: ["GetEvents", 1, limit],
		queryFn: () => getEvents(1, limit),
	});

	console.log("data", data);

	return (
		<Stack gap={0}>
			<Box
				background="url('/public/bg_schedule_header.png')"
				objectFit={"cover"}
				width="100%"
				height={{ base: "200px", md: "300px", xl: "500px" }}
			>
				HEADER
			</Box>
			<Flex
				justifyContent={"center"}
				alignItems={"center"}
				background="url('/public/bg_schedule_body.png')"
				backgroundRepeat={"no-repeat"}
				py={10}
			>
				<Box>
					{data?.map((item) => (
						<Box
							mb={8}
							onClick={() => navigate(`/event-detail/${item.id}`)}
							cursor={"pointer"}
						>
							<EventCard
								eventDescription={item.eventDescription}
								eventName={item.eventName}
								eventBannerImageUrl={item.eventBannerImageUrl}
								eventCity={item.eventCity}
								eventCountry={item.eventCountry}
								eventDate={item.eventDate}
								key={item.id}
							/>
						</Box>
					))}
					<Button
						onClick={() => handleLimit()}
						isDisabled={limit === 50}
						color={"white"}
						borderRadius={"32px"}
						w={{ base: "300px", md: "500px", xl: "700px" }}
						py="7"
						bgGradient="linear(to-l, #FF7848, #F94B44)"
						_hover={{
							bgGradient: "linear(to-l, #FF7848, #F94B44)",
							color: "white",
						}}
					>
						{isFetching ? <Spinner /> : "VIEW MORE"}
					</Button>
				</Box>
			</Flex>
		</Stack>
	);
}

export default Schedules;
