export const isArray = (data: unknown) => {
  if (Array.isArray(data)) {
    return data;
  }
  return [];
};
