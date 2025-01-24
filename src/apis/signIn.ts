export const signInRequest = async (
  email: string,
  password: string
): Promise<{ accessToken: string }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ accessToken: 'access-token-1' });
    }, 1000);
  });
};
