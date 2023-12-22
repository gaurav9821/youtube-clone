import { useSelector } from "react-redux";
import appStore from "../utils/store";
import { useState, useEffect } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { FaShare } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineDislike } from "react-icons/ai";
import toast, { Toaster } from "react-hot-toast";

import {
  DurationCalculator,
  ViewsCounter,
  TimeCounter,
} from "../utils/calculatorFunction";
import { PROFILE_PICTURE_FETCHER } from "../utils/apiCalls";
import { DotSVG, CrossSVG } from "../utils/images";

const VideoCard = ({
  info,
  searchFeedVideo = false,
  likedVideosCard = false,
  relatedCard = false,
}) => {
  const { contentDetails, snippet, statistics, id } = info;
  // console.log(snippet);
  // const watchLater = useSelector((store) => store.library.watchLater);
  // const isVideoSetToWatchLater = watchLater?.find((vid) => vid.id === id);
  const isVideoSetToWatchLater = false;
  const {
    categoryId,
    channelId,
    channelTitle,
    publishedAt,
    // thumbnails: {
    //   maxres: { url, height, width },
    // },
    tags,
    title,
    description,
  } = snippet;
  const { duration } = contentDetails;
  const [profilePicture, setProfilePicture] = useState("");
  const { commentCount, favoriteCount, likeCount, viewCount } = statistics;

  const [showOptionBtn, setShowOptionBtn] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    async function temp() {
      const profilePicture = await PROFILE_PICTURE_FETCHER(channelId);
      setProfilePicture(profilePicture);
    }
    temp();
  }, [title]);
  const isNavBarOpen = useSelector((appStore) => appStore?.app?.isNavBarOpen);
  let widthString = isNavBarOpen ? "w-[32%]" : "w-[24%] h-[38vh]";
  let heightString = searchFeedVideo ? "h-[25vh]" : "h-[46vh]";
  heightString = relatedCard ? "h-[20vh]" : heightString;

  widthString = searchFeedVideo ? "w-[90%]" : widthString;
  widthString = relatedCard ? "w-full" : widthString;

  let bottomPosString = "bottom-2";
  bottomPosString = relatedCard ? "bottom-4" : bottomPosString;
  // const navigate = useNavigate();

  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const [timer, setTimer] = useState(null);
  // const dispatch = useDispatch();

  return (
    <div
      onMouseOver={() => setShowOptionBtn(true)}
      onMouseOut={() => setShowOptionBtn(false)}
      className={`  ${widthString} ${heightString}  ${
        searchFeedVideo ? "gap-2" : "gap-0"
      } ${relatedCard && "gap-1"} relative flex ${
        !searchFeedVideo && "flex-col"
      } text-white mb-[10px] ${relatedCard && "mb-0"} `}
    >
      <section
        onMouseOver={() => {
          setTimer(
            setTimeout(() => {
              setIsPlayingVideo(true);
            }, 2000)
          );
        }}
        onMouseOut={() => {
          clearTimeout(timer);
          setIsPlayingVideo(false);
        }}
        onClick={() => {
          // dispatch(addToHistory(data));
          // navigate(`/watch?v=${id}`);
        }}
        className={` ${
          relatedCard && "flex-shrink-0 flex-grow-0 flex w-[50%]"
        } relative ${!searchFeedVideo ? "h-[55%]" : "h-[100%]"} ${
          searchFeedVideo ? "w-[52%]" : "w-[100%]"
        }`}
      >
        {!isPlayingVideo ? (
          <>
            <img
              src={
                snippet?.thumbnails?.maxres?.url
                  ? snippet?.thumbnails?.maxres?.url
                  : snippet?.thumbnails?.high?.url
              }
              alt=""
              className="cursor-pointer h-[100%] w-[100%]  object-cover rounded-[10px]"
            />
            <small
              className={`absolute right-2 ${bottomPosString} px-2 py-[2px] bg-[#000c] text-[#f1f1f1] rounded-md`}
            >
              {DurationCalculator(duration)}
            </small>
          </>
        ) : (
          <iframe
            width="100%"
            height="100%"
            title={title}
            allowFullScreen
            className="rounded-xl"
            src={"https://www.youtube.com/embed/" + id + "?autoplay=1&mute=1"}
          ></iframe>
        )}
      </section>
      <section
        className={`flex p-2 h-[35%] w-[100%] relative items-start gap-2 ${
          !searchFeedVideo ? "py-4" : "py-0"
        } border-1  ${relatedCard && "flex-shrink-0 flex-grow-0 flex w-[50%]"}`}
      >
        {!searchFeedVideo && (
          <span className="flex-shrink-0 flex-grow-0 flex w-[10%] relative h-[40%] ">
            {
              <img
                // onClick={() => navigate(`/profile?cId=${channelId}`)}
                src={profilePicture}
                className=" h-[90%] cursor-pointer rounded-full object-contain"
                alt=""
              />
            }
          </span>
        )}
        <span
          className={`w-[90%] text-[#0f0f0f] relative flex ${
            searchFeedVideo && "gap-2"
          } flex-col  ${relatedCard && "mt-2"}`}
        >
          <p
            // onClick={() => navigate(`/watch?v=${id}`)}
            className={`hover:cursor-pointer text-base line-clamp-2 font-semibold  ${
              relatedCard && "text-[0.8rem] "
            }`}
          >
            {title}
          </p>
          {!searchFeedVideo && (
            <p
              // onClick={() => navigate(`/profile?cId=${channelId}`)}
              className="text-stone-600 my-1 text-sm cursor-pointer"
            >
              {channelTitle}
            </p>
          )}
          {searchFeedVideo && (
            <span className="text-stone-900 relative text-sm flex gap-2 items-center">
              <img
                // onClick={() => {
                //   navigate(`/profile?cId=${channelId}`);
                // }}
                src={profilePicture}
                className={`w-[4%] cursor-pointer rounded-full object-contain ${
                  relatedCard && "w-5"
                }`}
                alt=""
              />
              <p
                className={`${
                  relatedCard && "text-sm"
                } cursor-pointer text-stone-600`}
                // onClick={() => navigate(`/profile?cId=${channelId}`)}
              >
                {channelTitle}
              </p>
            </span>
          )}
          <span className="text-stone-600 text-xs flex gap-2">
            <p>{ViewsCounter(viewCount)} views</p>
            <p className="before:content-['•'] before:mr-1">
              {TimeCounter(publishedAt)}
            </p>
          </span>
          {!relatedCard && searchFeedVideo && (
            <small className="line-clamp-1 text-stone-600">{description}</small>
          )}
        </span>
        <span
          className={`${searchFeedVideo ? "w-[15%]" : ""}  ${
            relatedCard && "mt-2 w-[5%]"
          }`}
        >
          {!showOptions ? (
            <CiMenuKebab
              onClick={() => setShowOptions(true)}
              style={{ visibility: !showOptionBtn ? "hidden" : "" }}
              size={relatedCard ? 20 : 25}
              className={` text-black p-[1px] py-[2px] rounded-full ${
                searchFeedVideo && "mt-1 justify-end"
              } cursor-pointer self-start`}
            />
          ) : (
            <RxCross1
              onClick={() => setShowOptions(false)}
              style={{ visibility: !showOptionBtn ? "hidden" : "" }}
              size={relatedCard ? 20 : 25}
              className={`text-black p-[1px] py-[2px] rounded-full ${
                searchFeedVideo && "mt-1 justify-end"
              } cursor-pointer self-start`}
            />
          )}
          <section
            style={{ display: !showOptions ? "none" : "" }}
            className={`w-[13vw] border-[1px] absolute right-8 top-5 text-black bg-[#ffffff] ${
              searchFeedVideo && !relatedCard && "top-1 right-28"
            } ${
              searchFeedVideo && isNavBarOpen && "top-1 right-32"
            } py-[8px] px-[2px] shadow-[0px_4px_32px_0px_rgba(0, 0, 0, 0.1)] rounded-[12px] top-[30px]`}
          >
            {likedVideosCard && (
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  // dispatch(removeFromLikedVideos(id));
                }}
                className="flex py-[10px] rounded-md px-2 hover:bg-[#0000002e] hover:cursor-pointer items-center  gap-2 z-10"
              >
                <AiOutlineDislike size={18} />
                <p className="m-0">Dislike Video</p>
              </span>
            )}
            <span
              onClick={(e) => {
                e.stopPropagation();
                // !isVideoSetToWatchLater
                //   ? dispatch(addToWatchLaterVideos(data))
                //   : dispatch(removeFromWatchLaterVideos(id));
                setShowOptions(false);
              }}
              className="flex py-[10px] rounded-md px-2 hover:bg-[#0000002e] hover:cursor-pointer items-center  gap-2 z-10"
            >
              <MdOutlineWatchLater size={18} />
              <p className="m-0">
                {isVideoSetToWatchLater ? "Remove from" : "Add to"} watch later
              </p>
            </span>
            <span
              onClick={(e) => {
                e.stopPropagation();
                navigator.clipboard.writeText(
                  `https://www.youtube.com/watch?v=${id}`
                );
                setShowOptions(false);
                toast.success("Link copied to clipboard!");
              }}
              className="flex py-[10px] rounded-md  hover:bg-[#0000002e] hover:cursor-pointer items-center gap-2 px-2 "
            >
              <FaShare size={18} />
              <p className="m-0">Share</p>
            </span>
          </section>
        </span>
      </section>
    </div>
  );
};

export default VideoCard;
