'use client';

import Box from '@/components/ui/box';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { user1 } from '../../../../../public/images';
import { ActionTypeI } from '../../projects.module';

interface MentorsProjectsCardI {
  item: number;
  handleOpenProjectReview: (val: ActionTypeI, projectId: string) => void;
}
const MentorsProjectCard: React.FC<MentorsProjectsCardI> = ({
  item,
  handleOpenProjectReview,
}) => {
  console.log(item); // TODO: Will be removed
  return (
    <>
      <Box data-aos="fade-up" className="bg-[#FAFAFA] px-6 py-6 rounded-md">
        <Box as="div" className="flex flex-col gap-y-3">
          <Box as="h2" className="font-bold text-[#424242]">
            Ai Research Group 1
          </Box>
          {[2, 3].map(item => (
            <Card key={item} data-aos="fade-up" className="p-0">
              <Box as="div" className="px-5 py-4 flex flex-col gap-y-1 ">
                <Box as="h2" className="text-[#424242] font-semibold">
                  AI-Powered chatbot for Customer Service
                </Box>
                <Box as="p" className="text-[#424242] font-light">
                  Development of an intelligent chatbox system using natural
                  language processing.
                </Box>
                <Box as="div" className="flex items-center gap-x-3">
                  <Image src={user1} alt="project owner" width={30} />
                  <Box className="text-sm">
                    by{' '}
                    <Box as="span" className="font-semibold">
                      Adaobi Chukwu
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
