import {
  HomeSVG,
  SubsSVG,
  HistorySVG,
  WatchLaterSVG,
  LikeButtonSVG,
  TrendingButtonSVG,
  GamingButtonSVG,
  MoviesButtonSVG,
  NewsButtonSVG,
  LearningButtonSVG,
  MusicButtonSVG,
  ShortsSVG,
  LiveSVG,
  LinkedinSVG,
  GitHubSVG,
  TwitterSVG,
  PortSVG,
} from "../utils/images";
import { useSelector } from "react-redux";
import appStore from "../utils/store";

const SideBar = () => {
  const isNavBarOpen = useSelector((appStore) => appStore.app.isNavBarOpen);

  const mainTags = [
    [<HomeSVG />, "Home"],
    [<LikeButtonSVG />, "Liked Videos"],
    [<HistorySVG />, "History"],
    [<WatchLaterSVG />, "Watch later"],
    [<SubsSVG />, "Subscription"],
    [<ShortsSVG />, "Shorts"],
  ];
  const exploreTags = [
    [<TrendingButtonSVG />, "Trending"],
    [<GamingButtonSVG />, "Gaming"],
    [<MoviesButtonSVG />, "Movies"],
    [<NewsButtonSVG />, "News"],
    [<LearningButtonSVG />, "Learning"],
    [<MusicButtonSVG />, "Music"],
    [<LiveSVG />, "Live"],
  ];
  const sub = [
    {
      src: "https://yt3.googleusercontent.com/ytc/AOPolaSj48pypV9ilqNUztYjQ8Q760NYCAw3w1LwoWbJYQ=s176-c-k-c0x00ffffff-no-rj",
      profileId: "UC3N9i_KvKZYP4F84FPIzgPQ",
      fullname: "Akshay Saini",
    },
    {
      src: "https://yt3.googleusercontent.com/X9eoDIB9cgb1s-kvATRs1lQDcU4Fjc15NDV9s9FF8ck7IsA8u7OdijaernoDV9LLdePgjlt_=s176-c-k-c0x00ffffff-no-rj",
      profileId: "UCRzYN32xtBf3Yxsx5BvJWJw",
      fullname: "Warikoo",
    },
    {
      src: "https://yt3.googleusercontent.com/G42b4i9auAhu-cy3wi9IhLxmkfl2i_iokiVgHx32xsZ8I4ok6uzamWXUj16xzJmAGoq8fRfS1Q=s176-c-k-c0x00ffffff-no-rj",
      profileId: "UCIPZVAwDGa-A4ZJxCBvXRuQ",
      fullname: "RoadsideCoder",
    },
  ];
  const moreFromYoutube = [
    {
      src: "https://res.cloudinary.com/yuvraj1905/image/upload/v1691578133/ytstudio_hgy0u6.jpg",
      url: "https://studio.youtube.com",
      fullname: "Youtube Studio",
    },
    {
      src: "https://res.cloudinary.com/yuvraj1905/image/upload/v1691577937/youtubemusic-1324440259684990025_yzshal.png",
      url: "https://music.youtube.com",
      fullname: "Youtube Music",
    },
    {
      src: "https://res.cloudinary.com/yuvraj1905/image/upload/v1691579062/ytkids_bepkge.jpg",
      url: "https://youtubekids.com",
      fullname: "Youtube Kids",
    },
  ];

  return isNavBarOpen ? (
    <div className="w-[15%] px-2 py-2 min-h-[92vh] max-h-[92vh] z-50 fixed flex items-center flex-col overflow-auto scrollBar pt-0 shadow-xl">
      <>
        <ul className="relative w-[100%] py-2 border-b  ">
          {mainTags.map((tag) => (
            <a
              className="hover:bg-gray-200 flex px-4 py-2 w-[100%] font-semibold mb-1 rounded-md  gap-6 items-center"
              key={tag[1]}
              to={
                tag[1] === "Home"
                  ? "/"
                  : `/${tag[1].replaceAll(" ", "").toLowerCase()}`
              }
            >
              {tag[0]}
              <p className="">{tag[1]}</p>
            </a>
          ))}
        </ul>
      </>
      <h1 className="px-4 py-2 mt-2 font-bold self-start">Explore</h1>
      <>
        <ul className="relative w-[100%] pb-2 border-b ">
          {exploreTags.map((tag) => (
            <a
              className="hover:bg-gray-200  flex px-4 py-2 w-[100%] font-semibold mb-1 rounded-md  gap-6 items-center"
              key={tag[1]}
              to={`/explore?sq=${tag[1]}`}
            >
              {tag[0]}
              <p className="">{tag[1]}</p>
            </a>
          ))}
        </ul>
      </>
      <h1 className="px-4 py-2 mt-2 font-bold self-start">Subscriptions</h1>
      <>
        <ul className="relative w-[100%] pb-2 border-b ">
          {sub.map((obj) => {
            const { src, profileId, fullname } = obj;
            return (
              <a
                className="hover:bg-gray-200 flex px-4 py-2 w-[95%] font-semibold  rounded-md relative gap-5 items-center"
                key={profileId}
                to={`/profile?cId=${profileId}`}
              >
                <img
                  src={src}
                  alt=""
                  className="object-contain rounded-full h-[1.5rem]"
                />
                <p className=""> {fullname}</p>
              </a>
            );
          })}
        </ul>
      </>
      <h1 className="px-4 py-2 mt-2 font-bold self-start">More From Youtube</h1>
      <>
        <ul className="relative w-[100%] pb-2 border-solid border-b">
          {moreFromYoutube.map((obj) => {
            const { src, url, fullname } = obj;

            return (
              <a
                className="hover:bg-gray-200 flex px-4 py-2 w-[95%] font-semiboldbold  rounded-md relative gap-5 items-center"
                key={url}
                to={url}
                target="_blank"
              >
                <img
                  src={src}
                  alt=""
                  className="object-contain rounded-full h-[1.5rem]"
                />
                <p className=" "> {fullname}</p>
              </a>
            );
          })}
        </ul>
        <section className="flex mt-4 justify-between mb-2 gap-4 self-start px-4">
          <a to="" target="_blank">
            <LinkedinSVG />
          </a>
          <a to="" target="_blank">
            <TwitterSVG />
          </a>
          <a to="" target="_blank">
            <GitHubSVG />
          </a>
          <a to="" target="_blank">
            <PortSVG />
          </a>
        </section>
        <small className="px-4 py-1 self-start text-stone-400">
          Note: This app is still under development. Please let me know if you
          find bugs out here.{" "}
        </small>
        <small className="px-4 py-1 self-start">© Gaurav Chachada </small>
      </>
    </div>
  ) : (
    <div className="w-[7%] pl-5 py-2 min-h-[92vh] max-h-[92vh] fixed flex items-center flex-col overflow-auto scrollBar gap-4  ">
      {mainTags.map((tag) => (
        <a
          to={
            tag[1] === "Home"
              ? "/"
              : `/${tag[1].replaceAll(" ", "").toLowerCase()}`
          }
          className="hover:font-bold flex flex-col py-2 font-semibold w-full gap-1 hover:bg-gray-200 hover:rounded-[10px] outline-0 hover:px-[4px] hover:pt-[16px] hover:pb-[14px]"
        >
          <span className="self-start">{tag[0]}</span>
          <small className="self-start">{tag[1]}</small>
        </a>
      ))}
    </div>
  );
};

export default SideBar;
