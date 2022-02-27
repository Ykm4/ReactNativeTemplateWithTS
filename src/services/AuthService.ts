// eslint-disable-next-line @typescript-eslint/no-empty-function
const refreshCsrfToken = async () => {};

const signUp = async (userName: string, password: string) => {
  return Promise.resolve();
};

const login = async (userName: string, password: string) => {
  return Promise.resolve();
};

const logout = async () => {
  return Promise.resolve();
};

export const AuthService = {
  signUp,
  login,
  logout,
  refreshCsrfToken,
};
