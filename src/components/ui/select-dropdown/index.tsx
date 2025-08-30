import React from 'react';
import Select from 'react-select';

import Box from '../box';

export interface SelectDropdownTypes {
  defaultValue?: any;
  onChange?: any;
  styles?: string | any;
  disbaled?: boolean;
  options: { value: string | number; label: string }[];
  multiSelect?: any;
  textTransform?: string;
  loading?: boolean;
  name?: string;
  label?: string | undefined;
  error?: boolean;
  showLabel?:boolean
  errorMessage?: string;
  placeholder?: string;
  className?:string
  customStyle?:string
  customBg?:string
  noIcon?:boolean
  onInputChange?: (inputValue: string) => void;
  scrollRef?: React.RefObject<HTMLDivElement | null>;
}

const SelectDropdown = React.forwardRef(function SelectDropdown(
  {
    defaultValue,
    customStyle,
    onInputChange,
    onChange,
    className,
    customBg,
    styles,
    disbaled,
    showLabel=true,
    options,
    multiSelect,
    textTransform,
    loading,
    name,
    label,
    error,
    noIcon,
    errorMessage,
    placeholder,
    scrollRef,
    ...rest
  }: SelectDropdownTypes,
   ref:any
) {

  // select dropdown custom styles
  const selectCustomStyles = {
    menu: (provided: any) => ({
      ...provided,
      fontSize: '14px',
      textTransform: textTransform || 'capitalize',
      zIndex: 100,
      
    }),
    menuPortal: (provided:any) => ({ ...provided, zIndex: 9999 }),

    placeholder: (provided: any) => ({
      ...provided,
      color: '#A0A6AC',
    }),

    control: (provided: any, state: { isFocused: any }) => ({
      ...provided,
      minHeight: '44px',
      fontSize: '14px',
      color: error ? '#fd3d3d' : `${state.isFocused ? 'green' : '#E7EDF2'}`,
      borderRadius: customStyle ? customStyle : '32px',
      textTransform: textTransform || 'capitalize',
      backgroundColor: error ? '#fd3d3d0f' : `${customBg ? '' : '#FAFAFA'}`,
      boxShadow: 'none',
      cursor:"pointer",
      border: '1px solid #EDEEEF',
      '&:hover':{
        border: '2px solid #0A7B7B',
      }
    }),

    option: (provided: any, state: { isSelected: any; isFocused: any }) => ({
      ...provided,
      color: `${
        state.isSelected ? '#fff' : state.isFocused ? '#20282e' : '#20282e'
      }`,
      backgroundColor: state.isSelected
        ? '#0A7B7B'
        : state.isFocused
        ? '#F6F9FB'
        : '',
    }),

    singleValue: (provided: any, state: { isDisabled: any }) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';

      return { ...provided, opacity, transition };
    },
  };

  return (
    <Box as='div' ref={ref} className={`${className}`}>
      {
        showLabel && <Box as='div' className="mb-1 -mt-[2px] font-normal">
        <Box as='label' htmlFor={name} className='text-sm font-semibold'>
            {label}
        </Box>
      </Box>
      }
      {multiSelect ? (
        <Select
          isMulti
          components={{
            DropdownIndicator: () => (
              <Box as='span' className="pr-4">
                <svg
                  width="14"
                  height="8"
                  viewBox="0 0 14 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L7 7L13 1"
                    stroke="#838383"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Box>
            ),
            IndicatorSeparator: () => null,
          }}
          isDisabled={disbaled}
          defaultValue={defaultValue}
          onChange={onChange}
          styles={styles || selectCustomStyles}
          options={options}
          onInputChange={onInputChange} //when changing the input
          menuPortalTarget={document.body}
           menuPosition="fixed"
          onMenuOpen={() => {
            scrollRef?.current?.scrollIntoView({ behavior: "smooth", block: "center" });
          }}
          name={name}
          placeholder={placeholder && placeholder}
          {...rest}
        />
      ) : (
        <Select
          components={{
            
            DropdownIndicator: noIcon ? () => (
              <></>
            ) : () => (
              <span className="pr-4">
                <svg
                  width="14"
                  height="8"
                  viewBox="0 0 14 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L7 7L13 1"
                    stroke="#838383"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            ),
            IndicatorSeparator: () => null,
          }}
          isDisabled={disbaled}
          defaultValue={defaultValue || 'Month'}
          onChange={onChange}
          styles={styles || selectCustomStyles}
          options={options}
          name={name}
          isLoading={loading}
          onInputChange={onInputChange}
          menuPortalTarget={document.body}
           menuPosition="fixed"
          onMenuOpen={() => {
            scrollRef?.current?.scrollIntoView({ behavior: "smooth", block: "center" });
          }}
          placeholder={placeholder && placeholder}
          {...rest}
        />
      )}
      {error && (
        <Box className="m">
          {error && <small style={{ color: '#e11900' }}>{errorMessage}</small>}
        </Box>
      )}
    </Box>
  );
});

export default SelectDropdown;
