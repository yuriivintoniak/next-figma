import { User } from "@/interfaces/user.intarface";
import axios from "axios";

const API_URL = "http://localhost:5000/api/users";

export const UserService = {
  async getUsers() {
    const { data } = await axios.get<User[]>(API_URL);
    return data;
  }
};
