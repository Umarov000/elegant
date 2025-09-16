import { memo } from "react";
import Blogcomp from "./components/blogcomp";

const Blog = () => {
  return (
    <>
      <Blogcomp />
    </>
  );
};

export default memo(Blog);
