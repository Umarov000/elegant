import { blogData, type BlogItem } from "../../../static/blogDate";

const Blog = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <div className="flex gap-6 text-sm font-medium">
          <span className="underline text-black">All Blog</span>
          <span className="text-gray-500">Featured</span>
        </div>
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <label htmlFor="sort" className="text-gray-600 whitespace-nowrap">
            Sort by
          </label>
          <select
            id="sort"
            className="border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
          >
            <option>Latest</option>
            <option>Oldest</option>
            <option>Popular</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blogData.map((item: BlogItem) => (
          <div key={item.id} className="">
            <img
              src={item.image}
              alt={item.title}
              className="w-full  h-[325px] object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-500 text-sm">{item.date}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button className="px-6 py-2 rounded-2xl border border-gray-400 text-sm font-medium hover:bg-gray-100 transition">
          Show More
        </button>
      </div>
    </div>
  );
};

export default Blog;
