import { useSelector } from "react-redux";
import ButtonLists from "./ButtonLists";
import appStore from "../utils/store";
import { fetchTagsUrl } from "../utils/apiCalls";
import { useState, useEffect } from "react";

function MainVideoContainer() {
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
        <ButtonLists allTags={tags} />
      </section>
    </div>
  );
}
export default MainVideoContainer;
