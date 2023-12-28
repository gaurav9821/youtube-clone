import "./App.css";
import Header from "./components/Header";
import Body from "./pages/Body";
import { Provider } from "react-redux";
import appStore from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      // {
      //   path: "/",
      //   element: <MainVideoContainer />,
      // },
      // {
      //   path: "watch",
      //   element: <VideoPage />,
      // },
    ],
    errorElement: <ErrorPage />,
  },
]);
function App() {
  return (
    <Provider store={appStore}>
      <div>
        <Header />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
