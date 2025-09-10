'use client';
import { Button } from '@/components/ui';
import Box from '@/components/ui/box';
import { Card } from '@/components/ui/card';
import { ChevronLeft, Plus } from 'lucide-react';
import Image from 'next/image';
import { user1 } from '../../../../../public';
import MainModal from '@/components/modals';
import { useState } from 'react';
import { useGetAllGroups } from '../api';
import AddUser from '@/features/admin/groups/widgets/add-user-form';
import { IGroupsList } from '@/types/features/groups';

const AdminGroupDetails = ({ params }: { params: string }) => {
  const [open, setOpen] = useState<boolean>(false);

  const { data: allGroups } = useGetAllGroups('');

  // group details
  const groupDetails: IGroupsList | undefined = allGroups?.groups?.find(
    item => String(item?._id) === String(params)
  );
  console.log({ groupDetails });

  const isMentorEmpty = false;

  return (
    <Box as="main" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Box
        as="a"
        href="/admin/groups"
        className="hover:bg-[#dedbdb] rounded-full size-10 justify-center flex flex-col items-center"
      >
        <ChevronLeft />
      </Box>
      <Box className="mt-10">
        <Box as="h2" className="text-2xl flex justify-between font-bold mb-5">
          Group: {groupDetails?.name || '---'}{' '}
          <Button
            onClick={() => setOpen(true)}
            className="flex ml-auto cursor-pointer bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            {' '}
            <Plus /> Add User
          </Button>
        </Box>
        <MainModal title="Add User" open={open} onClose={() => setOpen(false)}>
          <AddUser open={open} onClose={() => setOpen(false)} />
        </MainModal>

        <Card className="py-10 px-0">
          <Box as="div" className="px-4">
            <Box as="h3" className="text-black font-bold mb-5">
              Supervisor
            </Box>

            {isMentorEmpty ? (
              <Card className="bg-blue-300 py-5">
                <Box>No Supervisor Assigned</Box>
              </Card>
            ) : (
              <Card className="">
                <Box as="div" className="flex items-center gap-x-5 px-4">
                  <Box>
                    <Image src={user1} alt="" width={40} />
                  </Box>
                  <Box as="div">
                    <Box as="h2" className="text-lg font-semibold">
                      Michael Ani
                    </Box>
                    <Box as="h3" className="text-xs">
                      Mentor
                    </Box>
                  </Box>
                </Box>
              </Card>
            )}
          </Box>

          {/* mentee sections */}

          <Box as="div" className="px-4">
            <Box as="h3" className="text-black font-bold mb-4">
              Students
            </Box>

            <Card className="">
              <Box as="div" className="flex items-center gap-x-5 px-4">
                <Box>
                  <Image src={user1} alt="" width={40} />
                </Box>
                <Box as="div">
                  <Box as="h2" className="text-lg font-semibold">
                    Michael Ani
                  </Box>
                  <Box as="h3" className="text-xs">
                    Mentor
                  </Box>
                </Box>
              </Box>
            </Card>
          </Box>
        </Card>
      </Box>
    </Box>
  );
};

export default AdminGroupDetails;
