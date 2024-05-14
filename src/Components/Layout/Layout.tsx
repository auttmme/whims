import { Box, Stack } from "@chakra-ui/react";
import { ReactNode } from "react";
import Footer from "./Footer";

function Layout({ children }: { children: ReactNode }) {
	return (
		<Stack height={"100%"} gap={0}>
			<Box w="100%">{children}</Box>
			<Footer />
		</Stack>
	);
}

export default Layout;
