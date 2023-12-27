import { useDispatch, useSelector } from "react-redux";
import SideBar from "../components/SideBar";
import { useEffect } from "react";
import { closeNavBar, openNavBar } from "../utils/appSlice";

const VideoPage = () => {
  const isNavBarOpen = useSelector((store) => store.app.isNavBarOpen);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeNavBar());
    return () => {
      dispatch(openNavBar());
    };
  }, []);

  console.log(isNavBarOpen);
  console.log(backDropState);
  return (
    <>
      {isNavBarOpen && (
        <section className="absolute left-0">
          <SideBar />
        </section>
      )}
      <h1>Video Page</h1>
    </>
  );
};
export default VideoPage;
