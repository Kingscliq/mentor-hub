import type { Metadata } from 'next';

import Box from '@/components/ui/box';
import Header from '@/components/common/nav-bar';

export const metadata: Metadata = {
  title: 'Mentor Hub Dashboard',
  description: 'A web-based mentorship platform for reasearch students',
};

export default function Dashboard({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box as="section" lang="en">
      <Header />
      {children}
    </Box>
  );
}
