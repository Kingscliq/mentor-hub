'use client';
import Box from '@/components/ui/box';
import { Button } from '@/components/ui/button';
import RegisterForm  from '@/features/auth/RegisterForm';

export default function Home() {
  return (
    <>
      <Box>Hello World!</Box>
      <Button> Click me</Button>
      <Box as="section" onClick={() => console.log('hello world')}>
        Hello world{' '}
      </Box>
      <RegisterForm></RegisterForm>
    </>
  );
}
