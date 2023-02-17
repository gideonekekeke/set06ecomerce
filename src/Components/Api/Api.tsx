import axios from "axios";

const Endpoint = "http://localhost:4573";
interface UserData {
	name: string;
	email: string;
	password: string;
}

export const CreateUser = async ({ name, email, password }: UserData) => {
	return await axios
		.post(`${Endpoint}/api/register`, {
			name,
			email,
			password,
		})
		.then((res) => res.data);
};
