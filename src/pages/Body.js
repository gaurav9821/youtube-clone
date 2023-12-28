import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";

const Body = () => {
  return (
    <div className="w-[100%] box-border flex relative ">
      <SideBar />
      {/* <MainVideoContainer />
      <VideoPage /> */}
      <Outlet />
    </div>
  );
};
export default Body;
