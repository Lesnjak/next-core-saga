export const getExpiresAtDate = (): number | null => {
  const expiresAt = localStorage.getItem('expires_at');

  if (expiresAt) {
    return parseInt(expiresAt, 10);
  }

  return null;
};

export const isAuthenticated = (): boolean => {
  const expiresAt = getExpiresAtDate();

  if (expiresAt) {
    return new Date().getTime() < expiresAt;
  }

  return false;
};
