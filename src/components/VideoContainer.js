import VideoCard from "./VideoCard";

const VideoContainer = ({ videoData }) => {
  return (
    <>
      {videoData &&
        videoData.length > 0 &&
        videoData.map((video) => {
          return (
            <VideoCard key={video.id} info={video} />
            // <Link key={video.id} to="watch" className="flex">
            //   <VideoCard info={video} />
            // </Link>
          );
        })}
    </>
  );
};
export default VideoContainer;
