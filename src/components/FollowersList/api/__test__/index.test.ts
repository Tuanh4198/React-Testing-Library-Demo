import axios from 'axios'
import {callApi} from ".."

const data = {
	results: [
		{
			"gender": "female",
			"name": {
				"title": "Ms",
				"first": "Vivian",
				"last": "Ekeli"
			},
			"location": {
				"street": {
					"number": 1666,
					"name": "Ris Skolevei"
				},
				"city": "Kvalsund",
				"state": "Hordaland",
				"country": "Norway",
				"postcode": "6639",
				"coordinates": {
					"latitude": "42.9433",
					"longitude": "4.4094"
				},
				"timezone": {
					"offset": "+4:30",
					"description": "Kabul"
				}
			},
			"email": "vivian.ekeli@example.com",
			"login": {
				"uuid": "f2ba2b65-9320-4435-a003-59fe3f98072f",
				"username": "browngoose610",
				"password": "141414",
				"salt": "ojarov4b",
				"md5": "9cb034df07199761f3361aceac45c0b6",
				"sha1": "84b6db2b85f164b1d256ae0c5b46250f5e9829dd",
				"sha256": "5e1ffb1e23ef0f79c89897c8a0dcb31a7914b58afb50e9feecb838d0294145d4"
			},
			"dob": {
				"date": "1998-10-12T14:26:01.833Z",
				"age": 23
			},
			"registered": {
				"date": "2020-06-18T00:38:48.842Z",
				"age": 2
			},
			"phone": "86504190",
			"cell": "41949469",
			"id": {
				"name": "FN",
				"value": "12109844495"
			},
			"picture": {
				"large": "https://randomuser.me/api/portraits/women/23.jpg",
				"medium": "https://randomuser.me/api/portraits/med/women/23.jpg",
				"thumbnail": "https://randomuser.me/api/portraits/thumb/women/23.jpg"
			},
			"nat": "NO"
		}
	]
};

jest.mock('axios');

describe('Test Apis', () => {
		const url = "https://randomuser.me/api/?results=5";

		beforeEach(() => {
			(axios.get as jest.Mock).mockResolvedValue(data);
		});

		it('should call axios get with given url', () => {
			callApi();
			expect(axios.get).toBeCalledWith(url);
		});
});
