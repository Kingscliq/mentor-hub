export const env = {
  AUTH_TOKEN: '______MENTOR_HUB____TOKEN___',
  BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  API_V1: '/api/v1/',
};

export const urls = {
  LOGIN: `${env.API_V1}auth/login`,
  REGISTER: `${env.API_V1}auth/signup`,
  USER_PROFILE: `${env.API_V1}auth/profile`,
};
