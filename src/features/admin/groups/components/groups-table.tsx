'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  ColumnDef,
  createColumnHelper,
  PaginationState,
} from '@tanstack/react-table';
import { Ellipsis, Eye, SquarePen, Users } from 'lucide-react';

import { Dispatch, SetStateAction, useState } from 'react';
import { CustomTable } from '@/components/ui/table/new-table';
import Box from '@/components/ui/box';
import ConfirmationModal from '@/components/modals/confirmation-modal';
import MainModal from '@/components/modals';
import AddGroupsForm from '../widgets/add-group-form';
import { useRouter } from 'next/navigation';
import { getDateTimeOnly } from '@/utils/formatter';
import { ICreateGroupPayload, IGroupsList } from '@/types/features/groups';

const GroupsTable = ({
  data = [],
  paginationState,
  setPaginationState,

  totalItemsCount,
  isLoadingData,
  searchTerm,
  refetch,
  handleAddGroups,
}: {
  data?: IGroupsList[];
  paginationState?: PaginationState;
  setPaginationState?: Dispatch<
    SetStateAction<{
      pageIndex: number;
      pageSize: number;
    }>
  >;
  pageCount?: number;
  totalItemsCount: number;
  itemsPerPageOptions?: number[];
  isLoadingData?: boolean;
  searchTerm?: string;
  refetch: () => void;
  handleAddGroups: () => void;
}) => {
  const columnHelper = createColumnHelper<IGroupsList>();
  const [clickedItem, setClickedItem] = useState<ICreateGroupPayload>({
    name: '',
    maximumGroupSize: '' as unknown as number,
  });
  const [openEditModal, setOpenEditModal] = useState<boolean>(false);
  const [openDeactivateModal, setOpenDeactivateModal] =
    useState<boolean>(false);

  const router = useRouter();
  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const customEmptyState = (
    <Box
      as="div"
      onClick={handleAddGroups}
      className="flex flex-col items-center justify-center py-12"
    >
      <Users
        size={48}
        className="text-gray-400 mb-2 bg-gray-100 p-2 rounded-full"
      />
      <Box as="h4" className="text-black text-xl font-medium mb-2">
        No Group Created Yet
      </Box>
      <Box as="h6" className="text-gray-600 text-sm font-medium mb-4">
        Create a new Group
      </Box>
      <Button
        onClick={handleAddGroups}
        className="h-10 bg-primary cursor-pointer hover:bg-primary-dark"
      >
        + Add New Group
      </Button>
    </Box>
  );
  const columns = [
    columnHelper.accessor('_id', {
      id: '_id',
      size: 60,
      cell: ({ row }) => <span>{row.index + 1}</span>,
      header: () => <span className="text-xs">S/N</span>,
    }),
    columnHelper.accessor('name', {
      id: 'name',
      size: 100,
      cell: info => info.getValue(),
      header: () => <span className="text-xs uppercase">Group Name</span>,
    }),
    columnHelper.accessor('createdAt', {
      id: 'role',
      size: 120,
      cell: info => getDateTimeOnly(info.getValue()),
      header: () => <span className="text-xs uppercase">Created Date</span>,
    }),
    {
      id: 'actions',
      header: () => <span className="text-xs uppercase">Actions</span>,
      cell: ({ row }) => {
        const rowData = row.original;
        const row_id = rowData._id;
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="data-[state=open]:bg-muted cursor-pointer text-muted-foreground flex size-8"
                size="icon"
              >
                <Ellipsis className="rotate-90" />
                <span className="sr-only">Open menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={e => {
                  stopPropagation(e);
                  setClickedItem(rowData);
                  router.push(`/admin/groups/${row_id}`);
                }}
              >
                {' '}
                <Eye /> View
              </DropdownMenuItem>
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={e => {
                  stopPropagation(e);
                  setOpenEditModal(true);
                  setClickedItem(rowData);
                }}
              >
                <SquarePen />
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={e => {
                  stopPropagation(e);
                  setOpenDeactivateModal(true);
                  setClickedItem(rowData);
                }}
              >
                Deactivate
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ] as Array<ColumnDef<IGroupsList, unknown>>;

  return (
    <>
      <CustomTable
        data={data}
        columns={columns}
        totalItemsCount={totalItemsCount}
        hidePagination={isLoadingData}
        isLoadingData={isLoadingData as boolean}
        noDataDesc="No Data Found"
        searchTerm={searchTerm}
        customEmptyState={customEmptyState}
        setPaginationState={setPaginationState}
        paginationState={paginationState}
      />

      {/* Edit User Modal */}

      {openEditModal && (
        <MainModal
          title="Edit Group"
          open={openEditModal}
          onClose={() => setOpenEditModal(false)}
        >
          <AddGroupsForm
            groupsPayload={clickedItem}
            actionType="edit"
            onClose={() => setOpenEditModal(false)}
            refetch={refetch}
          />
        </MainModal>
      )}

      {/* Deactivate User Modal */}
      <MainModal
        title="Deactivate Group"
        open={openDeactivateModal}
        onClose={() => setOpenDeactivateModal(false)}
      >
        <ConfirmationModal
          desc={`Are you sure you want to deactivate <span class="font-bold">${clickedItem?.name}</span> ? This will prevent them from accessing the system.`}
          handleBtn1={() => setOpenDeactivateModal(false)}
          handleBtn2={() => {}}
          btn1Text="Cancel"
          btn2Text="Confirm Deactivate"
          btn2Style="bg-red-700 text-white hover:bg-red-900"
        />
      </MainModal>
    </>
  );
};

export default GroupsTable;
