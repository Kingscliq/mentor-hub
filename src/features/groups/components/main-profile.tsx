import Box from "@/components/ui/box";
import Image from "next/image";
import React from "react";
import { GroupsDetailsI } from "@/types/features/groups";

interface MainProfileI {
  selectedUser?: GroupsDetailsI["mentor"];
}
const MainProfile: React.FC<MainProfileI> = ({ selectedUser }) => {
  return (
    <Box as="section" className="lg:col-span-6 flex flex-col justify-center  ">
      <Box
        as="div"
        className="px-3 py-6 flex flex-col  justify-center items-center gap-x-5"
        data-aos="fade-down"
      >
        <Box as="div">
          {selectedUser?.photo ? (
            <Image
              src={(selectedUser?.photo) || "https://user.png"}
              alt="user"
              width={200}
              height={150}
              className="rounded-full"
            />
          ) : (
            <>
            <Box className="h-40 w-40 rounded-full bg-gray-500"></Box>
            <Box as='p' className="mt-4 text-black text-lg font-bold">No User Selected</Box>
            
            </>
          )}
        </Box>
        <Box>
          <Box as="h1" className="text-2xl font-bold text-black mt-3">
            {selectedUser?.name}
          </Box>
        </Box>
      </Box>
      {
        selectedUser &&
        <Box as="div" className="px-10 flex flex-col gap-y-4">
        <Box as="p" className="text-lg font-bold text=black">
          Email Address:{" "}
          <Box as="span" className="text-gray-400 text-sm">
            {selectedUser?.email}
          </Box>
        </Box>
        <Box as="p" className="text-lg font-bold text=black">
          Department:{" "}
          <Box as="span" className="text-gray-400 text-sm">
            {selectedUser?.department}
          </Box>
        </Box>
        <Box as="p" className="text-lg font-bold text=black">
          Reg Number:
          <Box as="span" className="text-gray-400 text-sm">
            {selectedUser?.RegNumber}
          </Box>
        </Box>
        <Box as="p" className="text-lg font-bold text=black">
          Phone Number:
          <Box as="span" className="text-gray-400 text-sm">
            {selectedUser?.phoneNumber}
          </Box>
        </Box>
      </Box>
      }
    </Box>
  );
};

export default MainProfile;
