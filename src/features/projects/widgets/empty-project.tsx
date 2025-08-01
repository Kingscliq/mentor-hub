import Box from "@/components/ui/box";
import { BookOpen } from "lucide-react";
import React from "react";

const EmptyProject = ({
  onAdd,
  userRole,
}: {
  onAdd: () => void;
  userRole: string;
}) => {
  return (
    <Box
      as="div"
      className="bg-white flex py-6 md:py-20 rounded-md te flex-col items-center gap-y-5 justify-center"
    >
      <BookOpen className="text-[#B3B3B3]" size={34} />
      {userRole === "mentee" ? (
        <>
          <Box
            onClick={onAdd}
            as="p"
            className="text-xl font-bold text-black hover:text-primary cursor-pointer"
          >
            Add Project
          </Box>
          <Box
            onClick={onAdd}
            as="p"
            className="text-lg font-normal text-gray-400 hover:text-primary cursor-pointer"
          >
            Add new Project to Started
          </Box>
        </>
      ) : (
        <Box as="p" className="text-xl font-bold text-black">
          No Project For Review
        </Box>
      )}
    </Box>
  );
};

export default EmptyProject;
