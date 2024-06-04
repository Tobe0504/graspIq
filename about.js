document.addEventListener("DOMContentLoaded", () => {
  const sideNavCloseButton = document.querySelector(".sidenavInner > svg");
  const sideNav = document.querySelector(".sidenav");
  const hamburgerMenu = document.querySelector("nav svg");
  const navButton = document.querySelector("nav button");

  if (sideNav && sideNavCloseButton) {
    const closeSideNav = () => {
      sideNav.style.width = "0%";
    };

    sideNavCloseButton.addEventListener("click", closeSideNav);
  }

  if (hamburgerMenu && sideNav) {
    const openSideNav = () => {
      sideNav.style.width = "100%";
    };

    hamburgerMenu.addEventListener("click", openSideNav);
  }

  if (navButton) {
    navButton.addEventListener("click", () => {
      window.location.href = "./index.html";
    });
  }
});
