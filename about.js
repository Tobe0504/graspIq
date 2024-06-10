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
      window.location.href = "./waiting-list.html";
    });
  }

  const headerRoutes = document.querySelectorAll("nav a");

  headerRoutes.forEach((route) => {
    if (route.href === location.href) {
      route.style.color = "#0046b7";
    }
  });

  const logoImage = document.querySelector("nav > img");

  if (logoImage) {
    logoImage.addEventListener("click", () => {
      document.location.href = "/index.html";
    });
  }
});
