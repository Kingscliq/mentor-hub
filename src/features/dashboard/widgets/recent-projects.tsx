import React from 'react';
import Box from '@/components/ui/box';
import { RecentProjectCard, RecentProjectCardProps } from '../components/recent-project-card';

const recentProjectsData: RecentProjectCardProps[] = [
  {
    title: 'Machine Learning for Climate Prediction',
    description: 'Developing ML models to predict climate patterns using historical data.',
    status: 'in progress',
    milestones: {
      completed: 1,
      total: 2,
    },
  },
  {
    title: 'Automated Disease Diagnosis',
    description: 'Using AI to diagnose plant diseases from images.',
    status: 'pending',
    milestones: {
      completed: 0,
      total: 3,
    },
  },
];

export const RecentProjects = () => {
  return (
    <Box className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <Box as="h2" className="text-lg font-semibold text-gray-900 mb-4">
        Recent Projects
      </Box>
      <Box className="space-y-4">
        {recentProjectsData.map((project, idx) => (
          <RecentProjectCard key={idx} {...project} />
        ))}
      </Box>
    </Box>
  );
};
