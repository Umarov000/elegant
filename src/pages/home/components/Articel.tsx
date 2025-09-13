import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import img1 from "../../../assets/artic1.png";
import img2 from "../../../assets/artic2.png";
import img3 from "../../../assets/artic3.png";

const Articel = () => {
  const articles = [
    { id: 1, text: "7 ways to decor your home", image: img1 },
    { id: 2, text: "Kitchen organization", image: img2 },
    { id: 3, text: "Decor your bedroom", image: img3 },
  ];

  const moreArticlesLink = (
    <span className="text-sm font-medium text-[#141718] cursor-pointer border-b border-[#141718] flex items-center gap-2">
      More Articles <FaArrowRightLong className="text-center" />
    </span>
  );

  return (
    <>
      <div className="flex justify-between items-center mb-6 mt-[80px]">
        <h3 className="text-[40px] font-medium max-w-[149px]">Articles</h3>
        {moreArticlesLink}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[25px]">
        {articles.map((article) => (
          <div key={article.id} className="flex flex-col">
            <img src={article.image} alt={article.text} className="w-full max-h-[325px] mb-4 object-cover" />
            <p className="text-[20px] font-medium">{article.text}</p>
            <span className="text-sm font-medium text-[#141718] cursor-pointer border-b border-[#141718] flex items-center gap-2 mt-2 max-w-[100px]">
            Read More <FaArrowRightLong className=""/>
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default React.memo(Articel);