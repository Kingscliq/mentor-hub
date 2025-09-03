'use client';

import Box from '@/components/ui/box';
import { ChevronLeft } from 'lucide-react';
import Image from 'next/image';
import { user1 } from '../../../../../public';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui';
import { useState } from 'react';
import ProfileInformation from './profile-information';
import ActiveInformation from './active-information';
import GroupInformation from './group-information';

export const userTabs = [
  {
    id: '1',
    category: 'profile information',
  },
  {
    id: '2',
    category: 'active information',
  },
  {
    id: '3',
    category: 'group information',
  },
];

const AdminUserDetails = () => {
  const [activeTab, setActiveTab] = useState('profile information');

  const handleSelected = (_activeTab: string) => {
    setActiveTab(_activeTab);
  };

  const renderComponent = () => {
    switch (activeTab) {
      case 'profile information':
        return <ProfileInformation />;
        break;
      case 'active information':
        return <ActiveInformation />;
        break;
      case 'group information':
        return <GroupInformation />;
        break;
      default:
        break;
    }
  };
  return (
    <Box as="main" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Box
        as="a"
        href="/admin/users"
        className="hover:bg-[#dedbdb] rounded-full size-10 justify-center flex flex-col items-center"
      >
        <ChevronLeft />
      </Box>
      <Box className="mt-10">
        <Box
          as="div"
          className="bg-white rounded-md p-4 flex items-center justify-between"
        >
          <Box as="div" className="flex flex-row items-center gap-x-4">
            <Box as="div">
              <Image
                src={user1}
                alt="user-image"
                width={80}
                className="rounded-full"
              />
            </Box>
            <Box as="div" className="flex flex-col gap-y-1">
              <Box as="h2" className="text-2xl font-bold text-black/80">
                Alice JonSon
              </Box>
              <Box as="h3" className="text-sm font-normal text-gray-600">
                alicejonsonson@gmail.com
              </Box>
              <Box as="div" className="flex items-center gap-x-2">
                <Badge variant="mentor">Mentor</Badge>
                <Badge variant="active">Active</Badge>
              </Box>
            </Box>
          </Box>
          <Box as="div" className="flex items-center gap-x-5">
            <Button className="text-black cursor-pointer border border-black/80 bg-white hover:border-none hover:bg-gray-300">
              Edit Profile
            </Button>
            <Button className="text-black cursor-pointer border border-black/80 bg-white hover:border-none hover:bg-gray-300">
              Deactivate User
            </Button>
          </Box>
        </Box>

        {/* tabs display */}

        <Box>
          <Box as="section" className="overflow-x-scroll no-modal-scroll-track">
            <Box
              as="section"
              className="whitespace-nowrap flex px-4 gap-x-5 mt-5 w-full"
            >
              {userTabs.map(item => (
                <p
                  onClick={() => handleSelected(item.category)}
                  key={item.id}
                  className={`${
                    item?.category === activeTab
                      ? 'text-primary border-primary border-b-2'
                      : 'text-black border-white border-b-2'
                  } px-6 pb-2 text-center hover:text-primary cursor-pointer capitalize transition-color ease-in-out duration-500 h-[30px]`}
                >
                  {item.category}
                </p>
              ))}
            </Box>
          </Box>
        </Box>

        {/* profile display */}

        <Box as="section" className="bg-white p-6 mt-5">
          {renderComponent()}
        </Box>
      </Box>
    </Box>
  );
};

export default AdminUserDetails;
