import * as React from 'react';
import { cn } from '@/lib/utils';
import { InputProps } from '@/types/components/input';
import Box from '@/components/ui/box';

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helperText,
      error,
      iconLeft,
      iconRight,
      className,
      id,
      type = 'text',
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId();
    const inputId = id ?? generatedId;

    return (
      <Box className="space-y-1">
        {label && (
          <Box
            as="label"
            htmlFor={inputId}
            className="text-sm font-medium leading-none"
          >
            {label}
          </Box>
        )}

        <Box className="relative">
          {iconLeft && (
            <Box
              as="span"
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            >
              {iconLeft}
            </Box>
          )}

          <Box
            as="input"
            id={inputId}
            ref={ref}
            type={type}
            data-slot="input"
            aria-invalid={!!error}
            className={cn(
              'appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm',
              iconLeft && 'pl-8',
              iconRight && 'pr-8',
              error && 'border-red-500 focus:border-red-500 focus:ring-red-500',
              className
            )}
            {...props}
          />

          {iconRight && (
            <Box
              as="span"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            >
              {iconRight}
            </Box>
          )}
        </Box>

        {error ? (
          <Box as="p" className="text-xs text-red-500">
            {error}
          </Box>
        ) : helperText ? (
          <Box as="p" className="text-xs text-muted-foreground">
            {helperText}
          </Box>
        ) : null}
      </Box>
    );
  }
);

Input.displayName = 'Input';

export { Input };
