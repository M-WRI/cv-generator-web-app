import { MdDeleteOutline } from "react-icons/md";

export const DeleteButton = () => {
  return (
    <div className="group cursor-pointer flex items-center justify-center bg-white hover:bg-error-500 h-[45px] w-[45px]">
      <MdDeleteOutline className="text-error-500 group-hover:text-white text-lg transition-colors duration-200" />
    </div>
  );
};
