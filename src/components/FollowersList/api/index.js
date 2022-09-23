import axios from "axios"

export const callApi = () => {
	try {
		const res = axios.get("https://randomuser.me/api/?results=5");

		return res.results
	} catch (err) {
		throw new Error("call api fail");
	}
}