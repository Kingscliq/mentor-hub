import Box from '@/components/ui/box';
import { Card } from '@/components/ui/card';
import MentorsProjectCard from './projects-card';

export interface MentorsProjectsProps {
  handleOpenProjectReview: (projectId: string) => void;
}
const MentorsProject: React.FC<MentorsProjectsProps> = ({
  handleOpenProjectReview,
}) => {
  return (
    <Card className="bg-white p-8 rounded-md ">
      <Box as="div" className="py-5">
        <Box as="h2" className="text-3xl font-bold text-black">
          Project Topics Review
        </Box>
      </Box>

      <Box className="flex flex-col gap-y-7">
        <MentorsProjectCard handleOpenProjectReview={handleOpenProjectReview} />
      </Box>
    </Card>
  );
};

export default MentorsProject;
