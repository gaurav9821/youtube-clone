import { useSelector } from "react-redux";
import appStore from "../utils/store";

const ErrorPage = () => {
  const isOpenNavBar = useSelector((appStore) => appStore.app.isOpenNavBar);

  return (
    <div>
      <h1>Error Page</h1>
    </div>
  );
};
export default ErrorPage;
