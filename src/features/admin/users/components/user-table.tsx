import {
  ColumnDef,
  PaginationState,
  createColumnHelper,
} from "@tanstack/react-table";

import { useState } from "react";
import { Table } from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { UserDataI } from "../users.module";
import { CircleEllipsis, Eye, SquarePen, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Box from "@/components/ui/box";
import MainModal from "@/components/modals";
import AddUserForm from "../widgets/add-user-form";
import ConfirmationModal from "@/components/modals/confirmation-modal";

const columnHelper = createColumnHelper<UserDataI>();

const UsersTable = ({
  data = [],
  paginationState,
  setPaginationState,
  pageCount,
  itemsPerPageOptions,
  totalItemsCount,
  isLoadingData,
  handleAddUser,
  searchTerm,
  refetch,
}: {
  data?: UserDataI[];
  paginationState?: PaginationState;
  setPaginationState?: (state: PaginationState) => void;
  pageCount?: number;
  totalItemsCount: number;
  itemsPerPageOptions?: number[];
  isLoadingData?: boolean;
  searchTerm?: string;
  refetch:() => void;
  handleAddUser:() => void
}) => {
  const [clickedItem, setClickedItem] = useState<UserDataI>();
  const [openEditModal, setOpenEditModal] = useState<boolean>(false);
  const [openDeactivateModal, setOpenDeactivateModal] =
    useState<boolean>(false);

  const getClickedRow = (_rowId: string) => {
    const clickedItem = data.find((item) => item._id === _rowId);
    setClickedItem(clickedItem);
  };

  const handleOpenModal = (_rowId: string) => {
    getClickedRow(_rowId);
  };

  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const customEmptyState = (
    <Box as="div" onClick={handleAddUser} className="flex flex-col items-center justify-center py-12">
      <Users
        size={48}
        className="text-gray-400 mb-2 bg-gray-100 p-2 rounded-full"
      />
      <Box as="h4" className="text-black text-xl font-medium mb-2">
        No User Created Yet
      </Box>
      <Box as="h6" className="text-gray-600 text-sm font-medium mb-4">
        create a user new user
      </Box>
      <Button
        onClick={() => {}}
        className="h-10 bg-primary cursor-pointer hover:bg-primary-dark"
      >
        + Add New User
      </Button>
    </Box>
  );
  const columns = [
    columnHelper.accessor("_id", {
      id: "_id",
      size: 60,
      cell: ({ row }) => <span>{row.index + 1}</span>,
      header: () => <span className="text-xs">S/N</span>,
    }),

    columnHelper.accessor("name", {
      id: "name",
      size: 100,
      cell: (info) => info.getValue(),
      header: () => <span className="text-xs uppercase">Name</span>,
    }),

    columnHelper.accessor("email", {
      id: "email",
      size: 120,
      cell: (info) => info.getValue(),
      header: () => <span className="text-xs uppercase">Email</span>,
    }),
    columnHelper.accessor("role", {
      id: "role",
      size: 100,
      cell: (info) => info.getValue(),
      header: () => <span className="text-xs uppercase">Role</span>,
    }),
    columnHelper.accessor("status", {
      id: "status",
      size: 100,
      cell: (info) => (
        <Badge variant={info.getValue() as "completed"}>
          {info.getValue()}
        </Badge>
      ),
      header: () => <span className="text-xs uppercase">Status</span>,
    }),
    columnHelper.accessor("assigned_group", {
      id: "assigned_group",
      size: 120,
      cell: (info) => info.getValue(),
      header: () => <span className="text-xs uppercase">Assigned Group</span>,
    }),

    {
      id: "actions",
      size: 140,
      header: () => <span className="text-xs uppercase">Actions</span>,
      cell: ({ row }) => {
        const rowData = row.original;
        const row_id = rowData._id;

        return (
          <Box as="div" className="flex items-center gap-x-2">
            <Box
              className=" border rounded-md p-2 hover:bg-gray-100"
              onClick={(e) => {
                stopPropagation(e);
                setOpenEditModal(true);
                setClickedItem(rowData);
              }}
            >
              <SquarePen />
            </Box>
            <Box
              className=" border rounded-md cursor-not-allowed hover:bg-gray-100 p-2"
              onClick={(e) => {
                stopPropagation(e);
                setClickedItem(rowData);
              }}
            >
              <Eye />
            </Box>
            <Box
              as="div"
              onClick={(e) => {
                stopPropagation(e);
                setOpenDeactivateModal(true);
                setClickedItem(rowData);
              }}
            >
              <Box as="h3" className="font-semibold hover:text-primary">
                Deactivate
              </Box>
            </Box>
          </Box>
        );
      },
    },
  ] as Array<ColumnDef<UserDataI, unknown>>;

  return (
    <>
      <Table
        data={data}
        columns={columns}
        paginationState={paginationState}
        setPaginationState={setPaginationState}
        pageCount={pageCount}
        itemsPerPageOptions={itemsPerPageOptions}
        totalItemsCount={totalItemsCount}
        hidePagination={isLoadingData}
        isLoadingData={isLoadingData as boolean}
        noDataDesc="No Data Found"
        searchTerm={searchTerm}
        customEmptyState={customEmptyState}
        openModal={true}
        handleOpenModal={handleOpenModal}
      />

      {/* Edit User Modal */}

      {openEditModal && (
        <MainModal
          title="Edit User"
          open={openEditModal}
          onClose={() => setOpenEditModal(false)}
        >
          <AddUserForm
            userDetails={clickedItem}
            actionType="edit"
            onClose={() => setOpenEditModal(false)}
          />
        </MainModal>
      )}

      {/* Deactivate User Modal */}
      <MainModal
        title="Deactivate User"
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

export { UsersTable };
