import Box from '@/components/ui/box';
import React from 'react';

interface ComingSoonProps {
  text: string;
}
const ComingSoon: React.FC<ComingSoonProps> = ({ text }) => {
  return (
    <Box className="w-screen flex item-center justify-center h-screen">
      <Box>
        <Box as="p" className="text-center mb-4 text-[60px]">
          🚧
        </Box>
        <Box as="p" className="text-center">
          {text || 'Under Construction'}
        </Box>
      </Box>
    </Box>
  );
};

export default ComingSoon;
