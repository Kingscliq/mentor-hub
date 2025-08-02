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

export interface VerifyEmailValues {
  pin: string;
}

export interface LoginResponse {
  status: 'success' | 'fail';
  message: string;
  token: string;
  data: {
    user: User;
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
  academicYear: string;
}
