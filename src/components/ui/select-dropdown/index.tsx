import React from 'react';
import Select from 'react-select';
import type {
  ActionMeta,
  GroupBase,
  OnChangeValue,
  PropsValue,
  StylesConfig,
} from 'react-select';

import Box from '../box';

export type Option = { value: string | number; label: string };

export interface SelectDropdownTypes {
  defaultValue?: PropsValue<Option>;
  onChange?: (
    newValue: OnChangeValue<Option, boolean>,
    actionMeta: ActionMeta<Option>
  ) => void;
  styles?: StylesConfig<Option, boolean, GroupBase<Option>>;
  disbaled?: boolean;
  options: Option[];
  multiSelect?: boolean;
  textTransform?: React.CSSProperties['textTransform'];
  loading?: boolean;
  name?: string;
  label?: string | undefined;
  error?: boolean;
  showLabel?: boolean;
  errorMessage?: string;
  placeholder?: string;
  className?: string;
  customStyle?: string;
  customBg?: string;
  noIcon?: boolean;
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
    showLabel = true,
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
  ref: React.Ref<HTMLDivElement>
) {
  // select dropdown custom styles
  const selectCustomStyles: StylesConfig<Option, boolean, GroupBase<Option>> = {
    menu: provided => ({
      ...provided,
      fontSize: '14px',
      textTransform: (textTransform ??
        'capitalize') as React.CSSProperties['textTransform'],
      zIndex: 100,
    }),
    menuPortal: provided => ({ ...provided, zIndex: 9999 }),

    placeholder: provided => ({
      ...provided,
      color: '#A0A6AC',
    }),

    control: (provided, state) => ({
      ...provided,
      minHeight: '44px',
      fontSize: '14px',
      color: error ? '#fd3d3d' : `${state.isFocused ? 'green' : '#E7EDF2'}`,
      borderRadius: customStyle ? customStyle : '32px',
      textTransform: (textTransform ??
        'capitalize') as React.CSSProperties['textTransform'],
      backgroundColor: error ? '#fd3d3d0f' : `${customBg ? '' : '#FAFAFA'}`,
      boxShadow: 'none',
      cursor: 'pointer',
      border: '1px solid #EDEEEF',
      '&:hover': {
        border: '2px solid #0A7B7B',
      },
    }),

    option: (provided, state) => ({
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

    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';

      return { ...provided, opacity, transition };
    },
  };

  return (
    <Box as="div" ref={ref} className={`${className}`}>
      {showLabel && (
        <Box as="div" className="mb-1 -mt-[2px] font-normal">
          <Box as="label" htmlFor={name} className="text-sm font-semibold">
            {label}
          </Box>
        </Box>
      )}
      {multiSelect ? (
        <Select
          isMulti
          components={{
            DropdownIndicator: () => (
              <Box as="span" className="pr-4">
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
            scrollRef?.current?.scrollIntoView({
              behavior: 'smooth',
              block: 'center',
            });
          }}
          name={name}
          placeholder={placeholder && placeholder}
          {...rest}
        />
      ) : (
        <Select
          components={{
            DropdownIndicator: noIcon
              ? () => <></>
              : () => (
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
          defaultValue={defaultValue}
          onChange={onChange}
          styles={styles || selectCustomStyles}
          options={options}
          name={name}
          isLoading={loading}
          onInputChange={onInputChange}
          menuPortalTarget={document.body}
          menuPosition="fixed"
          onMenuOpen={() => {
            scrollRef?.current?.scrollIntoView({
              behavior: 'smooth',
              block: 'center',
            });
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
