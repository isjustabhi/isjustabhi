export const INTRO_KEY = "isjustabhi-intro-a";
export const INTRO_EVENT = "isjustabhi:entered";

export function markIntroDone() {
  try {
    sessionStorage.setItem(INTRO_KEY, "1");
  } catch {
    /* ignore */
  }
  document.documentElement.dataset.intro = "done";
  document.documentElement.classList.remove("overflow-hidden");
  window.dispatchEvent(new Event(INTRO_EVENT));
}

export function isIntroComplete() {
  if (typeof window === "undefined") return false;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return true;
  if (document.documentElement.dataset.intro === "done") return true;
  try {
    return sessionStorage.getItem(INTRO_KEY) === "1";
  } catch {
    return false;
  }
}
