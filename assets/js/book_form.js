const radios = document.querySelectorAll(
    ".custom-radio div",
);

radios.forEach((radio) => {
    radio.addEventListener("click", () => {
        radios.forEach((r) => r.classList.remove("active"));
        radio.classList.add("active");
    });
});

const submit = document.querySelector("button");
const duration = document.querySelector(
    "input#duration",
);

duration.addEventListener("input", (event) => {
    submit.innerHTML = `&#8360;${
        event.target.value * 80
    } | Continue to Payment`;
});

const form = document.querySelector("form");
const paymentPopover = document.querySelector("div.payment-popover");
paymentPopover.addEventListener("click", (event) => {
    event.stopPropagation();
});
const popoverWrapper = document.querySelector("div.popover-wrapper");
const durationPopover = document.querySelector("#duration-popover");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    document.querySelector("div.activity-actions p").innerHTML = `&#8360;${
        Number(duration.value) * 80
    }`;
    durationPopover.innerHTML = `${duration.value} hrs`;
    popoverWrapper.style.zIndex = 9999;
    popoverWrapper.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    popoverWrapper.addEventListener("click", () => {
        paymentPopover.animate([
            {
                top: "53%",
            },
            {
                top: "100%",
            },
        ], {
            duration: 800,
            delay: 100,
            easing: "ease",
            fill: "forwards",
        });
        popoverWrapper.style.zIndex = -1;
        popoverWrapper.style.transition = "all 0.5s ease-in-out 0.2s";
        popoverWrapper.style.backgroundColor = "transparent";
    });
    paymentPopover.animate([
        {
            top: "100%",
        },
        {
            top: "45dvh",
        },
    ], {
        duration: 800,
        delay: 100,
        easing: "ease",
        fill: "forwards",
    });
});
