import { Outlet } from "react-router";
import NavBar from "@/components/NavBar";
const PublicLayout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};
export default PublicLayout;
