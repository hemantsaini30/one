import Chapters from "../components/Chapters";
import scienceChapters from "../data/scienceChapters";

const Science = () => {
  return (
    <Chapters 
      title="Class 10 Science"
      chapters={scienceChapters}
      subject="science"
    />
  );
};

export default Science;