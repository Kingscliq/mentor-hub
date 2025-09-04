import { IGroupsList } from '@/types/features/groups';

export type Role = 'student' | 'supervisor' | 'admin';

export const roles = ['student', 'supervisor', 'admin'];

export interface RegisterFormValues {
  role: Role | '';
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  department: string;
  matricNumber: string;
  academicYear: string;
  password: string;
}

export enum Roles {
  STUDENT = 'student',
  SUPERVISOR = 'supervisor',
  ADMIN = 'admin',
}

export type LoginFormValues = {
  email: string;
  password: string;
};

export type ResponseStatus = 'success' | 'fail';

export interface LoginResponse {
  status: ResponseStatus;
  message: string;
  token: string;
  data: {
    user: User;
  };
}

export interface AuthErrorResponse {
  status: ResponseStatus;
  message: string;
}

// TODO: Change the registration response to match the core user response
export interface RegisterResponse {
  status: ResponseStatus;
  message: string;
  token: string;
  data: {
    user: {
      department: string;
      isVerified: boolean;
      role: Role;
      email: string;
      firstName: string;
      lastName: string;
      academicYear: string | number;
    };
  };
}

export interface User {
  department: string;
  isVerified: boolean;
  role: Role;
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  matricNumber: string;
  academicYear: string | number;
  group: IGroupsList[];
}

export interface ResendOtpValues {
  email: string;
}
export interface VerifyEmailValues {
  otp: string;
}
