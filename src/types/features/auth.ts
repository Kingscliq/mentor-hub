export type Role = 'mentor' | 'mentee';

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
  MENTOR = 'mentor',
  MENTEE = 'mentee',
}

export type LoginFormValues = {
  email: string;
  password: string;
};

export interface VerifyEmailValues {
  pin: string;
}
