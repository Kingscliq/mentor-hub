import React from 'react';
import Box from '@/components/ui/box';

export interface RecentAdminActivityCardProps {
  title: string;
  description: string;
  status: 'completed' | 'in progress' | 'pending';
  timestamp: string;
}

const statusColorMap: Record<RecentAdminActivityCardProps['status'], string> = {
  completed: ' border-l-2 border-green-500',
  'in progress': ' border-l-2 border-yellow-500',
  pending: ' border-l-2 border-red-500',
};

export const AdminRecentActivityCard: React.FC<RecentAdminActivityCardProps> = ({
  title,
  description,
  status,
  timestamp,
}) => {
  const statusColor = statusColorMap[status];

  return (
    <Box data-aos="fade-up" className={`flex items-start space-x-4 p-4 ${statusColor}  bg-[#FAFAFA] shadow-sm  rounded-lg`}>
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
