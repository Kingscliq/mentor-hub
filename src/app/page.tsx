'use client';

import Box from '@/components/ui/box';
import { Button } from '@/components/ui/button';
import { Groups, GroupSlider, mockGroups } from '@/features';
import LoginForm from '@/features/auth/login-form';
import RegisterForm from '@/features/auth/register-form';
import GroupCard from '@/features/dashboard/components/group-card';

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

      <GroupSlider percent={50} studentTotal={100} title="Group Project" />
      <RegisterForm />
      <LoginForm />
      <Groups groups={mockGroups} />
      <GroupCard name="Group 1" profileUrl="/path/to/image.jpg" role="Admin" />
    </>
  );
}
