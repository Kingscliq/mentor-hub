import { ResponseStatus, User } from '@/types/features/auth';
import { StaticImageData } from 'next/image';

// export interface GroupModulesI {}

export interface GroupsDetailsI {
  _id: string;
  projectName: string;
  mentor: {
    name: string;
    userType: string;
    photo: StaticImageData;
    _id: string;
    email: string;
    phoneNumber: string;
    RegNumber: string;
    department: string;
  };
  mentees: {
    name: string;
    userType: string;
    photo: StaticImageData;
    _id: string;
    email: string;
    phoneNumber: string;
    RegNumber: string;
    department: string;
  }[];
}

export interface GroupErrorResponse {
  status: ResponseStatus;
  message: string;
}

export interface ICreateGroupPayload {
  name: string;
  maximumGroupSize: number;
}

export interface IGroupRecords {
  createdAt: string;
  maximumGroupSize: number;
  name: string;
  users: string[];
  _id: string;
}
export interface GroupDataResponse {
  groups: IGroupsList[];
}

export interface SingleGroupUser {
  firstName: string;
  lastName: string;
  matricNumber: string;
  _id: string;
  role: string;
  department: string;
  phoneNumber: string;
  email: string;
}
export interface singleGroupDetail {
  users: SingleGroupUser[];
  name: string;
  id: string;
  maximumGroupSize: number;
  supervisor: User;
}
export interface IGroupsList {
  users: string[];
  _id: string;
  name: string;
  maximumGroupSize: number;
  createdAt: string;
  updatedAt: string;
}
