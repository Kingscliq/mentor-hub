import Box from '@/components/ui/box';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import React from 'react';
import { User2 } from '../../../../public';
// import { user1 } from '../../../../public';
// import { User2 } from 'lucide-react';

interface UserProfileCardI {
  name: string;
  userType: string;
  photo?: string;
  active?: boolean;
  onClick: () => void;
}

const UserProfileCard: React.FC<UserProfileCardI> = ({
  name,
  userType,
  photo,
  active,
  onClick,
}) => {
  return (
    <Card
      onClick={onClick}
      className={`${
        active ? 'bg-[#EBF3FC]' : 'bg-white'
      } hover:bg-[#EBF3FC] cursor-pointer transition-all duration-500 ease-in-out`}
    >
      <Box as="div" className={`px-3  py-4 flex items-center gap-x-5`}>
        <Box as="div">
          <Image
            src={photo || User2}
            alt=""
            width={50}
            height={50}
            className="rounded-full"
          />
        </Box>
        <Box>
          <Box as="h1" className="text-2xl font-bold text-black">
            {name}
          </Box>
          <Box as="p" className="text-sm font-normal text-gray-400">
            {userType}
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default UserProfileCard;
