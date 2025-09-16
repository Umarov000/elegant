import { Loader2 } from "lucide-react";

const SuspenseLoading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm z-50">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="w-10 h-10 animate-spin text-indigo-600" />
        <p className="text-gray-700 font-medium animate-pulse">
          Loading, please wait...
        </p>
      </div>
    </div>
  );
};

export default SuspenseLoading;
