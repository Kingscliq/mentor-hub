'use client';

import React, { useMemo } from 'react';
import { BookOpen, Users, SquareCheckBig, Bookmark } from 'lucide-react';
import { StatCard } from '@/features';
import { Messages } from '../dashboard/components/messages';
import Box from '@/components/ui/box';
export const user = {
  id: 1,
  name: 'John Doe',
  role: 'mentee',
};

const activity: Array<{
  message: string;
  date: string;
  time: string;
  color: string;
}> = [
  {
    message: 'New group "Drone Team" was created',
    date: 'June 30',
    time: '10:30 AM',
    color: 'red',
  },
  {
    message: 'Project topic "Drone" as submitted for approval',
    date: 'June 30',
    time: '10:30 AM',
    color: 'blue',

  },
  {
    message: 'User “Jude Nwaeke“ was added to mentorship program ',
    date: 'June 30',
    time: '10:30 AM',
    color: 'yellow',

  },
];

const stats: Array<{
  name: string;
  value: string | number;
  icon: React.ElementType;
  color: string;
}> = [
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
    icon: SquareCheckBig,
    color: 'bg-green-500',
  },
  {
    name: 'Pending Approvals',
    value: 1,
    icon: Bookmark,
    color: 'bg-amber-500',
  },
];

export const AdminDashboard = () => {
  // TODO: this is a dummy user will be removed once we start API integration
  const user = useMemo(() => {
    return {
      id: 1,
      name: 'John Doe',
      role: 'supervisor',
    };
  }, []);

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
      <Box className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <Box as="h2" className="text-3xl font-bold text-gray-900 mb-4">
          Recent Activity
        </Box>
        <Box>
          {activity.map((act, index) => {
            return (
              <Messages
                key={index}
                message={act.message}
                date={act.date}
                time={act.time}
                color={act.color}
                
              />
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};
