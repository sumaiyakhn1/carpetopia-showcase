import { Mail } from "lucide-react";

export const Header = () => {
  return (
    <div className="bg-black text-white py-2 px-4">
      <div className="container mx-auto flex justify-end items-center">
        <div className="flex items-center space-x-2">
          <Mail className="h-4 w-4" />
          <span className="animate-rotate-email">email@gmail.com</span>
        </div>
      </div>
    </div>
  );
};