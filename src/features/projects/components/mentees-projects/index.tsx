'use client';

import { Badge } from '@/components/ui/badge';
import Box from '@/components/ui/box';
import { Card } from '@/components/ui/card';
// import {
//   greencheck,
//   greyoutline,
//   orangeoutline,
// } from '../../../../../public/icons';
// import Image, { StaticImageData } from 'next/image';

// import { useState } from 'react';
import { IMenteeProjectsData } from '@/types/features/projects';
import { useAuth } from '@/hooks/auth/useAuthStore';
import { useFetchProject } from '@/hooks/projects/useFetchProjects';

// const statusicons: Record<string, StaticImageData> = {
//   completed: greencheck,
//   'in progress': orangeoutline,
//   'to-do': greyoutline,
// };

export interface MenteesProjectsProps {
  projects: IMenteeProjectsData[];
}
const MenteesProjects: React.FC<MenteesProjectsProps> = () => {
  // const [setSelectedProject] = useState<IMenteeProjectsData>(
  //   projects[0]
  // );

  const { userProject } = useFetchProject();

  const {} = useAuth();
  return (
    <Box as="section">
      {/* project approval */}
      <Card className="bg-white rounded-md py-6 px-4">
        <Box as="h1" className="text-xl font-bold">
          Project Topic Approval
        </Box>

        <Box className="mt-4 flex flex-col gap-y-3">
          {userProject?.users && Array.isArray(userProject.users) ? (
            userProject.users.map((user: IMenteeProjectsData) => (
              <Card
                key={user._id}
                // onClick={() => setSelectedProject(user)}
                className="p-0"
                data-aos="fade-up"
              >
                <Box
                  as="div"
                  className="flex justify-between items-center text-black rounded-xl py-8 px-2 bg-[#FAFAFA]"
                >
                  {user.topic}
                  <Badge variant="approved" className="absolute right-[10px] capitalize">
                    {user.status ?? '-'}
                  </Badge>
                </Box>
              </Card>
            ))
          ) : (
            <div>Loading...</div>
          )}
        </Box>
      </Card>

      {/* project milestone */}
      {/* <Box className="mt-10">
        <Card className="bg-white rounded-md py-6 px-4">
          <Box as="h1" className="text-xl font-bold">
            Project Milestone
          </Box>
          <Box className="mt-4 flex flex-col gap-y-3">
            {selectedProject?.milestone?.map(item => (
              <Card key={item._id} className="p-0" data-aos="fade-up">
                <Box
                  as="div"
                  className="flex justify-between items-center text-black rounded-xl py-6 px-2 bg-[#FAFAFA]"
                >
                  <Box as="div" className="flex items-center gap-x-3 pl-4">
                    <Image src={statusicons[`${item.status}`]} alt="icons" />
                    <Box className="font-bold">
                      Chapter {item.chapter} : {item.title}
                    </Box>
                  </Box>
                  <Badge variant={item.status as 'default'}>
                    {item.status}
                  </Badge>
                </Box>
              </Card>
            ))}
          </Box>
        </Card>
      </Box> */}
    </Box>
  );
};

export default MenteesProjects;
