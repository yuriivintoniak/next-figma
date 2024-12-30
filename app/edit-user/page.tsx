import UserSelector from "@/components/UserSelector/UserSelector";
import EditUserForm from "@/components/EditUserForm/EditUserForm";

export default function EditUser() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="border-2 border-solid border-gray-300">
        <h1 className="text-xl font-medium text-center my-16 uppercase">
          Edit User
        </h1>
        <UserSelector />
        <EditUserForm />
      </div>
    </div>
  );
}
