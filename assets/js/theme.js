// Theme Toggle — respects system preference, remembers user choice
(function () {
  const STORAGE_KEY = 'theme-preference';
  const toggle = document.getElementById('theme-toggle');

  // Determine initial theme
  function getPreference() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  // Apply theme to DOM
  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
  }

  // Initialize
  const current = getPreference();
  setTheme(current);

  // Toggle on click
  if (toggle) {
    toggle.addEventListener('click', function () {
      const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      setTheme(next);
      localStorage.setItem(STORAGE_KEY, next);
    });
  }

  // Listen for system preference changes (if user hasn't manually chosen)
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setTheme(e.matches ? 'dark' : 'light');
    }
  });
})();
