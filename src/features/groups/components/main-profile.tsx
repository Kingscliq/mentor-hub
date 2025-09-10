import Box from '@/components/ui/box';
import React from 'react';
import { User } from '@/types/features/auth';
// import { Avatar } from '@/components/ui';
import Image from 'next/image';
import { User2 } from '../../../../public';

interface MainProfileI {
  selectedUser?: User;
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
          {selectedUser ? (
            <>
              <Box>
                <Image
                  src={selectedUser?.profileImage || User2}
                  alt=""
                  width={50}
                  height={50}
                  className="rounded-full  h-[250px] w-[250px]"
                />{' '}
              </Box>
            </>
          ) : (
            <>
              <Box className="h-40 w-40 rounded-full bg-gray-500"></Box>
              <Box as="p" className="mt-4 text-black text-lg font-bold">
                No User Selected
              </Box>
            </>
          )}
        </Box>
        <Box>
          <Box as="h1" className="text-2xl font-bold text-black mt-3">
            {`${selectedUser?.firstName ?? '-'} ${
              selectedUser?.lastName ?? '-'
            }`}
          </Box>
        </Box>
      </Box>

      <Box className="justify-center grid">
        {selectedUser && (
          <Box as="div" className="px-10 flex flex-col gap-y-4">
            <Box as="div" className="flex justify-between">
              <Box as="span" className="w-40 text-right">
                Phone Number:
              </Box>
              <Box
                as="span"
                className="flex-1 pl-4 text-left text-gray-400 text-sm"
              >
                {selectedUser?.phoneNumber ?? '-'}
              </Box>
            </Box>
            <Box as="div" className="flex justify-between">
              <Box as="span" className="w-40 text-right ">
                Email Address:
              </Box>
              <Box
                as="span"
                className="flex-1 pl-4 text-left mt-[3px] text-gray-400 text-sm"
              >
                {selectedUser?.email ?? '-'}
              </Box>
            </Box>
            <Box as="div" className="flex justify-between">
              <Box as="span" className="w-40 text-right">
                Reg Number:
              </Box>
              <Box
                as="span"
                className="flex-1 pl-4 text-left mt-[3px] text-gray-400 text-sm"
              >
                {selectedUser?.matricNumber ?? '-'}
              </Box>
            </Box>
            <Box as="div" className="flex justify-between">
              <Box as="span" className="w-40 text-right">
                Department:
              </Box>
              <Box
                as="span"
                className="flex-1 pl-4 text-left mt-[3px] text-gray-400 text-sm"
              >
                {selectedUser?.department ?? '-'}
              </Box>
            </Box>

            <Box as="div" className="flex justify-between">
              <Box as="span" className="w-40 text-right">
                Role:
              </Box>
              <Box
                as="span"
                className="flex-1 pl-4 text-left mt-[3px] text-gray-400 text-sm"
              >
                {selectedUser?.role ?? '-'}
              </Box>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default MainProfile;
