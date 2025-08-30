'use client';

import Box from '@/components/ui/box';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { user1 } from '../../../../../public/images';
import { ActionTypeI } from '@/types/features/projects';
import React, { useState, useEffect } from 'react';
import { client } from '@/lib';

interface MentorsProjectsCardI {
  handleOpenProjectReview: (val: ActionTypeI, projectId: string) => void;
}

interface Project {
  _id: string;
  topic: string;
  description: string;
  stage: string;
  status: string;
  groupId: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
}

const MentorsProjectCard: React.FC<MentorsProjectsCardI> = ({
  handleOpenProjectReview,
}) => {
  const [users, setUsers] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    client
      .get('api/v1/projects/')
      .then(data => {
        setUsers(data?.data?.data?.projects as unknown as []);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error getting data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  console.log(users);
  return (
    <>
      <Box data-aos="fade-up" className="bg-[#FAFAFA] px-6 py-6 rounded-md">
        <Box as="div" className="flex flex-col gap-y-3">
          <Box as="h2" className="font-bold text-[#424242]">
            {/* Ai Research Group 1 */}
          </Box>

          {users?.length === 0 && <p>No projects found.</p>}
          {users?.length > 0 &&
            users.map(project => (
              <Card key={project._id} data-aos="fade-up" className="p-0">
                <Box as="div" className="px-5 py-4 flex flex-col gap-y-1 ">
                  <Box as="h2" className="text-[#424242] font-semibold">
                    {project.topic}
                  </Box>
                  <Box as="p" className="text-[#424242] font-light">
                    {project.description}
                  </Box>
                  <Box as="div" className="flex items-center gap-x-3">
                    <Image src={user1} alt="project owner" width={30} />
                    <Box className="text-sm">
                      by{' '}
                      <Box as="span" className="font-semibold">
                        {project.userId}
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    as="section"
                    className="flex flex-row items-center gap-x-7 w-full mt-8"
                  >
                    <Button
                      type="button"
                      onClick={() => handleOpenProjectReview('approve', '1')}
                      className=" cursor-pointer  border text-white bg-[#13A10E] hover:border-none hover:bg-green-900 py-2 rounded transition-all ease-in-out duration-500"
                    >
                      Approve
                    </Button>
                    <Button
                      onClick={() => handleOpenProjectReview('reject', '2')}
                      type="button"
                      className=" bg-[#C50F1F] cursor-pointer text-white py-2 rounded hover:bg-red-900 transition"
                    >
                      Reject
                    </Button>
                  </Box>
                </Box>
              </Card>
            ))}
        </Box>
      </Box>
    </>
  );
};

export default MentorsProjectCard;
