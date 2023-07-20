function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.bottom >= 0 &&
    rect.right >= 0 &&
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.left <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleScrollAnimation() {
  const elements = document.querySelectorAll(".container-main");
  elements.forEach((element) => {
    if (isElementInViewport(element)) {
      element.classList.add("show");
    } else {
      element.classList.remove("show");
    }
  });
}

window.addEventListener("scroll", handleScrollAnimation);
window.addEventListener("resize", handleScrollAnimation);
window.addEventListener("load", handleScrollAnimation);
