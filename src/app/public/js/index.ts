function main(): void {
  // Set the active state on the nav element for the current page.
  const {
    location: { pathname },
  } = window;

  let path = pathname.split("/")[1];

  if (path.length === 0) {
    path = "/";
  }

  const getClass = (): string => {
    if (path === '/' || path === 'essays') {
      return 'essays';
    }

    if (path === 'about') {
      return 'about';
    }

    if (path === 'recommended-reading') {
      return 'reading';
    }

    return '';
  }

  const currentPage: HTMLElement | null = document.querySelector(`#nav>ul>li>.link.${getClass()}`);
  currentPage?.classList.add("active");
  setTimeout(() => { document.body.classList.remove('hidden') }, 25)
}

// deno-lint-ignore no-window-prefix
window.addEventListener("load", main);