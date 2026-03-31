import Chapters from "../components/Chapters";
import firstflightChapters from "../data/English/firstflightChapters";

const FirstFlight = () => {
  return (
    <Chapters
      title="Class 10 English First Flight"
      chapters={firstflightChapters}
    />
  );
};

export default FirstFlight;
