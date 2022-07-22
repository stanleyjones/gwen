import { useEffect } from "react";

export function useExternalScript(src: string, onload: any) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.onload = onload;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
}
