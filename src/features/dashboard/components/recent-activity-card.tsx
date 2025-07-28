import React from 'react';
import Box from '@/components/ui/box';

export interface RecentActivityCardProps {
  title: string;
  description: string;
  status: 'completed' | 'in progress' | 'pending';
  timestamp: string;
}

const statusColorMap: Record<RecentActivityCardProps['status'], string> = {
  completed: 'bg-green-500',
  'in progress': 'bg-yellow-500',
  pending: 'bg-red-500',
};

export const RecentActivityCard: React.FC<RecentActivityCardProps> = ({
  title,
  description,
  status,
  timestamp,
}) => {
  const statusColor = statusColorMap[status];

  return (
    <Box className="flex items-start space-x-4 p-4 bg-white shadow-sm border border-gray-200 rounded-lg">
      {/* Dot icon */}
      <Box
        as="span"
        className={`h-3 w-3 rounded-full mt-1 ${statusColor}`}
        aria-label={`${status} status`}
      />

      {/* Content */}
      <Box className="flex-1">
        <Box as="h2" className="text-base font-semibold text-gray-900">
          {title}
        </Box>
        <Box as="p" className="text-sm text-gray-600">
          {description}
        </Box>
        <Box as="p" className="text-xs text-gray-400 mt-1">
          {timestamp}
        </Box>
      </Box>
    </Box>
  );
};
