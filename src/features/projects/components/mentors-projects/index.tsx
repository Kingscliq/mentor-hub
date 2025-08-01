import Box from "@/components/ui/box";
import { ActionTypeI, MenteeProjectsDataI } from "../../projects.module";
import { Card } from "@/components/ui/card";
import MentorsProjectCard from "./projects-card";

export interface MentorsProjectsProps {
  projects: MenteeProjectsDataI[];
  handleOpenProjectReview:(val:ActionTypeI, projectId:string) => void
}
const MentorsProject: React.FC<MentorsProjectsProps> = ({ projects,handleOpenProjectReview }) => {
  return (
    <Card className="bg-white p-8 rounded-md ">
      <Box as="div" className="py-5">
        <Box as="h2" className="text-3xl font-bold text-black">
          Project Topics Review
        </Box>
      </Box>

      <Box className="flex flex-col gap-y-7">
        {[0, 1].map((item) => (
          <MentorsProjectCard key={item} item={item}  handleOpenProjectReview={handleOpenProjectReview}/>
        ))}
      </Box>
    </Card>
  );
};

export default MentorsProject;
