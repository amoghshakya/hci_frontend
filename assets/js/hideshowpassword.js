const passwordField = document.querySelector("input#password");
const confirmPasswordField = document.querySelector("input#confirm-password");
const passwordToggleIcon = document.querySelector("img#password-toggle");
const confirmPasswordToggleIcon = document.querySelector(
    "img#confirm-password-toggle",
);

// Show/hide password
passwordToggleIcon.addEventListener("click", () => {
    if (passwordToggleIcon.attributes.src.value.endsWith("eye.svg")) {
        passwordToggleIcon.attributes.src.value = passwordToggleIcon.attributes
            .src.value.replace(
                "eye.svg",
                "eye-slash.svg",
            );
        if (passwordField) {
            passwordField.type = "text";
        }
    } else {
        passwordToggleIcon.attributes.src.value = passwordToggleIcon.attributes
            .src.value.replace(
                "eye-slash.svg",
                "eye.svg",
            );
        if (passwordField) {
            passwordField.type = "password";
        }
    }
});

if (confirmPasswordField) {
    confirmPasswordToggleIcon.addEventListener("click", () => {
        if (
            confirmPasswordToggleIcon.attributes.src.value.endsWith("eye.svg")
        ) {
            confirmPasswordToggleIcon.attributes.src.value =
                confirmPasswordToggleIcon
                    .attributes.src.value.replace(
                        "eye.svg",
                        "eye-slash.svg",
                    );
            if (confirmPasswordField) {
                confirmPasswordField.type = "text";
            }
        } else {
            confirmPasswordToggleIcon.attributes.src.value =
                confirmPasswordToggleIcon.attributes.src.value.replace(
                    "eye-slash.svg",
                    "eye.svg",
                );
            if (confirmPasswordField) {
                confirmPasswordField.type = "password";
            }
        }
    });
}
