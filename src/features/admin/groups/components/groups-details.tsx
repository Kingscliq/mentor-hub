'use client';
import { Button } from '@/components/ui';
import Box from '@/components/ui/box';
import { Card } from '@/components/ui/card';
import { AlertCircleIcon, ChevronLeft, Plus } from 'lucide-react';
import Image from 'next/image';
import { User2 } from '../../../../../public';
import MainModal from '@/components/modals';
import { useState } from 'react';
import AddUser from '@/features/admin/groups/widgets/add-user-form';
import { useGetSingleGroup } from '../api';
import { useParams } from 'next/navigation';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const AdminGroupDetails = () => {
  const [open, setOpen] = useState<boolean>(false);

  const { id } = useParams();
  const { data: singleGroup } = useGetSingleGroup(String(id));

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
          Group: {singleGroup?.name || '---'}{' '}
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
            {singleGroup?.supervisor ? (
              <Card className="py-10 px-0">
                <Box as="h3" className="text-black font-bold mb-5">
                  Supervisor
                </Box>
                <Box as="div" className="flex items-center gap-x-5 px-4">
                  <Box>
                    <Image src={User2} alt="" width={40} />
                  </Box>
                  <Box as="div">
                    <Box as="h2" className="text-lg font-semibold">
                      {singleGroup?.supervisor || '---'}{' '}
                    </Box>
                    <Box as="h3" className="text-xs">
                      Supervisor
                    </Box>
                  </Box>
                </Box>
              </Card>
            ) : (
              <Box>
                <Alert variant="destructive">
                  <AlertCircleIcon />
                  <AlertTitle>No Supervisor Assigned Yet</AlertTitle>
                  <AlertDescription>
                    <p>To assign a supervisor:</p>
                    <ul className="list-inside list-disc text-sm">
                      <li>Click the &quot;Add User&quot; button.</li>
                      <li>
                        Select &quot;Supervisor&quot; from the options.
                      </li>
                      <li>Choose the user you want to assign from the list.</li>
                      <li>
                        Click &quot;Save User&quot; to assign the supervisor.
                      </li>
                    </ul>
                  </AlertDescription>
                </Alert>
              </Box>
            )}
          </Box>

          <Box as="div" className="px-4">
            <Box as="h3" className="text-black font-bold mb-4">
              Students
            </Box>

            <Card className="">
              <Box as="div" className="flex items-center gap-x-5 px-4">
                <Box>
                  <Image src={User2} alt="" width={40} />
                </Box>
                <Box as="div">
                  {singleGroup?.users.map(item => (
                    <Box key={item?._id}>
                      <Box as="h2" className="text-lg font-semibold">
                        {item?.firstName} {''}
                        {item?.lastName}
                      </Box>
                      <Box as="h3" className="text-xs">
                        {item?.role}
                      </Box>
                    </Box>
                  ))}
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
