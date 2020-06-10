export const getUserTheme = (setTheme) => {
  if (sessionStorage.getItem("theme") !== null) {
    setTheme(sessionStorage.getItem("theme") === "dark");
  } else {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setTheme(true);
    } else {
      setTheme(false);
    }
  }
};

export const changeTheme = (theme, setTheme) => {
  sessionStorage.setItem("theme", !theme ? "dark" : "light");
  setTheme(!theme);
};

export const lightTheme = {
  body: "#E2E2E2",
  text: "#363537",
  toggleBorder: "#FFF",
  gradient: "linear-gradient(#39598A, #79D7ED)",
};

export const darkTheme = {
  body: "#363537",
  text: "#FAFAFA",
  toggleBorder: "#6B8096",
  gradient: "linear-gradient(#091236, #1E215D)",
};

