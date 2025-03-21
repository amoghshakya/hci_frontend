// replace navbar icons with solid icons when clicked
const icons = document.querySelectorAll(".navbar > img");

icons.forEach((icon) => {
    icon.addEventListener("click", () => {
        if (icon.attributes.src.value.startsWith("assets/svgs/outline")) {
            icon.attributes.src.value = icon.attributes.src.value.replace(
                "outline",
                "solid",
            );
        } else {
            icon.attributes.src.value = icon.attributes.src.value.replace(
                "solid",
                "outline",
            );
        }
    });
});
