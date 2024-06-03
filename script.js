const dropdownContent = document.getElementById("dropdownContent");
const questionSection = document.getElementById("questionSection");

const fetchCountries = async () => {
  const fetchUrl = "https://api.first.org/data/v1/countries";

  await axios
    .get(fetchUrl)
    .then((res) => {
      const countriesObject = Object.values(res?.data?.data);
      const countries = countriesObject.map((data) => {
        return `<option>${data?.country}</option>`;
      });

      dropdownContent.innerHTML = countries;
    })
    .catch((err) => {
      console.log(err);
    });
};

fetchCountries();

const faqs = [
  {
    question: "What is GraspIQ?",
    answer:
      "GraspIQ is an AI-driven platform designed to personalize early education using adaptive learning and biometric feedback.",
  },

  {
    question: "Who can benefit from GraspIQ?",
    answer:
      "Teachers, parents, Edtech companies, and educational researchers can all benefit from our innovative tools",
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

questionSection.innerHTML = questionContainers;

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

document
  .getElementById("contentHeader")
  .addEventListener("click", dropdownClickHandler);
