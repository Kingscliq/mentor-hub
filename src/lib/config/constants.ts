export const env = {
  AUTH_TOKEN: '______MENTOR_HUB____TOKEN___',
  BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  API_V1: '/api/v1/',
};

export const urls = {
  LOGIN: `${env.API_V1}auth/login`,
  REGISTER: `${env.API_V1}auth/signup`,
  USER_PROFILE: `${env.API_V1}auth/profile`,
  RESEND_OTP: `${env.API_V1}auth/resend-otp`,
  VERIFY_EMAIL: `${env.API_V1}auth/verify-email`,
  PROJECTS: `${env.API_V1}/projects/`,
  GROUPS: `${env.API_V1}groups/`,
};

export const user = {
  id: 1,
  name: 'John Doe',
  role: 'mentor',
};
