export const getUser = () => {
  const userStr = sessionStorage.getItem("user");
  if (userStr) {
    return JSON.parse(userStr);
  } else {
    return null;
  }
};

export const setUserSession = (response) => {
  sessionStorage.setItem("user", JSON.stringify(response));
  // sessionStorage.setItem("headers", JSON.stringify(headers))
};

export const removeUserSession = () => {
  sessionStorage.removeItem("user");
};
