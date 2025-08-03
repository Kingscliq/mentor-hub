'use client'
import { JSX, ReactNode, useState } from "react";
import {
  ColumnDef,
  PaginationState,
  SortingState,
  RowData,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getSortedRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  VisibilityState,
  RowSelectionState,
} from "@tanstack/react-table";

import TableSkeletonLoader from "./tableskeleton-loader";
import DashboardTablePagination from "./table-pagination";
import LoadingBar from "../page-loader/horizontal-loader";
import { useRouter } from "next/navigation";
import { ArrowDownUp } from "lucide-react";

export interface TableProps<T extends RowData> {
  columns: ColumnDef<T, unknown>[];
  pageCount?: number;
  children?: ReactNode;
  paginationState?: PaginationState;
  setPaginationState?: (state: PaginationState) => void;
  data: T[];
  totalItemsCount: number;
  customHeaderContainerClass?: string;
  itemsPerPageOptions?: number[];
  hidePagination?: boolean;
  isLoadingData: boolean;
  noDataDesc: string;
  linkTexts?: string;
  linkUrl?: string;
  rowClickable?: string;
  searchTerm?: string;
  openModal?: boolean;
  handleOpenModal?: any;
  subsequentLoad?: boolean;
  showClickable?: any;
  customEmptyState: JSX.Element;
}

function Table<T extends RowData>({
  columns,
  data,
  children,
  pageCount,
  isLoadingData,
  totalItemsCount,
  rowClickable,
  openModal,
  handleOpenModal,
  paginationState,
  customEmptyState,
  setPaginationState,
}: TableProps<T>) {
  //local state for sorting
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
  const [activePageTab, setActivePageTab] = useState(0);
  const table = useReactTable({
    data: data,
    columns,
    pageCount,
    manualPagination: true,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      // globalFilter: searchTerm, // remove on production
      columnVisibility,
      rowSelection,
      pagination: {
        pageSize: (paginationState?.pageSize as number) || 30,
        pageIndex: paginationState?.pageIndex as number,
      },
    },
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    debugTable: true,
  });
  const lastIndex = table.getPageOptions().length - 1;
  const handleNext = () => {
    setActivePageTab((prev) => prev + 1);
  };

  const navigate = useRouter();
  const handleNavigation = (id: any) => {
    if (rowClickable) {
      navigate.push(`${rowClickable}/${id._id}`);
      // dispatch(changeActiveNav(activeTab))
    } else if (openModal) {
      handleOpenModal(id._id);
    }

    return;
  };

  if (isLoadingData && data.length < 1) {
    return <TableSkeletonLoader />;
  }

  return (
    <>
      <div
        className={`hidden no-scrollbar ${
          children && "bg-white rounded-xl py-3 "
        } mt-2 md:flex h-fit w-full flex-col justify-between overflow-x-hidden `}
      >
        {children && <div className="px-6 pb-1">{children}</div>}
        {(isLoadingData && (data.length > 0)) && <LoadingBar/>}
          <div className="bg-white selection:  rounded-t-2xl rounded-b-2xl ">
            <div className="pb-4">
              <div className=" overflow-scroll no-scroll-track">
                <table
                  className={`z-0 flex h-fit  flex-col ${
                    children ? "mt-1" : "mt-5"
                  }  w-full rounded-md ${data.length > 0 && 'border border-[#E4E4E7]' } `}
                  id="table-container"
                  style={{ minWidth: table.getTotalSize() + 64 }}
                >
                  {table.getHeaderGroups().map((headerGroup) => (
                    <thead
                      key={headerGroup.id}
                      className={`flex w-full items-center ${
                        children ? "pt-3 rounded-md" : "rounded-md pt-3 "
                      } bg-white border border-[#E4E4E7] px-8  py-4  text-[#71717A] `}
                    >
                      {headerGroup.headers.map((header) => (
                        <tr
                          key={header.id}
                          className="flex py-1 items-center "
                          {...{
                            style: {
                              width: `${
                                (header.getSize() / table.getTotalSize()) * 100
                              }%`,
                            },
                          }}
                        >
                          {header.isPlaceholder ? null : (
                            <th
                              {...{
                                className: header.column.getCanSort()
                                  ? "cursor-pointer flex items-center gap-x-3 "
                                  : "cursor-pointer flex items-center gap-x-3 ",
                                onClick:
                                  header.column.getToggleSortingHandler(),
                              }}
                            >
                              {flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                              {
                                {
                                  asc: <ArrowDownUp/>,
                                  desc: (
                                    <ArrowDownUp className="rotate-180" />
                                  ),
                                }[
                                  (header.column.getIsSorted() as string) ??
                                    null
                                ]
                              }
                            </th>
                          )}
                          
                        </tr>
                      ))}
                    </thead>
                  ))}

                  {/* tbody */}

                  {data.length === 0 ? (
                 <tbody>
                  <tr className="flex flex-col items-center justify-center">
                    <td>{customEmptyState}</td>
                  </tr>
                 </tbody>
        ) : (
                  <tbody className="w-full ">
                    {table.getRowModel().rows.map((row) => { 
                      const id = row.original;
                      return (
                        <tr
                          key={row.id}
                          className={`flex w-full  border border-[#E4E4E7] px-8 py-2 text-[#71717A]  ${
                            rowClickable ||
                            (openModal &&
                              "cursor-pointer  pointer-events-auto")
                          }`}
                          // onMouseOver={() => showClickable(id as any)}
                          onClick={() => handleNavigation(id)}
                        >
                          {row.getVisibleCells().map((cell) => (
                            <td
                              key={cell.id}
                              className="flex items-center text-caption-s text-gray-1 "
                              {...{
                                style: {
                                  width: `${
                                    (cell.column.getSize() /
                                      table.getTotalSize()) *
                                    100
                                  }%`,
                                },
                              }}
                            >
                              {flexRender(
                                cell.column.columnDef.cell,
                                cell.getContext()
                              )}
                            </td>
                          ))}
                        </tr>
                      );
                    })}
                  </tbody>
  )}
                </table>
              </div>
            </div>
          </div>
        
        <section className="px-6 flex flex-row items-center justify-between py-3">
          <div>
            <p>
              Showing{" "}
              {table.getState().pagination.pageIndex *
                table.getState().pagination.pageSize +
                1}{" "}
              to{" "}
              {((table.getState().pagination.pageIndex + 1) *
                table.getState().pagination.pageSize) > totalItemsCount ? totalItemsCount : ((table.getState().pagination.pageIndex + 1) *
                table.getState().pagination.pageSize) }{" "}
              of {totalItemsCount} Entries
            </p>
          </div>
          <DashboardTablePagination
            table={table}
            handleNext={handleNext}
            lastIndex={lastIndex}
            activePageTab={activePageTab}
            setActivePageTab={setActivePageTab}
            setPaginationState={
              setPaginationState as (state: PaginationState) => void
            }
            paginationState={paginationState as PaginationState}
          />
        </section>
      </div>
      {/* 
    mobile */}
      <div className="flex md:hidden w-full mt-4 flex-col gap-y-4">
        {children && (
          <div className=" p-3 rounded-xl bg-white">
            {children}
            {isLoadingData && (data.length > 0) && <LoadingBar/>}
            {data.length === 0  && (
              <h2>Empty State</h2>
                // <EmptyState desc="Data Not Found" />
              )}
          </div>
        )}
        {
          !children && (isLoadingData && (data.length > 0)) && <LoadingBar/>
        }
        {!children &&
          data.length === 0 && <h2>Empty State</h2>}


        {table.getRowModel().rows.map((row) => {
          const id = row.original;

          return (
            <div
              key={row.id}
              onClick={() => handleNavigation(id)}
              className={`flex flex-col gap-y-4 w-full px-6  rounded-xl  bg-white py-4 border-b border-gray-200 ${
                rowClickable || (openModal && "cursor-pointer")
              } last:border-none`}
            >
              {table.getHeaderGroups().flatMap((headerGroup) =>
                headerGroup.headers.map((header) => {
                  const cell = row
                    .getVisibleCells()
                    .find((cell) => cell.column.id === header.id);
                  return (
                    <div
                      className={`flex flex-row justify-between w-full md:w-auto`}
                      key={header.id}
                    >
                      <span className="font-bold">
                        {header
                          ? flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )
                          : null}
                      </span>
                      <div
                        className={`
                         flex flex-row
                        `}
                      >
                        <span>
                          {cell
                            ? flexRender(
                                cell.column.columnDef.cell,
                                cell.getContext()
                              )
                            : null}
                        </span>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          );
        })}

        <section className="px-6 flex flex-col md:hidden py-3">
          <div>
            <p>
              Showing{" "}
              {table.getState().pagination.pageIndex *
                table.getState().pagination.pageSize +
                1}{" "}
              to{" "}
              {((table.getState().pagination.pageIndex + 1) *
                table.getState().pagination.pageSize) > totalItemsCount ? totalItemsCount : ((table.getState().pagination.pageIndex + 1) *
                table.getState().pagination.pageSize) }{" "}
              of {totalItemsCount} Entries
            </p>
          </div>
          <DashboardTablePagination
            table={table}
            handleNext={handleNext}
            lastIndex={lastIndex}
            activePageTab={activePageTab}
            setActivePageTab={setActivePageTab}
            setPaginationState={
              setPaginationState as (state: PaginationState) => void
            }
            paginationState={paginationState as PaginationState}
          />
        </section>
      </div>
    </>
  );
}

export { Table };
