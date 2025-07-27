'use client';

import * as React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';

import { cn } from '@/lib/utils';

export function AvatarContainer({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root>) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(
        'relative flex size-8 shrink-0 overflow-hidden rounded-full',
        className
      )}
      {...props}
    />
  );
}

export function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn('aspect-square size-full', className)}
      {...props}
    />
  );
}

export function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        'bg-primary flex size-full items-center justify-center rounded-full text-white',
        className
      )}
      {...props}
    />
  );
}

interface AvatarProps extends React.ComponentProps<typeof AvatarContainer> {
  src: string;
  alt?: string;
  fallBack?: string;
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  fallBack,
  className,
}) => {
  return (
    <AvatarContainer className={className}>
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback>{fallBack ?? 'M'}</AvatarFallback>
    </AvatarContainer>
  );
};
