import React, { useMemo } from 'react';
import {
  BookOpen,
  Users,
  CheckCircle,
  Clock,
  TrendingUp,
  MessageSquare,
  Target,
} from 'lucide-react';
import { StatCard } from '@/features';
import Box from '@/components/ui/box';

export const user = {
  id: 1,
  name: 'John Doe',
  role: 'mentor',
};

export const DashboardModule = () => {
  // TODO: this is a dummy user will be removed once we start API integration
  const user = useMemo(() => {
    return {
      id: 1,
      name: 'John Doe',
      role: 'mentor',
    };
  }, []);

  const statsByRole: Record<
    string,
    Array<{
      name: string;
      value: string | number;
      icon: React.ElementType;
      color: string;
    }>
  > = {
    mentee: [
      {
        name: 'Active Projects',
        value: 5,
        icon: BookOpen,
        color: 'bg-blue-500',
      },
      {
        name: 'Completed Milestones',
        value: 10,
        icon: CheckCircle,
        color: 'bg-green-500',
      },
      {
        name: 'Pending Reviews',
        value: 3,
        icon: Clock,
        color: 'bg-amber-500',
      },
      {
        name: 'Unread Messages',
        value: 2,
        icon: MessageSquare,
        color: 'bg-purple-500',
      },
    ],
    mentor: [
      {
        name: 'Active Mentees',
        value: 4,
        icon: Users,
        color: 'bg-emerald-500',
      },
      {
        name: 'Projects Supervised',
        value: 7,
        icon: Target,
        color: 'bg-blue-500',
      },
      {
        name: 'Pending Reviews',
        value: 5,
        icon: Clock,
        color: 'bg-amber-500',
      },
      {
        name: 'Unread Messages',
        value: 2,
        icon: MessageSquare,
        color: 'bg-purple-500',
      },
    ],
    admin: [
      {
        name: 'Total Projects',
        value: 12,
        icon: BookOpen,
        color: 'bg-indigo-500',
      },
      {
        name: 'Active Matches',
        value: 6,
        icon: Users,
        color: 'bg-emerald-500',
      },
      {
        name: 'Completion Rate',
        value: '75%',
        icon: TrendingUp,
        color: 'bg-green-500',
      },
      {
        name: 'Pending Approvals',
        value: 1,
        icon: Clock,
        color: 'bg-amber-500',
      },
    ],
  };

  const getStatsForRole = () => statsByRole[user?.role] ?? [];

  const stats = getStatsForRole();
  return (
    <Box as="section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Box as="section" className="mb-8">
        <Box as="h1" className="text-3xl font-bold text-gray-900">
          Welcome back, {user?.name ?? 'N/A'}!
        </Box>
        <Box as="p" className="mt-2 text-gray-600">
          Here&apos;s what&apos;s happening in your mentorship journey.
        </Box>
      </Box>

      {/* Stats Overview */}
      <Box
        as="section"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
      >
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <StatCard
              key={index}
              icon={Icon}
              color={stat.color}
              name={stat.name}
              value={stat.value}
            />
          );
        })}
      </Box>
    </Box>
  );
};
