document.addEventListener("DOMContentLoaded", () => {
    const dropdownContent = document.getElementById("dropdownContent");

    const fetchCountries = async () => {
        const fetchUrl = "https://api.first.org/data/v1/countries?limit=500";

        await axios
            .get(fetchUrl)
            .then((res) => {
                const countriesObject = Object.values(res?.data?.data);

                // Sort the countries alphabetically
                countriesObject.sort((a, b) => a.country.localeCompare(b.country));

                const countries = countriesObject.map((data) => {
                    return `<option value="${data?.country}">${data?.country}</option>`;
                });

                dropdownContent.innerHTML = [
                    "<option selected disabled>Select country</option>",
                    ...countries,
                ].join(''); // Ensure it's a string
            })
            .catch((err) => {
                console.log(err);
            });
    };


    fetchCountries();

    const formInputs = document.querySelectorAll(
        "#waitListForm > form > div > input"
    );
    const formSelect = document.querySelector(
        "#waitListForm > form > div > select"
    );

    let inputObjects = {
        firstname: "",
        lastname: "",
        email: "",
        country: "",
    };

    formInputs.forEach((input) => {
        input.addEventListener("change", (e) => {
            inputObjects[e.target.name] = e.target.value;
        });
    });

    inputObjects.country = formSelect.addEventListener("change", (e) => {
        inputObjects.country = e.options[e.selectedIndex].text;
    });

    formSelect.addEventListener("change", (e) => {
        const selectedOption = e.target.options[e.target.selectedIndex];
        inputObjects["country"] = selectedOption.text;
    });

    const submitButton = document.getElementById("submitFormButton");

    const submitForm = async (event) => {
        event.preventDefault();

        submitButton.innerText = "Loading...";

        const formRequestBody = inputObjects;

        const fetchUrl = "https://graspiqapi.onrender.com/submit-form";

        await axios
            .post(fetchUrl, formRequestBody)
            .then((res) => {
                document.getElementById("submitFormButton").innerText = "Sign me up";
                console.log(res);
                document.getElementById("errortext").innerHTML = res?.data?.message;
                document.getElementById("errortext").style.color = "green";
            })
            .catch((err) => {
                document.getElementById("errortext").style.display = "block";
                document.getElementById("errortext").innerHTML =
                    err.response?.data?.error?.responseMessage ||
                    "Error submitting request";
                document.getElementById("errortext").style.color = "red";

                document.getElementById("submitFormButton").innerText = "Sign me up";
            });
    };

    submitButton.addEventListener("click", submitForm);

    const sideNavCloseButton = document.querySelector(".sidenavInner > svg");
    const sideNav = document.querySelector(".sidenav");
    const hamburgerMenu = document.querySelector("nav svg");

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

    const headerRoutes = document.querySelectorAll("nav a");

    headerRoutes.forEach((route) => {
        if (route.href === location.href) {
            route.style.color = "#0046b7";
        }
    });
});
