import { BookOpen, Calendar } from 'lucide-react';

import Box from '@/components/ui/box';
import { Button } from '@/components/ui/button';
import { useMemo } from 'react';
import { useRouter } from 'next/navigation';

export const QuickActions = () => {
  const router = useRouter();
  const quickActions = useMemo(
    () => [
      {
        label: 'Submit New Project',
        icon: BookOpen,
        onClick: () => router.push('/projects'),
      },
      { label: 'Schedule Meeting', icon: Calendar, onClick: () => {} },
    ],
    [router]
  );
  return (
    <Box className="bg-white rounded-lg border border-gray-200 p-6">
      <Box as="h2" className="text-lg font-semibold mb-4">
        Quick Actions
      </Box>
      <Box className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {quickActions.map((action, idx) => {
          const Icon = action.icon;
          return (
            <Button
              key={idx}
              variant="outline"
              className="flex items-center justify-center gap-2 w-full"
              onClick={action.onClick}
            >
              <Icon className="w-5 h-5" />
              <Box as="span" className="font-medium">
                {action.label}
              </Box>
            </Button>
          );
        })}
      </Box>
    </Box>
  );
};
