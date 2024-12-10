import Users from "@/components/Users/Users";
import { User } from "../../../types";
import usersData from "../../../data/users.json";

const Page = () => {
  const users: User[] = usersData;

  return <Users users={users} />;
};

export default Page;
