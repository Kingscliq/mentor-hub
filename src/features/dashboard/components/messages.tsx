import Box from '@/components/ui/box';
import React from 'react';

interface MessageProps {
  message: string;
  date: string;
  time: string;
  color: string;
}

export const Messages: React.FC<MessageProps> = ({ message, date, time }) => {
  return (
    <>
      <Box
        as="section"
        //   className="bg-white rounded-lg"
      >
        <Box as="section" className="bg-gray-100 p-4 flex flex-col rounded-lg mb-3 border-l-2 {`text-${color}-500`}">
          <Box className="">{message}</Box>
          <Box className="text-[12px] text-black/50">
            {date} {time}
          </Box>
        </Box>
      </Box>
    </>
  );
};
