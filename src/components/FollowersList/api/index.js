import axios from "axios"

export const callApi = async () => {
	try {
		const res = await axios.get("https://randomuser.me/api/?results=5");

		return res.results
	} catch (err) {
		throw new Error("call api fail");
	}
}