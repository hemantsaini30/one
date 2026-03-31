import { useParams } from "react-router-dom";
import Chapters from "../components/Chapters";
import detailsPage from "../data/detailsPage";

const ChapterDetails = () => {
  const { id } = useParams();

  return (
    <Chapters
      title={`Chapter ${id}`}
      chapters={detailsPage}
      subject="maths"
      type="feature"
      chapterId={id}
    />
  );
};

export default ChapterDetails;