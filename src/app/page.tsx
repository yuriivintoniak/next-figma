import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditUser from "@/components/EditUser/EditUser";
import Users from "@/components/Users/Users";

const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/edit-user" element={<EditUser />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
