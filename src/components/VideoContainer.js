import { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { API_CALL_URL, moreVideosFetcherAPI } from "../utils/apiCalls";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videoData, setVideoData] = useState([]);
  const [nextPageToken, setNextPageToken] = useState("");
  const [page, setNextPage] = useState(1);

  const fetchPopularVideos = async () => {
    const res = await fetch(API_CALL_URL);
    const data = await res.json();
    setVideoData(data.items);
    setNextPageToken(data?.nextPageToken);
  };
  useEffect(() => {
    fetchPopularVideos();
  }, []);

  const fetchMoreVideos = async (nextPageToken) => {
    const res = await moreVideosFetcherAPI(nextPageToken);
    setNextPageToken(res?.nextPageToken);
    setVideoData(videoData.concat(res?.items));
  };
  useEffect(() => {
    page === 1 ? fetchPopularVideos() : fetchMoreVideos(nextPageToken);
  }, [page]);

  useEffect(() => {
    const listenerFunction = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      )
        setNextPage((page) => page + 1);
    };
    window.addEventListener("scroll", listenerFunction);
    return () => {
      window.removeEventListener("scroll", listenerFunction);
    };
  }, []);

  return (
    <>
      {videoData &&
        videoData.length > 0 &&
        videoData.map((video) => {
          return (
            <Link key={video.id} to="watch">
              <VideoCard info={video} />
            </Link>
          );
        })}
    </>
  );
};
export default VideoContainer;
