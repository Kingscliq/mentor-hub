"use client";

import Box from "@/components/ui/box";

const ProfileInformation = () => {
  return (
    <Box as="section">
      <Box as="h1" className="text-xl font-bold">
        Profile Information
      </Box>
      <Box as="div" className="grid grid-cols-1 md:grid-cols-12 mt-5">
        <Box as="div" className="col-span-6 flex flex-col gap-y-4">
            <Box as="div" className="flex flex-col gap-y-1">
                <Box as='h1' className="text-sm font-normal text-black/40">Join Date</Box>
                <Box as='p' className="text-xl font-bold text-black">12 May 2025</Box>
            </Box>
            <Box as="div" className="flex flex-col gap-y-1">
                <Box as='h1' className="text-sm font-normal text-black/40">Join Date</Box>
                <Box as='p' className="text-xl font-bold text-black">12 May 2025</Box>
            </Box>
            <Box as="div" className="flex flex-col gap-y-1">
                <Box as='h1' className="text-sm font-normal text-black/40">Join Date</Box>
                <Box as='p' className="text-xl font-bold text-black">12 May 2025</Box>
            </Box>
            <Box as="div" className="flex flex-col gap-y-1">
                <Box as='h1' className="text-sm font-normal text-black/40">Join Date</Box>
                <Box as='p' className="text-xl font-bold text-black">12 May 2025</Box>
            </Box>
        </Box>
        <Box as="div" className="col-span-6">
             <Box as="div" className="flex flex-col gap-y-1">
                <Box as='h1' className="text-sm font-normal text-black/40">Join Date</Box>
                <Box as='p' className="text-xl font-bold text-black">12 May 2025</Box>
            </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfileInformation;
