import Box from '@/components/ui/box';
import React from 'react';

interface MessageProps {
  message: string;
  date: string;
  time: string;
}

export const Messages: React.FC<MessageProps> = ({ message, date, time }) => {
  return (
    <>
      <Box
        as="section"
        //   className="bg-white rounded-lg"
      >
        <Box as="section" className="">
          <Box className="">{message}</Box>
          <Box className="">
            {date} {time}
          </Box>
        </Box>
      </Box>
    </>
  );
};
