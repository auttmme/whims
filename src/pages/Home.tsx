import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
	const navigate = useNavigate();

	useEffect(() => {
		navigate("/schedule");
	}, [navigate]);

	return <div>Home Page</div>;
}

export default Home;
