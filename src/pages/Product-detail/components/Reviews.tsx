import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../../hooks/useFetch";
import ProductStars from "./ProductStars";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Reviews: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const [likedReviews, setLikedReviews] = useState<{ [key: string]: boolean }>(
    {}
  );

  const { id } = useParams();
  const { data, error } = useFetch("/products");

  if (error)
    return <p className="text-center text-red-500">Error: {String(error)}</p>;

  const product = data?.products?.find((p: any) => String(p.id) === id);
  if (!product)
    return <p className="text-center text-red-500">😂😂😂😂😂😂😂😂😂</p>;

  const reviews = product.reviews || [];

  const toggleLike = (reviewId: string) => {
    setLikedReviews((prev) => ({
      ...prev,
      [reviewId]: !prev[reviewId],
    }));
  };

  return (
    <div className="container w-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          {reviews.length} Reviews
        </h2>
      </div>

      <div className="space-y-6">
        {(showAll ? reviews : reviews.slice(0, 3)).map((review: any) => (
          <div key={review.comment} className="border-b pb-6">
            <div className="flex space-x-4">
              <div>
                <h3 className="font-semibold">{review.reviewerName}</h3>

                <div className="flex items-center space-x-2 mb-2">
                  <ProductStars rating={review.rating} />
                </div>
                <p className="mb-3">{review.comment}</p>
                <div className="flex gap-4.5">
                  <div className="flex gap-1">
                    <button
                      onClick={() => toggleLike(review.comment)}
                      className="hover:cursor-pointer"
                    >
                      Like
                    </button>
                    {likedReviews[review.comment] ? (
                      <FaHeart className="mt-1 ml-0 text-red-500" />
                    ) : (
                      <FaRegHeart className="mt-1 ml-0" />
                    )}
                  </div>
                  <button>Reply</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {!showAll && reviews.length > 3 && (
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(true)}
            className="px-6 py-3 border border-gray-300 rounded-4xl"
          >
            Load more
          </button>
        </div>
      )}
    </div>
  );
};
export default React.memo(Reviews);
