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
}

export type LoginFormValues = {
  email: string;
  password: string;
};

export interface VerifyEmailValues {
  pin: string;
}
