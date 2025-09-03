import Box from '@/components/ui/box';
import { LoaderCircle } from 'lucide-react';

const Loader = () => {
  return (
    <Box className="flex flex-col justify-center items-center min-h-screen">
      <LoaderCircle size={40} className="animate-spin text-primary" />
    </Box>
  );
};

export default Loader;
