import MainVideoContainer from "../components/MainVideoContainer";
import SideBar from "../components/SideBar";

const Body = () => {
  return (
    <div className="w-[100%] box-border flex relative ">
      <SideBar />
      <MainVideoContainer />
    </div>
  );
};
export default Body;
