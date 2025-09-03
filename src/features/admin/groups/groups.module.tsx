'use client';

import { Button } from '@/components/ui';
import Box from '@/components/ui/box';
import Search from '@/components/ui/search';
import { Bookmark, ChevronLeft, Plus } from 'lucide-react';
import React, { useState } from 'react';
import useDebounce from '@/hooks/dashboard';
import MainModal from '@/components/modals';
import AddGroupsForm from './widgets/add-group-form';
import GroupsTable from './components/groups-table';
import { useGetAllGroups } from './api';
import { toast } from 'sonner';
import { IGroupsList } from '@/types/features/groups';

export interface GroupDataI {
  _id: string;
  name: string;
  num_of_mentors: number;
  num_of_mentees: number;
  created_at: string;
  status: string;
  maximum_size: number;
}

export const userTabs = [
  {
    id: '1',
    category: 'all',
    role: 'all',
  },
  {
    id: '2',
    category: 'mentors',
    role: 'mentor',
  },
  {
    id: '3',
    category: 'mentees',
    role: 'mentee',
  },
];

export const userData: GroupDataI[] = [
  {
    _id: '1',
    name: 'Ami Vivian',
    num_of_mentors: 2,
    num_of_mentees: 3,
    created_at: 'march 10 2025',
    status: 'active',
    maximum_size: 3,
  },
];
const AdminGroupModules = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [openAddGroupModal, setOpenAddGroupModal] = useState<boolean>(false);
  const [paginationState, setPaginationState] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  ///delays the search after typing
  const deboundedVal = useDebounce(searchTerm, 1500);
  //search functionality will be removed later

  const { data, isFetching, error, refetch } = useGetAllGroups('');

  const filtered = data?.groups?.filter(
    item =>
      item.name
        .toLowerCase()
        .includes(deboundedVal.toLowerCase()) as unknown as IGroupsList
  );

  if (error) {
    toast.error(
      error.message || 'An Error occured while fetching data try again'
    );
  }
  return (
    <Box as="main" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Box
        as="a"
        href="/dashboard"
        className="hover:bg-[#dedbdb] rounded-full size-10 justify-center flex flex-col items-center"
      >
        <ChevronLeft />
      </Box>
      <Box className="mt-10">
        <Box as="h2" className="text-2xl font-bold mb-5">
          Group Management
        </Box>
        <Box as="div" className="bg-white p-6">
          <Box
            as="section"
            className="flex flex-col md:flex-row md:justify-between md:items-center"
          >
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <Box as="div" className="flex items-center gap-x-3">
              <Button
                onClick={() => {}}
                className="flex bg-white border border-[#E4E4E7] text-black hover:text-white hover:border-none cursor-pointer"
              >
                {' '}
                <Bookmark size={34} /> Archive Groups
              </Button>
              <Button
                onClick={() => setOpenAddGroupModal(true)}
                className="flex  cursor-pointer"
              >
                {' '}
                <Plus /> Add New Group
              </Button>
            </Box>
          </Box>

          {/* Table */}
          <Box as="div">
            <GroupsTable
              data={filtered || []}
              handleAddGroups={() => setOpenAddGroupModal(true)}
              paginationState={paginationState}
              setPaginationState={setPaginationState}
              refetch={refetch}
              isLoadingData={isFetching}
              totalItemsCount={filtered?.length || 0}
            />
          </Box>
        </Box>
      </Box>
      <MainModal
        title="Add New Group"
        open={openAddGroupModal}
        onClose={() => setOpenAddGroupModal(false)}
      >
        <Box as="p" className="text-gray-500 text-sm">
          Create a new group account with the details below
        </Box>
        <AddGroupsForm
          refetch={refetch}
          actionType="add"
          onClose={() => setOpenAddGroupModal(false)}
          groupsPayload={{
            name: '',
            maximumGroupSize: '' as unknown as number,
          }}
        />
      </MainModal>
    </Box>
  );
};

export default AdminGroupModules;
