const about = document.querySelector(".about");
const contact = document.querySelector(".contact");

window.onresize = () => {
  if (window.innerWidth > 1170 && window.innerWidth < 1220) {
    window.location.reload();
  }
};

if (window.innerWidth < "1200") {
  about.addEventListener("click", () => {
    location.href = "/about.html";
  });

  contact.addEventListener("click", () => {
    location.href = "/contact.html";
  });
}
