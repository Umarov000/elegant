const ProductCardSkeleton = () => {
    return (
      <div className="group animate-pulse">
        <div className="relative overflow-hidden bg-gray-200 rounded-lg">
          <div className="w-full h-64 bg-gray-200"></div>
          <div className="absolute top-3 right-3 w-10 h-10 bg-gray-300 rounded-full"></div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[230px] h-10 bg-gray-300 rounded-md mb-2 hidden lg:block"></div>
          <div className="mt-2 w-full h-10 bg-gray-300 rounded-md block lg:hidden"></div>
        </div>
        <div className="flex flex-col gap-2 mt-3">
          <div className="w-24 h-4 bg-gray-300 rounded"></div>
          <div className="w-3/4 h-5 bg-gray-300 rounded"></div>
          <div className="w-16 h-5 bg-gray-300 rounded"></div>
        </div>
      </div>
    )
  }
  
  export default ProductCardSkeleton;
  