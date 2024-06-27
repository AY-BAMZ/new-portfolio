export const checkDomWindow = () => {
  return typeof window !== 'undefined';
};

export function userauthstorage({
theme}: any) {
  localStorage.setItem('theme', theme);
}

export const getTheme = () => {
  if (checkDomWindow()) {
    return localStorage.getItem('theme');
  }
  return null;
};
