import Example from "./scripts/testingExample"

document.addEventListener("DOMContentLoaded", () => {
  const main = document.getElementById("testing-main");
  new Example(main);
})