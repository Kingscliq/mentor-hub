'use client';
import { useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
import { user } from '../dashboard';
import Box from '@/components/ui/box';
import { ChevronLeft } from 'lucide-react';
import { user1 } from '../../../public/images';
import MiniProfileCard from './components/mini-profile';
import MainProfile from './components/main-profile';
import { GroupModulesI, GroupsDetailsI } from '@/types/features/groups';

// Will be removed when api is ready
export const groupsData: Record<string, GroupsDetailsI[]> = {
  mentee: [
    {
      _id: '001',
      projectName: 'AI Research',
      mentor: {
        name: 'Dr.Newman',
        userType: 'mentor',
        photo: user1,
        _id: '0010',
        email: 'newman@gmail.com',
        phoneNumber: '09039394949',
        RegNumber: 'NP12344',
        department: 'English',
      },
      mentees: [
        {
          name: 'Michael Adams',
          userType: 'mentee',
          photo: user1,
          _id: '002',
          email: 'michael@gmail.com',
          phoneNumber: '09099494949',
          RegNumber: 'NP09038',
          department: 'Pharmacy',
        },
        {
          name: 'Wole Funzi',
          userType: 'mentee',
          photo: user1,
          _id: '003',
          email: 'wole@gmail.com',
          phoneNumber: '09033039349',
          RegNumber: 'NP1345',
          department: 'Banking',
        },
      ],
    },
  ],
  mentor: [
    {
      _id: '004',
      projectName: 'AI Research',
      mentor: {
        name: 'Dr.Robert',
        userType: 'mentor',
        photo: user1,
        _id: '001034',
        email: 'robert@gmail.com',
        phoneNumber: '0903987649',
        RegNumber: 'NP342445',
        department: 'Literature',
      },
      mentees: [
        {
          name: 'Sandra West',
          userType: 'mentee',
          photo: user1,
          _id: '005',
          email: 'sandra@gmail.com',
          phoneNumber: '09090956949',
          RegNumber: 'NP98764',
          department: 'Geology',
        },
        {
          name: 'Eneh Jude',
          userType: 'mentee',
          photo: user1,
          _id: '006',
          email: 'jude@gmail.com',
          phoneNumber: '09036446949',
          RegNumber: 'NP85947',
          department: 'Fine Art',
        },
      ],
    },
    {
      _id: '007',
      projectName: 'AI Research',
      mentor: {
        name: 'Dr.Madu',
        userType: 'mentor',
        photo: user1,
        _id: '00109098',
        email: 'madu@gmail.com',
        phoneNumber: '09039564949',
        RegNumber: 'NP12453',
        department: 'Solar Energy',
      },
      mentees: [
        {
          name: 'John Sam',
          userType: 'mentee',
          photo: user1,
          _id: '008',
          email: 'john@gmail.com',
          phoneNumber: '09139394949',
          RegNumber: 'NP125335',
          department: 'Mathematics',
        },
        {
          name: 'George White',
          userType: 'mentee',
          photo: user1,
          _id: '009',
          email: 'george@gmail.com',
          phoneNumber: '09039394949',
          RegNumber: 'NP13544',
          department: 'English',
        },
      ],
    },
  ],
};

const GroupModules: React.FC<GroupModulesI> = () => {
  const [selectedUser, setSelectedUser] = useState<GroupsDetailsI['mentor']>();
  const searchParams = useSearchParams();
  const projectTitle = searchParams.get('projectTitle');
  const loggedUser = user;
  const viewGroups = groupsData[loggedUser?.role];

  const getUser = (_user: GroupsDetailsI['mentor']) => {
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
        {
          <Box as="h1" className="text-3xl font-bold">
            {loggedUser?.role === 'mentee'
              ? projectTitle || 'AI Research Group1'
              : 'My Groups'}
          </Box>
        }
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
            viewGroups={viewGroups}
          />
        </Box>

        {/* main profile */}
        <MainProfile selectedUser={selectedUser} />
      </Box>
    </Box>
  );
};

export default GroupModules;
