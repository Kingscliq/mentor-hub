import { X } from "lucide-react";
import Box from "./box";

interface SearchI {
  iconColor?: string;
  isLoading?: string;
  searchTerm: string;
  setSearchTerm: (e: string) => void;
  style?: string;
  placeholder?: string;
}
const Search: React.FC<SearchI> = ({ searchTerm, setSearchTerm, style, placeholder, iconColor }) => {
  return (
    <Box
      as='div'
      className={`rounded-[10px]  focus-within:border focus-within:border-[black] py-[0.78rem]  px-3 flex ${
        style ? style : 'bg-white border border-[#ece9e9]'
      } items-center justify-between gap-x-3 `}
    >
      {searchTerm.length > 1 ? (
        <X size={20} className='text-red-500 cursor-pointer' onClick={() => setSearchTerm('')} />
      ) : (
        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d="M21 21L16.65 16.65M11 6C13.7614 6 16 8.23858 16 11M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
            stroke={iconColor ? iconColor : "#042B2D"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
      <Box as="input"
        type='text'
        placeholder={placeholder ? placeholder : 'Search'}
        className='outline-none w-full bg-transparent placeholder:text-[#9a9898] placeholder:font-light'
        value={searchTerm}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
      />
    </Box>
  );
};

export default Search;