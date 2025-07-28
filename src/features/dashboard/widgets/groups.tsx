import React from 'react';
import Box from '@/components/ui/box';
import { Card, CardTitle } from '@/components/ui/card';
import { GroupSlider } from '@/features/dashboard/components';
import { GroupsInfo } from '@/types/features/dashboard';

interface GroupsProps {
  groups: GroupsInfo[];
}

export const Groups: React.FC<GroupsProps> = ({ groups }) => {
  return (
    <Card className="px-6">
      <CardTitle className="text-lg font-semibold">Groups</CardTitle>
      {groups.length === 0 ? (
        <Box as="p" className="text-gray-500 text-center py-4">
          No data available.
        </Box>
      ) : (
        groups.map(group => (
          <GroupSlider
            key={group.title}
            percent={group.percent}
            studentTotal={group.studentTotal}
            title={group.title}
          />
        ))
      )}
    </Card>
  );
};

// Mock data for testing
export const mockGroups: GroupsInfo[] = [
  {
    title: 'Frontend Team',
    percent: 80,
    studentTotal: 10,

  },
  {
    title: 'Backend Team',
    percent: 65,
    studentTotal: 8,
  },
  {
    title: 'Mobile Team',
    percent: 50,
    studentTotal: 6,
  },
];
