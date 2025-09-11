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
import Loader from '@/components/ui/page-loader';

const AdminGroupDetails = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { id } = useParams();
  const { data: singleGroup, isLoading } = useGetSingleGroup(String(id));

  return (
    <Box as="main" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Box
        as="a"
        href="/admin/groups"
        className="hover:bg-[#dedbdb] rounded-full size-10 justify-center flex flex-col items-center"
      >
        <ChevronLeft />
      </Box>

      {isLoading && <Loader />}

      {!isLoading && typeof singleGroup !== 'undefined' && (
        <Box className="mt-10">
          <Box
            as="h2"
            className="text-2xl flex justify-between font-bold mb-5 capitalize"
          >
            Group: {singleGroup?.name || '---'}{' '}
            <Button
              onClick={() => setOpen(true)}
              className="flex ml-auto cursor-pointer bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              <Plus /> Add User
            </Button>
          </Box>
          <MainModal
            title="Add User"
            open={open}
            onClose={() => setOpen(false)}
          >
            <AddUser open={open} onClose={() => setOpen(false)} />
          </MainModal>
          <Card className="py-10 px-0">
            <Box as="h3" className="text-black font-bold mb-4 px-4">
              Supervisor
            </Box>
            <Box as="div" className="px-4">
              {singleGroup?.supervisor && (
                <Card className="py-10 px-0">
                  <Box as="div" className="flex items-center gap-x-5 px-4">
                    <Box>
                      <Image src={User2} alt="" width={40} />
                    </Box>
                    <Box as="div">
                      <Box as="h2" className="text-lg font-semibold capitalize">
                        {singleGroup?.supervisor?.firstName ?? '-'}{' '}
                        {singleGroup?.supervisor?.lastName ?? '-'}
                      </Box>
                      <Box as="h3" className="text-xs">
                        {singleGroup?.supervisor?.role}
                      </Box>
                    </Box>
                  </Box>
                </Card>
              )}
              {!isLoading && !singleGroup?.supervisor && (
                <Box>
                  <Alert variant="destructive">
                    <AlertCircleIcon />
                    <AlertTitle>No Supervisor Assigned Yet</AlertTitle>
                    <AlertDescription>
                      <Box as="p">To assign a supervisor:</Box>
                      <Box as="ul" className="list-inside list-disc text-sm">
                        <Box as="li">
                          Click the &quot;Add User&quot; button.
                        </Box>
                        <Box>
                          Select &quot;Supervisor&quot; from the options.
                        </Box>
                        <Box>
                          Choose the user you want to assign from the list.
                        </Box>
                        <Box>
                          Click &quot;Save User&quot; to assign the supervisor.
                        </Box>
                      </Box>
                    </AlertDescription>
                  </Alert>
                </Box>
              )}
            </Box>

            <Box as="div" className="px-4">
              <Box as="h3" className="text-black font-bold mb-4">
                Students
              </Box>
              {Array.isArray(singleGroup?.users) &&
                singleGroup?.users?.map(item => {
                  return (
                    <Card className="my-2" key={item._id}>
                      <Box as="div" className="flex items-center gap-x-5 px-4">
                        <Box>
                          <Image src={User2} alt="" width={40} />
                        </Box>
                        <Box as="div">
                          <Box key={item?._id}>
                            <Box
                              as="h2"
                              className="text-lg font-semibold capitalize"
                            >
                              {item?.firstName} {''}
                              {item?.lastName}
                            </Box>
                            <Box as="h3" className="text-xs">
                              {item?.role}
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Card>
                  );
                })}

              {!isLoading && singleGroup?.users.length < 1 && (
                <Box>
                  <Alert variant="destructive">
                    <AlertCircleIcon />
                    <AlertTitle>No Student Assigned Yet</AlertTitle>
                    <AlertDescription>
                      <Box as="p">To assign a student:</Box>
                      <Box as="ul" className="list-inside list-disc text-sm">
                        <Box as="li">
                          Click the &quot;Add User&quot; button.
                        </Box>
                        <Box>Select &quot; Student&quot; from the options.</Box>
                        <Box>
                          Choose the user you want to assign from the list.
                        </Box>
                        <Box>
                          Click &quot;Save User&quot; to assign the student.
                        </Box>
                      </Box>
                    </AlertDescription>
                  </Alert>
                </Box>
              )}
            </Box>
          </Card>
        </Box>
      )}
    </Box>
  );
};

export default AdminGroupDetails;
