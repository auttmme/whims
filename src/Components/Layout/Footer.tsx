import { Box } from "@chakra-ui/react";

function Footer() {
	return (
		<Box
			position="relative"
			background="url('/footer_bg.jpeg')"
			backgroundPosition="center"
			backgroundRepeat="no-repeat"
			backgroundSize="cover"
			height={{ base: "200px", md: "300px", xl: "500px" }}
			_before={{
				content: '""',
				position: "absolute",
				top: 0,
				left: 0,
				width: "100%",
				height: "100%",
				background:
					"linear-gradient(270deg, rgba(255, 0, 0, 0.4) 0%, rgba(143, 0, 255, 0.4) 100%)",
				zIndex: 1,
			}}
		>
			<Box position="relative" zIndex={2} />
		</Box>
	);
}

export default Footer;
