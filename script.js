
const respIcon = document.getElementById('respIcon');
const navBar = document.querySelector(".navBar");
const headingPara = document.querySelector('.headingPara');
const respCrossIcon = document.getElementById('respCrossIcon');


respIcon.addEventListener("click", () => {
  navBar.style.width = "250px";
  headingPara.classList.add("forDesktopDesign");
  headingPara.classList.add("forMobileDesign");
})

respCrossIcon.addEventListener("click", ()=> {
  navBar.style.width = 0;
  headingPara.classList.remove("forDesktopDesign");
  headingPara.classList.remove("forMobileDesign");
})