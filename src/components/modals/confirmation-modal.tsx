import Box from "../ui/box";
import { Button } from "../ui/button";

export interface ConfirmationModalProps {
  desc: string;
  handleBtn1: () => void;
  handleBtn2: () => void;
  btn1Text: string;
  btn2Text: string;
  btn2Style?:string; 
}
const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  handleBtn1,
  handleBtn2,
  desc,
  btn1Text = "Cancel",
  btn2Text,
  btn2Style 
}) => {
  return (
    <Box as="div">
      
      <Box as="p" className="text-gray-500" dangerouslySetInnerHTML={{__html:desc}}/>

      <Box
        as="section"
        className="flex flex-row items-center justify-between w-full mt-12"
      >
        <Button
          type="button"
          onClick={handleBtn1}
          className=" bg-white cursor-pointer  border text-black border-gray-500 hover:border-none hover:bg-red-900  hover:text-white py-2 rounded transition-all ease-in-out duration-500"
        >
          {btn1Text}
        </Button>
        <Button
          type="submit"
          onClick={handleBtn2}
          className={`cursor-pointer text-white py-2 rounded ${btn2Style ? btn2Style : "bg-primary hover:bg-blue-700"}  transition`}
        >
          {btn2Text}
        </Button>
      </Box>
    </Box>
  );
};

export default ConfirmationModal;
