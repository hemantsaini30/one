const Chapters = ({ title, chapters }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">{title}</h1>

      <div className="flex flex-col gap-3">
        {chapters.map((chapter) => (
          <div
            key={chapter.id}
            className="w-full bg-gray-800 p-4 rounded-xl hover:bg-gray-700 cursor-pointer transition"
          >
            <span className="font-medium">
              {chapter.id}. {chapter.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chapters;