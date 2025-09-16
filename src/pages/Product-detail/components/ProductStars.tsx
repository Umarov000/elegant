import type { FC } from "react";
import { MdStar, MdStarHalf } from "react-icons/md";

interface IStarParams {
  rating: number;
}

const ProductStars: FC<IStarParams> = ({ rating }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  for (let i = 0; i < fullStars; i++) {
    stars.push(<MdStar key={`full-${i}`} className="text-yellow-500" />);
  }

  if (hasHalfStar) {
    stars.push(<MdStarHalf key="half" className="text-yellow-500" />);
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push(<MdStar key={`empty-${i}`} className="" />);
  }

  return <div className="flex items-center gap-1 text-lg">{stars}</div>;
};

export default ProductStars;
