const sections = document.querySelectorAll("section");
const config = {
  rootMargin: "-50px 0px -50px",
};
let observer = new IntersectionObserver(function (entries, self) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(entry.target);
    }
  });
}, config);

sections.forEach((section) => {
  observer.observe(section);
});
