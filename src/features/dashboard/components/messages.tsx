import Box from '@/components/ui/box';
import React from 'react';

interface ActivityProps {
  message: string;
  date: string;
  time: string;
  color: string;
}

export const Activity: React.FC<ActivityProps> = ({
  message,
  date,
  time,
  color,
}) => {
  return (
    <>
      <Box as="section">
        <Box
          as="section"
          className={`bg-gray-100 p-4 flex flex-col rounded-lg mb-3 border-l-2 ${color}`}
        >
          <Box className="">{message}</Box>
          <Box className="text-[12px] text-black/50">
            {date} {time}
          </Box>
        </Box>
      </Box>
    </>
  );
};
