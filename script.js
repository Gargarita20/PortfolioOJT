const themeButton = document.querySelector(".theme");
const themeIcon = themeButton.querySelector("img");
const savedTheme = localStorage.getItem("theme");

function setTheme(theme) {
    const isDark = theme === "dark";

    document.documentElement.dataset.theme = isDark ? "dark" : "light";
    themeButton.setAttribute("aria-pressed", String(isDark));
    themeButton.setAttribute(
        "aria-label",
        `Switch to ${isDark ? "light" : "dark"} theme`
    );
    themeIcon.src = isDark ? "media/light.svg" : "media/dark.svg";
}

setTheme(savedTheme === "dark" ? "dark" : "light");

themeButton.addEventListener("click", () => {
    const nextTheme =
        document.documentElement.dataset.theme === "dark" ? "light" : "dark";

    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
});
