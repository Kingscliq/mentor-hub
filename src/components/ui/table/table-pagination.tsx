
import { PaginationState } from '@tanstack/react-table'
import { ChevronLeft } from 'lucide-react'
import Box from '../box'
interface CustomTableMethods {
  getAllColumns: () => Array<{
    id: string
    getCanHide: () => boolean
    getIsVisible: () => boolean
    toggleVisibility: (visible: boolean) => void
  }>
  getState: () => {
    pagination: {
      pageIndex: number
    }
  }
  setPageIndex: (value: number) => void
  previousPage: () => void
  nextPage: () => void
  getPageCount: () => number
  getCanPreviousPage: () => boolean
  getCanNextPage: () => boolean

  // other methods you're using from the table object
}

interface paginations {
  table: CustomTableMethods
  lastIndex: number
  activePageTab: number
  setActivePageTab: (value: number) => void
  handleNext: () => void
  setPaginationState: (state: PaginationState) => void
  paginationState:PaginationState
}
const toggleStyle =
  'flex flex-col outline-none cursor-pointer rounded-md items-center justify-center hover:bg-gray-200 bg-grey-lightGrey w-6 h-6 border border-[#E6E6E6]'
const pagebtnStyle =
  'flex flex-col outline-none items-center justify-center rounded-md w-6 h-6'

const DashboardTablePagination: React.FC<paginations> = ({
  table,
  activePageTab,
  setActivePageTab,
  setPaginationState,
  paginationState
}) => {

  return (
    <Box as='div' className="flex items-end justify-end gap-x-3 z-0 ">
      <Box as='div' className="flex items-center gap-x-2">
       
        <Box
         as='button'
          className={toggleStyle}
          disabled={!table.getCanPreviousPage()}
          onClick={() => {
            setActivePageTab(table.getState().pagination.pageIndex - 1)
            setPaginationState({pageIndex:paginationState.pageIndex-1, pageSize:30})
          }}
        >
          <ChevronLeft/>
        </Box>
        <Box as='div' className="flex items-center gap-x-2 ">
          {[1, 2, 3].map((num) => (
            <Box as='button'
             key={num}
              className={`${pagebtnStyle} text-black cursor-pointer ${
                num === activePageTab + 1 ? 'border border-[#2c0a0a]' : 'border border-gray-200'
              }`}
              // disabled={!table.getCanNextPage()}
              onClick={() => {
                setActivePageTab(num - 1)
                setPaginationState({pageIndex:num-1, pageSize:30})
              }}
            >
              {num}
            </Box >
          ))}
          <p>...</p>
          {activePageTab > 2 && (
            <Box as='button'
              className={`${pagebtnStyle} text-black border border-[#2c0a0a]
              }`}
              onClick={() => {
                setPaginationState({pageIndex:activePageTab,pageSize:30})
                setActivePageTab(activePageTab)
              }}
            >
              {activePageTab + 1}
            </Box>
          )}
        </Box>
        <Box as='button'
          className={toggleStyle}
          disabled={!table.getCanNextPage()}
          onClick={() => {
            
            // table.nextPage()
            setActivePageTab(table.getState().pagination.pageIndex + 1)
            setPaginationState({pageIndex:paginationState.pageIndex + 1, pageSize:30})
          }}
        >
           <ChevronLeft className="rotate-180 " />
        </Box>
      </Box>
    </Box>
  )
}

export default DashboardTablePagination
