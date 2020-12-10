export const domain = `${process.env.REACT_APP_API_BASE_PATH}`;
export const baseDomain = `${process.env.REACT_APP_API_BASE_PATH}`;
export const apiVersion = 'v1';
export const apiPath = `${domain}/${apiVersion}`;

/** User */
export const auth_users = 'auth-users';
export const USERS = {
  all: `${apiPath}/${auth_users}`,
  logout: `${apiPath}/${auth_users}/logout`,
  login: `${apiPath}/${auth_users}/login`,
  register: `${apiPath}/${auth_users}/register`,
}

/** Video */
export const video = 'video';
export const VIDEO = {
  all: `${apiPath}/${video}`,
}