export function useClickOutside() {
  const elements = ref([]);

  const isClickOutside = (event) => {
    return !elements.value.some((el) => el.contains(event.target));
  };

  const onClickOutside = (event) => {
    if (isClickOutside(event)) {
      elements.value.forEach((el) => {
        el.__clickOutsideHandler__ && el.__clickOutsideHandler__(event);
      });
    }
  };

  onMounted(() => {
    document.addEventListener("click", onClickOutside);
  });

  onUnmounted(() => {
    document.removeEventListener("click", onClickOutside);
  });

  const registerElement = (el, handler) => {
    el.__clickOutsideHandler__ = handler;
    elements.value.push(el);
  };

  return { registerElement };
}
