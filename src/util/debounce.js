export const debounce = (func, delay) => {
  let timeoutFunc;
  return (callImmediately, ...args) => {
    const laterFunc = () => {
      timeoutFunc = null;
      if (!callImmediately) func(...args);
    }
    window.clearTimeout(timeoutFunc);
    timeoutFunc = window.setTimeout(laterFunc, delay);
    if (callImmediately || !timeoutFunc) func(...args);
  };
};
