import Box from '@/components/ui/box';
import React from 'react';

interface StatCardProps {
  icon: React.ElementType;
  color: string;
  name: string;
  value: string | number;
}

/**
 * StatCard Component
 *
 * Displays a single dashboard statistic with an icon, label, and value.
 *
 * Props:
 * - icon: React.ElementType
 *   The icon component to display (e.g., from Lucide or other icon libraries).
 * - color: string
 *   Tailwind CSS background color class for the icon container.
 * - name: string
 *   The label describing the statistic.
 * - value: string | number
 *   The value of the statistic to display.
 *
 * Example usage:
 * <StatCard
 *   icon={BookOpen}
 *   color="bg-blue-500"
 *   name="Active Projects"
 *   value={5}
 * />
 */

export const StatCard: React.FC<StatCardProps> = ({
  icon: Icon,
  color,
  name,
  value,
}) => {
  return (
    <Box
      as="section"
      className="bg-white rounded-lg shadow-sm p-6 border border-gray-200"
    >
      <Box as="section" className="flex items-center">
        <Box as="section" className={`p-3 rounded-lg ${color}`}>
          <Icon className="h-6 w-6 text-white" />
        </Box>
        <Box as="div" className="ml-4">
          <Box as="p" className="text-sm font-medium text-gray-600">
            {name}
          </Box>
          <Box as="p" className="text-2xl font-semibold text-gray-900">
            {value}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
