import Box from '@/components/ui/box';
import Loader from '@/components/ui/page-loader';
import { PaginationProps } from '@/types/components/table';
import clsx from 'clsx';
import { ArrowBigLeft } from 'lucide-react';
import * as React from 'react';

export type RenderTableBody<T> = {
  index?: number;
  row?: T;
  getRowProp?: T;
};

export interface ITablePaginationProps {
  currentCount: number;
  count: number;
  rowPerPage: number;
  page: number;
  onChangePage?: (page: number) => void;
}

interface IFullTableProps<T> {
  className?: string | Array<string>;
  elements: T[] | undefined;
  headerBgColor?: string;
  loading: boolean;
  loadingInfoText?: string;
  onChangePage?: (page: number) => void;
  pagination?: PaginationProps;
  RenderHeader: () => React.JSX.Element;
  RenderNoData?: () => React.JSX.Element;
  RenderBody: React.ElementType<RenderTableBody<T>>;
  getRowProps?: (row: unknown) => void;
}

const FullTable = <T extends object>({
  elements,
  loading,
  loadingInfoText,
  onChangePage,
  pagination,
  RenderHeader,
  RenderNoData,
  RenderBody,
  getRowProps,
}: IFullTableProps<T>) => {
  const id = React.useId();
  return (
    <Box className="w-full mt-8">
      <Box>
        <Box
          as="table"
          aria-label="collapsible table"
          aria-labelledby="Transaction Table"
        >
          <Box as="thead" className="text-primary-main">
            {RenderHeader && <RenderHeader />}
          </Box>
          <Box className="bg-white">
            {loading ? (
              <Box>
                <Box className="">
                  <Box
                    className="animate-pulse bg-slate-100 flex flex-col justify-center items-center py-5 rounded-md"
                    as="div"
                  >
                    <Box className="flex flex-col justify-center items-center space-y-3">
                      <Loader />
                    </Box>
                    {loadingInfoText ? (
                      <Box as="p" className="text-center mt-3 ">
                        {loadingInfoText}
                      </Box>
                    ) : null}
                  </Box>
                </Box>
              </Box>
            ) : (!loading && elements?.length === 0) ||
              typeof elements === 'undefined' ? (
              <Box className="odd:bg-white even:bg-slate-50">
                <Box>
                  <Box className="pl-12 sm:pl-0 flex md:justify-center items-center py-5 rounded-md">
                    {RenderNoData ? (
                      <RenderNoData />
                    ) : (
                      "There's no data to display"
                    )}
                  </Box>
                </Box>
              </Box>
            ) : (
              Array.isArray(elements) &&
              elements?.map((row: T, index: number) => {
                const rowProps = Object.assign({}, getRowProps, { ...row });
                return (
                  <RenderBody
                    key={index.toString() + id}
                    row={row}
                    index={index}
                    getRowProp={rowProps}
                  />
                );
              })
            )}
          </Box>
        </Box>
      </Box>
      {typeof elements !== 'undefined' &&
        elements?.length > 0 &&
        pagination && (
          <TablePagination
            count={pagination?.count}
            currentCount={elements?.length}
            page={pagination?.page_index}
            onChangePage={onChangePage}
            rowPerPage={pagination?.page_size}
          />
        )}
    </Box>
  );
};

const TablePagination: React.FC<ITablePaginationProps> = ({
  count,
  currentCount,
  onChangePage,
  page,
  rowPerPage,
}) => {
  const totalPages = Math.ceil(count / rowPerPage);
  const firstIndex = page * rowPerPage - rowPerPage + 1;

  const handleBackButton = React.useCallback(
    () => onChangePage && onChangePage(page - 1),
    [onChangePage, page]
  );
  const handleNextButton = React.useCallback(
    () => onChangePage && onChangePage(page + 1),
    [onChangePage, page]
  );

  return (
    <Box className="flex flex-row align-baseline justify-center w-full py-6 items-center">
      <Box
        className="disabled:bg-[#F3F3F6] disabled:opacity-40 disabled:text-primary-600 bg-primary-main text-white border-[1px] border-slate-300  p-2 px-4 rounded-lg disabled:cursor-not-allowed"
        as="button"
        disabled={page <= 1}
        onClick={handleBackButton}
      >
        <Box className="flex items-center gap-4">
          <ArrowBigLeft />
          <Box
            as="p"
            className="hidden sm:block text-tiny font-primary font-medium px-2"
          >
            Previous
          </Box>
        </Box>
      </Box>
      <Box className="mx-6 flex flex-row items-center">
        <Box as="p" className="text-primary-600 font-semibold text-tiny">
          Page {page}
        </Box>
        &nbsp; | &nbsp;
        <Box
          as="p"
          className="font-semibold text-tiny font-primary text-primary-600"
        >
          {firstIndex} - {Math.min(firstIndex + currentCount - 1, count)} of{' '}
          {count}
        </Box>
      </Box>
      <Box
        className="disabled:bg-[#F3F3F6] disabled:text-primary-600 disabled:opacity-40 bg-primary-main text-white border-[1px] border-slate-300  p-2 px-4 rounded-lg disabled:cursor-not-allowed"
        as="button"
        disabled={page === totalPages}
        onClick={handleNextButton}
      >
        <Box className="flex items-center gap-4">
          <Box
            as="p"
            className="hidden sm:block text-tiny font-primary font-medium px-2"
          >
            Next
          </Box>
          <ArrowBigLeft />
        </Box>
      </Box>
    </Box>
  );
};

type TableCellProp = {
  className?: string;
  children?: React.ReactNode;
};

export const TD = ({ children }: TableCellProp): React.JSX.Element => {
  return (
    <Box
      className={clsx(
        'bg-transparent font-medium font-primary capitalize text-xs text-[#64748B] border-slate-300 p-4 sm:text-left sticky top-0 leading-6'
      )}
      as="td"
      scope="col"
    >
      {children}
    </Box>
  );
};

export const TH = ({ children, ...rest }: TableCellProp): React.JSX.Element => {
  return (
    <Box
      className={clsx(
        'bg-transparent text-tiny font-medium font-primary uppercase text-[#64748B] border-slate-300 p-4 sm:text-left sticky top-0 leading-6'
      )}
      as="th"
      scope="col"
      {...rest}
    >
      {children}
    </Box>
  );
};

export default FullTable;
