const Loading = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-10 animate-pulse">
        <div>
          <div className="w-full h-96 bg-gray-200 rounded-lg"></div>
          <div className="flex gap-3 mt-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="w-20 h-20 bg-gray-200 rounded-lg"></div>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <div className="h-8 w-3/4 bg-gray-200 rounded"></div>
          <div className="h-4 w-full bg-gray-200 rounded"></div>
          <div className="h-4 w-5/6 bg-gray-200 rounded"></div>

          <div className="h-6 w-1/3 bg-gray-200 rounded"></div>

          <div className="flex gap-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="w-16 h-16 bg-gray-200 rounded-md"></div>
            ))}
          </div>

          <div className="flex gap-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="w-10 h-10 bg-gray-200 rounded-full"></div>
            ))}
          </div>

          <div className="h-10 w-40 bg-gray-200 rounded"></div>

          <div className="h-10 w-32 bg-gray-200 rounded"></div>

          <div className="h-12 w-full bg-gray-200 rounded-lg"></div>
        </div>
      </div>
    </>
  );
};

export default Loading;
