import { ReactNode } from "react";

import Box from "../ui/box";
import { X } from "lucide-react";

export interface MainModalI {
  children: ReactNode;
  className?: string;
  customWidth?: string;
  open?:boolean;
  title?:string;
  onClose:() => void
}
const MainModal: React.FC<MainModalI> = ({ children,className,customWidth,onClose,title,open }) => {
  return (
  
    <Box as="section" className={`h-full w-screen bg-opacity-40 bg-black/50 z-50 fixed ${open ? " top-0 opacity-100 " : "top-[380rem] opacity-10"} left-0  px-6 md:px-10 pointer-events-auto transition-all ease-in-out duration-700`}>
      <Box style={{ maxHeight: 'calc(100vh - 4rem)' }} className="min-h-screen flex flex-col md:items-center justify-center  md:p-3 no-modal-scroll-track">  
       <Box className=" ">
       <Box
          className={`w-full ${customWidth ? customWidth : 'md:w-[32rem] md:max-w-4xl md:mx-auto'}  ${className} relative bg-white shadow-sm shadow-[#f2f2f2] rounded-2xl px-4 md:px-8 py-6  transition-all ease-in-out duration-500`}
        >
          <Box className="flex flex-row items-center justify-between pb-3">
            <Box as='h2' className="text-2xl font-bold text-black">{title}</Box>
            <Box className="cursor-pointer">
              <X onClick={onClose} size={24} className="text-[#424242] hover:text-red-700"/>
            </Box>
          </Box>
          {children}
        </Box>
       </Box>
      </Box>
    </Box>
  );
};



export default MainModal;

