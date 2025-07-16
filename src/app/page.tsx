'use client';
import Box from '@/components/ui/box';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <>
      <Box>Hello World!</Box>
      <Button> Click me</Button>
      <Box as="section" onClick={() => console.log('hello world')}>
        Hello world{' '}
      </Box>
    </>
  );
}
