import { useCallback } from "react";

export default function useScrollDownToBottom() {
  const click = useCallback(() => {
    window.scrollTo({
      top: window.document.body.offsetHeight,
      behavior: 'smooth',
    });
  }, []);
  return click;
}
