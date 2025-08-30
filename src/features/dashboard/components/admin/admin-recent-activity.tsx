import React from "react";
import Box from "@/components/ui/box";
import { AdminRecentActivityCard, RecentAdminActivityCardProps } from "../admin-recent-activity-card";


const activityData:RecentAdminActivityCardProps[] = [
  {
    title: "Project Update",
    status: "completed",
    description: "You submitted milestone 2 of 'AI Climate Prediction'.",
    timestamp: "2 hours ago",
  },
  {
    title: "New Message",
    status: "in progress",
    description: "Your mentor reviewed milestone 1.",
    timestamp: "Yesterday",
  },
  {
    title: "New Project Assigned",
    status: "pending",
    description: "New message from your mentor.",
    timestamp: "3 days ago",
  },
];

export const AdminRecentActivity: React.FC = () => {
  return (
    <Box as="section" className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <Box as="h2" className="text-lg font-semibold mb-4 text-gray-900">
        Recent Activity 
      </Box>

      <Box as="div" className="space-y-4">
        {activityData.map((activity, index) => (
          <AdminRecentActivityCard key={index} {...activity} />
        ))}
      </Box>
    </Box>
  );
};
