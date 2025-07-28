import { Progress } from '@/components/ui';
import Box from '@/components/ui/box';
import React from 'react';

interface GroupSliderProps {
  percent: number;
  studentTotal: number;
  title: string;
}

export const GroupSlider: React.FC<GroupSliderProps> = ({
  percent,
  studentTotal,
  title,
}) => {
  return (
    <Box as="section">
      <Box as="aside" className="flex items-center justify-between mb-4">
        <Box as="h2" className="text-md font-semibold text-gray-900">
          {title}
        </Box>
        <Box as="p" className="text-xs font-medium text-gray-600">
          {studentTotal} students
        </Box>
      </Box>
      <Box className="my-4">
        <Progress value={percent} />
      </Box>
      <Box className="text-sm" as="p">
        {percent}% Complete
      </Box>
    </Box>
  );
};
