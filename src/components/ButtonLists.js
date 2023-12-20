const ButtonLists = ({ allTags }) => {
  return (
    <>
      <small className="text-white font-semibold rounded-lg bg-stone-800 p-2 px-3 cursor-pointer hover:bg-stone-300 whitespace-nowrap">
        All
      </small>
      {allTags.map((tag) => {
        const { id, snippet } = tag;
        return (
          <small
            key={id}
            className="text-black bg-[#0000000d] font-semibold rounded-lg p-2 px-3 cursor-pointer hover:bg-stone-300 whitespace-nowrap"
          >
            {snippet.title}
          </small>
        );
      })}
    </>
  );
};
export default ButtonLists;
