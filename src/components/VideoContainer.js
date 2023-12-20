import { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { API_CALL_URL } from "../utils/apiCalls";

const VideoContainer = () => {
  const [videoData, setVideoData] = useState([]);

  const fetchAllVideos = async () => {
    const res = await fetch(API_CALL_URL);
    const data = await res.json();
    setVideoData(data.items);
  };
  useEffect(() => {
    fetchAllVideos();
  }, []);

  return (
    <>
      {videoData &&
        videoData.length > 0 &&
        videoData.map((video) => {
          return <VideoCard info={video} />;
        })}
    </>
  );
};
export default VideoContainer;
