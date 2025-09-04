export interface AddProjectFormValues {
  topic: string;
  description: string;
}

export type AddProjectPayload = {
  groupId: string;
} & AddProjectFormValues;

export type IActionType = 'approve' | 'reject';

export interface IMenteeProjectsData {
  _id: string;
  topic: string;
  status: string;
  milestone: {
    _id: string;
    chapter: string;
    title: string;
    status: string;
  }[];
}

export interface IProjectPayload {
  topic: string;
  description: string;
}
