import { Outlet } from "react-router";
import ToffeeLogo from "../icons/ToffeeLogo";
import Sidebar from "./Sidebar";

const MainLayout = () => {
  return (
    <div className="flex min-h-screen  bg-gradient-main font-sans">
      <Sidebar />
      <main className="flex-1 ml-[57px] p-8 pl-6">
        <ToffeeLogo className={"ml-auto mb-4"} />
        <div className="max-w-[1200px] mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
