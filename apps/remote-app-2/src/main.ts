import('./bootstrap')
  .then(m => {
    // For standalone development, bootstrap directly
    const appRoot = document.querySelector('app-root') as HTMLElement;
    if (appRoot) {
      m.bootstrap(appRoot);
    }
  })
  .catch(err => console.error(err));
