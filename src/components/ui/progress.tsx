import Box from '@/components/ui/box';
import React from 'react';

interface ProgressProps {
  value: number;
}
export const Progress: React.FC<ProgressProps> = ({ value }) => {
  return (
    <Box className="w-full bg-gray-200 rounded-full h-2">
      <Box
        className="bg-primary h-2 rounded-full transition-all duration-300"
        style={{ width: `${value}%` }}
      ></Box>
    </Box>
  );
};
