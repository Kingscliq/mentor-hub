import { Avatar } from '@/components/ui';
import Box from '@/components/ui/box';
import { Card } from '@/components/ui/card';
import React from 'react';

interface GroupCardProps {
  name: string;
  profileUrl: string;
  role: string;
}
export const GroupCard: React.FC<GroupCardProps> = ({
  name,
  profileUrl,
  role,
}) => {
  const fallback = typeof name === 'string' && name.length > 0 ? name[0] : '';
  return (
    <Card>
      <Box className="flex items-center px-4">
        <Avatar
          className="h-15 w-15"
          src={profileUrl}
          alt={name}
          fallBack={fallback}
        />
        <Box className="ml-4">
          <Box as="h2" className="text-base font-semibold">
            {name}
          </Box>
          <Box as="p" className="text-sm text-gray-500">
            {role}
          </Box>
        </Box>
      </Box>
    </Card>
  );
};
