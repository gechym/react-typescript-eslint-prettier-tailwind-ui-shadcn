const setThemeClass = (theme : string) => {
  const root = window.document.documentElement;
  root.classList.remove('light', 'dark');

  if (theme === 'system') {
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    root.classList.add(systemTheme);
    localStorage.setItem('theme', systemTheme);
    return;
  }

  root.classList.add(theme);
  localStorage.setItem('theme', theme);
};

export default setThemeClass;
