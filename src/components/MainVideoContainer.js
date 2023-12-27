import { useSelector } from "react-redux";
import ButtonLists from "./ButtonLists";
import appStore from "../utils/store";
import { fetchTagsUrl } from "../utils/apiCalls";
import { useState, useEffect } from "react";
import VideoContainer from "./VideoContainer";
import { API_CALL_URL, moreVideosFetcherAPI } from "../utils/apiCalls";

function MainVideoContainer() {
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

  //TAGS API CALL
  const [tags, setTags] = useState([]);
  async function tagsFetcher() {
    try {
      const res = await fetch(fetchTagsUrl);
      const data = await res.json();
      if (data) {
        // console.log(data?.items);
        setTags(data?.items);
      }
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    tagsFetcher();
  }, []);

  const isNavBarOpen = useSelector((appStore) => appStore.app.isNavBarOpen);
  let defaultStyle = isNavBarOpen ? "w-[85%] ml-[15%]" : "w-[92%] ml-[8%]";

  return (
    <div
      className={
        "filterContainer " +
        defaultStyle +
        " min-h-[90vh] relative py-4 px-8 box-border flex flex-col"
      }
    >
      <section className="w-[100%] flex gap-3 whitespace-nowrap relative pb-2 overflow-x-scroll no-scrollbar">
        <ButtonLists allTags={tags} videoData={videoData} />
      </section>
      <section className="w-[100%] flex flex-wrap gap-2 justify-between overflow-hidden pt-6">
        <VideoContainer videoData={videoData} />
      </section>
    </div>
  );
}
export default MainVideoContainer;
