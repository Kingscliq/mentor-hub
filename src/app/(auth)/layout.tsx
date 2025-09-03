import Box from '@/components/ui/box';
import { GraduationCap } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Mentor Hub Auth',
  description: 'A web-based mentorship platform for reasearch students',
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box
      as="section"
      className="h-screen w-screen bg-white flex items-center justify-center relative"
    >
      <Box className="flex items-center absolute top-0 left-0 p-4">
        <Link href="/" className="flex items-center space-x-2">
          <GraduationCap className="h-8 w-8 text-blue-600" />
          <Box as="span" className="text-xl font-bold text-gray-900">
            MentorHub
          </Box>
        </Link>
      </Box>
      {children}
    </Box>
  );
}
