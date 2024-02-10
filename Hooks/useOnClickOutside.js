import { useEffect } from "react";
function useOnClickOutside(ref1, ref2, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (!ref1?.current || ref1?.current?.contains(event?.target) || !ref2?.current || ref2?.current?.contains(event?.target)) {
        return;
      }
      handler(event);
    };
    document?.addEventListener("mousedown", listener);
    document?.addEventListener("touchstart", listener);
    return () => {
      document?.removeEventListener("mousedown", listener);
      document?.removeEventListener("touchstart", listener);
    };
  }, [ref1, ref2, handler]);
}
export default useOnClickOutside;
export function useOnClickOutsideSingel(ref1, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (!ref1?.current || ref1?.current?.contains(event?.target)) {
        return;
      }
      handler(event);
    };
    document?.addEventListener("mousedown", listener);
    document?.addEventListener("touchstart", listener);
    return () => {
      document?.removeEventListener("mousedown", listener);
      document?.removeEventListener("touchstart", listener);
    };
  }, [ref1, handler]);
}
