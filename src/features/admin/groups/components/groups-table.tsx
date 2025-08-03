'use client'
import {
  ColumnDef,
  PaginationState,
  createColumnHelper,
} from "@tanstack/react-table";

import { ReactNode, useState } from "react";
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
import { CircleEllipsis, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { GroupDataI } from "../groups.module";

const columnHelper = createColumnHelper<GroupDataI>();

const GroupsTable = ({
  data = [],
  paginationState,
  setPaginationState,
  pageCount,
  itemsPerPageOptions,
  totalItemsCount,
  isLoadingData,
  searchTerm,
  refetch,
}: {
  data?: GroupDataI[];
  paginationState?: PaginationState;
  setPaginationState?: (state: PaginationState) => void;
  pageCount?: number;
  totalItemsCount: number;
  itemsPerPageOptions?: number[];
  isLoadingData?: boolean;
  searchTerm?: string;
  refetch: () => void;
}) => {
  const [clickedTerm, setClickedTerm] = useState<GroupDataI>();

  const getClickedRow = (_rowId: string) => {
    const clickedItem = data.find((item) => item._id === _rowId);
    setClickedTerm(clickedItem);
  };

  const handleOpenModal = (_rowId: string) => {
    getClickedRow(_rowId);
  };

  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  

  const customEmptyState = (
    <div className="flex flex-col items-center justify-center py-12">
        <Users
            size={48}
            className="text-gray-400 mb-2 bg-gray-100 p-2 rounded-full"
        />
        <h4 className="text-black text-xl font-medium mb-2">
            No User Created Yet
        </h4>
        <h6 className="text-gray-600 text-sm font-medium mb-4">
           create a user new user 
        </h6>
        <Button
            onClick={() => {} }
            className="h-10 bg-primary hover:bg-primary-dark"
        >+ Add New User</Button>
    </div>
)
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
        size: 120,
        cell: (info) => info.getValue(),
        header: () => <span className="text-xs uppercase">Role</span>,
      }),
      columnHelper.accessor("status", {
        id: "status",
        size: 120,
        cell: (info) => <Badge variant={info.getValue() as 'completed'}>{info?.getValue() as ReactNode}</Badge> ,
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
      size: 40,
      header: () => <span className="text-xs uppercase">Actions</span>,
      cell: ({ row }) => {
        const rowData = row.original;
        const row_id = rowData._id;

        return (
          <DropdownMenu>
            <DropdownMenuTrigger className="cursor-pointer">
                <CircleEllipsis className="text-[#acacaf]"/>
            </DropdownMenuTrigger>
            <DropdownMenuContent >
              <DropdownMenuItem className="cursor-pointer">View</DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">Edit</DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ] as Array<ColumnDef<GroupDataI, unknown>>;

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
    </>
  );
};

export { GroupsTable };


