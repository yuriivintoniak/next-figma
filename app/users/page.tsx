import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getQueryClient } from "../get-query-client";
import { getAllUsers, GET_ALL_USERS } from "@/services/user";
import UsersTable from "@/components/users/UsersTable/UsersTable";

import users from "@/data/users.json";
import { IUser } from "@/interfaces/user.interface";

export default async function UsersPage() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: [GET_ALL_USERS],
    queryFn: () => getAllUsers(),
  });

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="p-10 border border-gray-500 w-[1200px] h-[700px]">
        <h1 className="text-xl font-medium text-center uppercase tracking-widest">
          Users
        </h1>
        <HydrationBoundary state={dehydrate(queryClient)}>    
          <UsersTable data={users as IUser[]} />
        </HydrationBoundary>
      </div>
    </div>
  );
}
