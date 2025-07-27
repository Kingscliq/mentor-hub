import { Avatar } from '@/components/ui';
import Box from '@/components/ui/box';
import { Card } from '@/components/ui/card';
import { Roles } from '@/types/features/auth';
import React, { useMemo } from 'react';

interface UserProfileCardProps {
  profileUrl: string;
  name: string;
  role?: string;
  email: string;
  phone?: string;
  department?: string;
  regNo?: string;
  className?: string;
}

export const UserProfileCard: React.FC<UserProfileCardProps> = ({
  profileUrl,
  name,
  role,
  email,
  phone,
  department,
  regNo,
}) => {
  const profileDetails = useMemo(
    () => [
      { name: 'Role', value: role },
      { name: 'Email', value: email },
      { name: 'Phone', value: phone },
      { name: 'Department', value: department },
      ...(role === Roles.MENTEE
        ? [{ name: 'Registration Number', value: regNo }]
        : []),
    ],
    [department, email, phone, regNo, role]
  );

  const fallback = typeof name === 'string' && name.length > 0 ? name[0] : '';
  return (
    <Card>
      <Box className="flex items-center justify-center p-4">
        <Box className="flex flex-col justify-center items-center">
          <Avatar
            src={profileUrl}
            alt={name}
            fallBack={fallback}
            className="w-62 h-62"
          />
          <Box as="h2" className="text-center font-semibold text-xl my-5">
            {name}
          </Box>
          {profileDetails.map(detail => (
            <ProfileDetail
              key={detail.name}
              name={detail.name}
              value={detail.value}
            />
          ))}
        </Box>
      </Box>
    </Card>
  );
};

interface ProfileDetailProps {
  name: string;
  value?: string;
}

const ProfileDetail: React.FC<ProfileDetailProps> = ({ name, value }) => {
  return (
    <Box className="grid grid-cols-2 mb-2 gap-4">
      <Box>
        <Box as="p" className="text-gray-500 text-right">
          {name}
        </Box>
      </Box>
      <Box>
        <Box as="p" className="">
          {value ?? 'N/A'}
        </Box>
      </Box>
    </Box>
  );
};
