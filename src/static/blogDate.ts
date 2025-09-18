import img1 from "../assets/b1.png";
import img2 from "../assets/b2.png";
import img3 from "../assets/b3.png";
import img4 from "../assets/b4.png";
import img5 from "../assets/b5.png";
import img6 from "../assets/b6.png";
import img7 from "../assets/b7.png";
import img8 from "../assets/b8.png";
import img9 from "../assets/b9.png";

export interface BlogItem {
  id: number;
  title: string;
  date: string;
  image: string;
}

export const blogData: BlogItem[] = [
  {
    id: 1,
    title: "7 ways to decor your home like a professional",
    date: "October 18, 2023",
    image: img1,
  },
  {
    id: 2,
    title: "Inside a beautiful kitchen organization",
    date: "October 19, 2023",
    image: img2,
  },
  {
    id: 3,
    title: "Decor your bedroom for your children",
    date: "October 16, 2023",
    image: img3,
  },
  {
    id: 4,
    title: "Modern texas home is beautiful and completely kid-friendly",
    date: "October 16, 2023",
    image: img4,
  },
  {
    id: 5,
    title: "Modern texas home is beautiful and completely kid-friendly",
    date: "October 19, 2023",
    image: img5,
  },
  {
    id: 6,
    title: "Modern texas home is beautiful and completely kid-friendly",
    date: "October 16, 2023",
    image: img6,
  },
  {
    id: 7,
    title: "Modern texas home is beautiful and completely kid-friendly",
    date: "October 17, 2023",
    image: img7,
  },
  {
    id: 8,
    title: "Modern texas home is beautiful and completely kid-friendly",
    date: "October 19, 2023",
    image: img8,
  },
  {
    id: 9,
    title: "Modern texas home is beautiful and completely kid-friendly",
    date: "October 16, 2023",
    image: img9,
  },
];
