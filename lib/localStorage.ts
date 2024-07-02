export const checkDomWindow = () => {
  return typeof window !== "undefined";
};

export function userThemeStorage({ theme }: any) {
  localStorage.setItem("theme", theme);
}

export const getTheme = () => {
  if (checkDomWindow()) {
    return localStorage.getItem("theme");
  }
  return null;
};
