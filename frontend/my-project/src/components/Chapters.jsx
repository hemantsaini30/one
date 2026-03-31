const Chapters = ({ title, chapters, subject, type, chapterId }) => {
  const navigate = useNavigate();

  const handleClick = (item) => {
    if (type === "chapter") {
      navigate(`/${subject}/chapter/${item.id}`);
    } else if (type === "feature") {
      navigate(`/${subject}/chapter/${chapterId}/${item.name.toLowerCase().replace(/\s/g, "")}`);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">{title}</h1>

      <div className="flex flex-col gap-4">
        {chapters.map((item) => (
          <div
            key={item.id}
            onClick={() => handleClick(item)}
            className="w-full bg-gray-800 p-5 rounded-2xl hover:bg-gray-700 cursor-pointer transition flex justify-between items-center"
          >
            <span className="font-medium text-lg">
              {item.id}. {item.name}
            </span>

            <span className="text-gray-400">→</span>
          </div>
        ))}
      </div>
    </div>
  );
};