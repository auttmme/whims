import axios from "axios";
import { EventProps } from "../Types/Event";

export const getEventDetail = async (id: number) => {
	try {
		const res = await axios.get<EventProps>(
			`https://6640fdb6a7500fcf1a9f437c.mockapi.io/api/v1/events/${id}`
		);
		return res.data;
	} catch (err) {
		throw new Error(err as string);
	}
};
