import axios from "axios";

export const createPurchase = async () => {
	try {
		const res = await axios.post(
			`https://6640fdb6a7500fcf1a9f437c.mockapi.io/api/v1/purchase`
		);
		return res;
	} catch (err) {
		throw new Error(err as string);
	}
};
