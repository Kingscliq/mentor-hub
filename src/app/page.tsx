'use client';
import Box from '@/components/ui/box';
import { Button } from '@/components/ui/button';
import { Logger } from '@/lib';
import { toast } from 'sonner';

export default function Home() {
  return (
    <>
      <Box>Hello World!</Box>
      <Button>Click me</Button>
      <Button onClick={() => toast.success('Hello this is a success message')}>
        Click me
      </Button>
      <Box
        as="section"
        onClick={() => Logger.log('Hello this is an information')}
      >
        Hello world{' '}
      </Box>
    </>
  );
}
