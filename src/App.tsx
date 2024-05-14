import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Schedules from "./pages/Schedule";
import Layout from "./Components/Layout/Layout";
import EventDetail from "./pages/EventDetail";

function App() {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<Layout>
				<Router>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/schedule" element={<Schedules />} />
						<Route path="/event-detail/:id" element={<EventDetail />} />
					</Routes>
				</Router>
			</Layout>
		</QueryClientProvider>
	);
}

export default App;
