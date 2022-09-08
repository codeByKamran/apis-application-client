export const limitString = (str, limit, concat) => {
  if (String(str).length < limit) {
    return str;
  }

  return concat
    ? String(str).substring(0, limit) + "..."
    : String(str).substring(0, limit);
};
