'use client';
import React, { useState } from 'react';
import Box from '@/components/ui/box';
import { ChevronLeft } from 'lucide-react';
import MiniProfileCard from './components/mini-profile';
import MainProfile from './components/main-profile';
import { user } from '@/lib';
import { User } from '@/types/features/auth';
import { useFetchGroups } from '@/hooks/groups';
const GroupModules: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<User>();
  const { userGroup } = useFetchGroups();

  const loggedUser = user;

  const getUser = (_user: User) => {
    setSelectedUser(_user);
  };

  return (
    <Box as="main" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Box
        as="a"
        href="/dashboard"
        className="hover:bg-[#dedbdb] rounded-full size-10 justify-center flex flex-col items-center"
      >
        <ChevronLeft />
      </Box>
      <Box className="mt-10">
        <Box as="h1" className="text-3xl font-bold">
          Group: {userGroup?.name ?? '-'}
        </Box>
      </Box>
      <Box
        as="div"
        className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 gap-x-0 lg:gap-x-10 lg:gap-y-0  bg-white px-8 py-6 mt-6 rounded-md"
      >
        {/* mini left side profile */}
        <Box as="div" className="lg:col-span-6">
          <MiniProfileCard
            selectedUserId={selectedUser?._id ?? '-'}
            getUser={getUser}
            loggedUser={loggedUser}
          />
        </Box>

        {/* main profile */}
        <MainProfile selectedUser={selectedUser} />
      </Box>
    </Box>
  );
};

export default GroupModules;
