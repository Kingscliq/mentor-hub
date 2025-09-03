'use client';

import { IActionType, IMenteeProjectsData } from '@/types/features/projects';
import { ChevronLeft, Plus } from 'lucide-react';

import AddProjectForm from './widgets/add-project-form';
import ApproveProjectForm from './widgets/project-approval-form';
import Box from '@/components/ui/box';
import { Button } from '@/components/ui';
import EmptyProject from './widgets/empty-project';
import MainModal from '@/components/modals';
import MenteesProjects from './components/mentees-projects';
import MentorsProject from './components/mentors-projects';
import { Roles } from '@/types/features/auth';
import { useAuth } from '@/hooks/auth/useAuthStore';
import { useState } from 'react';

export const MenteeProjects: IMenteeProjectsData[] = [
  {
    _id: '3232',
    topic: 'AI Research',
    status: 'approved',
    milestone: [
      {
        _id: 'jdjjs',
        chapter: '1',
        title: 'introduction',
        status: 'completed',
      },
      {
        chapter: '2',
        title: 'literature review',
        status: 'in progress',
        _id: 'kjkk',
      },
      {
        _id: 'kjjj',
        chapter: '3',
        title: 'methodology',
        status: 'to-do',
      },
      {
        _id: 'kjjjddd',
        chapter: '4',
        title: 'Review',
        status: 'to-do',
      },
    ],
  },
];

export const MentorProjects: IMenteeProjectsData[] = [
  {
    _id: '3232',
    topic: 'AI Research',
    status: 'approved',
    milestone: [
      {
        _id: 'jdjjs',
        chapter: '1',
        title: 'introduction',
        status: 'completed',
      },
      {
        chapter: '2',
        title: 'literature review',
        status: 'in progress',
        _id: 'kjkk',
      },
      {
        _id: 'kjjj',
        chapter: '3',
        title: 'methodology',
        status: 'to-do',
      },
      {
        _id: 'kjjjddd',
        chapter: '4',
        title: 'Review',
        status: 'to-do',
      },
    ],
  },
];

const ProjectsModules = () => {
  const user = useAuth();
  const [addProject, setAddProject] = useState<boolean>(false);
  const [openProjectApproval, setOpenProjectApproval] =
    useState<boolean>(false);
  const [actionType, setActionType] = useState<IActionType>();
  const loggedUser = user;
  const AllProjects =
    loggedUser.role === Roles.STUDENT ? MenteeProjects : MentorProjects;

  const handleOpenProjectReview = (
    _actionType: IActionType,
    projectId: string
  ) => {
    console.log({ projectId });
    setOpenProjectApproval(true);
    setActionType(_actionType);
  };
  return (
    <Box as="main" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {loggedUser.role === Roles.STUDENT && (
        <>
          <Box
            as="a"
            href="/dashboard"
            className="hover:bg-[#dedbdb] rounded-full size-10 justify-center flex flex-col items-center"
          >
            <ChevronLeft />
          </Box>
          <Box className="mt-10">
            {
              <Box as="h1" className="text-3xl font-bold">
                Projects
              </Box>
            }
          </Box>
        </>
      )}

      <Box as="section" className="mt-10 md:mt-20">
        {loggedUser.role === Roles.STUDENT && (
          <Button
            onClick={() => setAddProject(true)}
            className="flex ml-auto cursor-pointer bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            {' '}
            <Plus /> Add Project
          </Button>
        )}

        <Box className="mt-5">
          {AllProjects.length === 0 ? (
            <EmptyProject
              onAdd={() => setAddProject(false)}
              userRole={loggedUser.role}
            />
          ) : (
            <Box>
              {loggedUser.role === Roles.STUDENT ? (
                <MenteesProjects projects={AllProjects} />
              ) : (
                <MentorsProject
                  projects={AllProjects}
                  handleOpenProjectReview={handleOpenProjectReview}
                />
              )}
            </Box>
          )}
        </Box>
      </Box>
      <MainModal
        title="Add Project"
        open={addProject}
        onClose={() => setAddProject(false)}
      >
        <AddProjectForm onClose={() => setAddProject(false)} />
      </MainModal>

      <MainModal
        title={`${
          actionType === 'approve' ? 'Project Approval' : 'Project Rejection'
        }`}
        open={openProjectApproval}
        onClose={() => setOpenProjectApproval(false)}
      >
        <ApproveProjectForm
          actionType={actionType}
          onClose={() => setOpenProjectApproval(false)}
        />
      </MainModal>
    </Box>
  );
};

export default ProjectsModules;
