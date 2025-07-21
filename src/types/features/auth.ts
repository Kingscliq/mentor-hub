
export type Role = 'mentor' | 'mentee';

export interface RegisterFormValues {
  role: Role | '',
  firstName: string,
  lastName: string,
  phoneNumber: string,
  email: string,
  department: string,
  matricNumber: string,
  academicYear: string,
  password: string,
  confirmPassword: string,
}