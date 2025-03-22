// making javascript put pins in random places
const pins = document.querySelectorAll(".map img");
pins.forEach((pin) => {
    pin.addEventListener("click", () => {
        window.location.href = "pages/station.html";
    });
    pin.style.left = `${Math.random() * 90}%`;
    pin.style.top = `${Math.random() * 90}%`;
});

const exploreButton = document.querySelector(
    "#explore",
);
exploreButton.addEventListener("click", () => {
    document.querySelector(".explore-stations")
        .animate(
            [
                {
                    top: "100%",
                },
                {
                    top: "20%",
                },
            ],
            {
                duration: 1000,
                delay: 100,
                easing: "ease",
                fill: "forwards",
            },
        );
});
document.querySelector("img#close")
    .addEventListener("click", () => {
        document.querySelector(".explore-stations")
            .animate(
                [
                    {
                        top: "20%",
                    },
                    {
                        top: "100%",
                    },
                ],
                {
                    duration: 500,
                    easing: "ease",
                    fill: "forwards",
                },
            );
    });
