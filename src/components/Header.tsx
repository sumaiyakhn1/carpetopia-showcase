import { Mail } from "lucide-react";

export const Header = () => {
  return (
    <div className="bg-black text-white py-2 px-4 overflow-hidden">
      <div className="container mx-auto relative">
        <div className="flex items-center space-x-2 animate-slide-email whitespace-nowrap">
          <Mail className="h-4 w-4" />
          <span>email@gmail.com</span>
        </div>
      </div>
    </div>
  );
};