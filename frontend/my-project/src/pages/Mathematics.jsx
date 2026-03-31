import Chapters from "../components/Chapters";
import mathsChapters from "../data/mathsChapters";

const Mathematics = () => {
  return (
    <Chapters
      title="Class 10 Mathematics"
      chapters={mathsChapters}
      subject="maths"
      type="chapter"
    />
  );
};

export default Mathematics;