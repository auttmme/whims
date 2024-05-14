import {
	Flex,
	IconButton,
	Image,
	Text,
	Button,
	Heading,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { SearchIcon } from "@chakra-ui/icons";

function Navbar() {
	return (
		<>
			<Flex
				justifyContent={{ base: "flex-start", xl: "space-around" }}
				alignItems="center"
				bgColor={"transparent"}
				py={{ base: 4, xl: 10 }}
			>
				<Flex gap={4} alignItems={"center"}>
					<FontAwesomeIcon
						icon={faBars}
						color="white"
						width="60px"
						style={{ width: "60px", height: "42px" }}
					/>
					<Image src="/whimsy_logo_img.png" width="56px" height="65px" />
					<Heading color={"white"}>Whimsy</Heading>
				</Flex>
				<Flex
					color={"white"}
					gap={8}
					fontWeight={"600"}
					fontSize={"2xl"}
					display={{ base: "none", xl: "flex" }}
				>
					<Text>Home</Text>
					<Text>About</Text>
					<Text color="#F84A43" decoration={"underline"}>
						Schedule
					</Text>
					<Text>Speakers</Text>
					<Text>Ticket</Text>
					<Text>Contact us</Text>
				</Flex>
				<Flex
					alignItems={"center"}
					gap={8}
					display={{ base: "none", xl: "flex" }}
				>
					<IconButton
						isRound
						variant={"solid"}
						bgColor={"white"}
						aria-label="search"
						fontSize="24px"
						icon={<SearchIcon />}
					/>
					<Button
						color={"white"}
						borderRadius={"32px"}
						px={8}
						py={6}
						bgGradient="linear(to-l, #FF7848, #F94B44)"
						_hover={{
							bgGradient: "linear(to-l, #FF7848, #F94B44)",
							color: "white",
						}}
					>
						Book Ticket
					</Button>
				</Flex>
			</Flex>
		</>
	);
}

export default Navbar;
