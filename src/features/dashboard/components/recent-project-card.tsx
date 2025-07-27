import Box from '@/components/ui/box';
import React from 'react';

export interface RecentProjectCardProps {
  title: string;
  description: string;
  status: 'in progress' | 'completed' | 'pending';
  milestones: {
    completed: number;
    total: number;
  };
}

const statusColorMap: Record<string, string> = {
  'in progress': 'bg-blue-100 text-blue-700',
  completed: 'bg-green-100 text-green-700',
  pending: 'bg-amber-100 text-amber-700',
};

export const RecentProjectCard: React.FC<RecentProjectCardProps> = ({
  title,
  description,
  status,
  milestones,
}) => {
  return (
    <Box className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
      <Box as="h3" className="font-semibold text-gray-900">
        {title}
      </Box>
      <Box as="p" className="text-sm text-gray-600 mt-1">
        {description}
      </Box>
      <Box className="flex items-center justify-between mt-3">
        <Box
          as="span"
          className={`text-xs font-medium px-2 py-1 rounded-full ${statusColorMap[status]}`}
        >
          {status}
        </Box>
        <Box as="span" className="text-sm text-gray-500">
          {milestones.completed} / {milestones.total} milestones
        </Box>
      </Box>
    </Box>
  );
};
