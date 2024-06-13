document.addEventListener("DOMContentLoaded", () => {
  const questionSection = document.getElementById("questionSection");

  const faqs = [
    {
      question: "What is GraspIQ?",
      answer:
        "GraapIQ is an Integrated Adaptibe learning and Emotional Intelligence Platform designed to personalize early education using adaptive learning and biometric feedback.",
    },

    {
      question: "Who can benefit from GraspIQ?",
      answer:
        "Teachers, parents, School, Edtech companies, and educational researchers can all benefit from our innovative tools",
    },

    {
      question: "How can I get involved?",
      answer:
        "Join our waiting list to get updates and be among the first to access GraspIQ.",
    },
  ];

  const questionContainers = faqs.map((data, i) => {
    return `<div>
    <div id="contentHeader-${i}">
    <span>${data.question}</span>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 27 14" fill="none">
    <path d="M1 0.5L13.7742 12.5L25.7742 0.5" stroke="black"/>
    </svg>
    </div>
    <div id="content-${i}">${data.answer}</div>
    </div>`;
  });

  questionSection.innerHTML = questionContainers.join("");

  const dropdownClickHandler = (index) => {
    const content = document.getElementById(`content-${index}`);

    if (content.style.maxHeight === "0px" || content.style.maxHeight === "0") {
      content.style.maxHeight = "200" + "px";
    } else {
      content.style.maxHeight = "0px";
    }
  };

  faqs.forEach((_, index) => {
    document
      .getElementById(`contentHeader-${index}`)
      .addEventListener("click", () => dropdownClickHandler(index));
  });

  const navButton = document.querySelector("#navButton");
  const heroSectionButton = document.querySelector(".heroSection button");
  const waitListPreSectionButton = document.querySelector(
    ".waitListPreSection > button"
  );

  const scrollToForm = () => {
    window.location.href = "./waiting-list.html";
  };

  // navButton.addEventListener("click", scrollToForm);
  waitListPreSectionButton.addEventListener("click", scrollToForm);
  heroSectionButton.addEventListener("click", scrollToForm);

  const sideNavCloseButton = document.querySelector(".sidenavInner > svg");
  const sideNav = document.querySelector(".sidenav");
  const hamburgerMenu = document.querySelector("nav svg");

  if (sideNav && sideNavCloseButton) {
    const closeSideNav = () => {
      sideNav.style.width = "0%";
    };

    sideNavCloseButton.addEventListener("click", closeSideNav);
  }

  const headerRoutes = document.querySelectorAll("nav a");

  headerRoutes.forEach((route) => {
    if (route.href === location.href) {
      route.style.color = "#0046b7";
    }
  });

  if (hamburgerMenu && sideNav) {
    const openSideNav = () => {
      sideNav.style.width = "100%";
    };

    hamburgerMenu.addEventListener("click", openSideNav);
  }

  const contentHeader = document.getElementById("contentHeader");

  if (contentHeader) {
    contentHeader.addEventListener("click", dropdownClickHandler);
  }

  const aboutUsButton = document.querySelector(".aboutUsSection button");

  if (aboutUsButton) {
    aboutUsButton.addEventListener("click", () => {
      document.location.href = "/about.html";
    });
  }
});
