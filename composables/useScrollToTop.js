export function useScrollToTop() {
  function scrollToTop(elementId) {
    const element = document.getElementById(elementId);

    if (!element) {
      console.warn(`Element with id ${elementId} not found`);

      return;
    }

    const elementTopPosition =
      element.getBoundingClientRect().top + window.scrollY - 40;

    window.scrollTo({
      top: elementTopPosition,
      behavior: "smooth",
    });
  }

  return {
    scrollToTop,
  };
}
