(function () {
  const STORAGE_KEY = "ti-font-mode";
  
  const ICON_FONT = `
    <svg xmlns="http://www.w3.org/2000/svg"
         width="24" height="24" viewBox="0 0 24 24"
         fill="none" stroke="currentColor" stroke-width="2"
         stroke-linecap="round" stroke-linejoin="round"
         aria-hidden="true" focusable="false">
      <path d="M4 7V4h16v3"></path>
      <path d="M9 20h6"></path>
      <path d="M12 4v16"></path>
    </svg>
  `;

  const ICON_ACCESSIBILITY = `
    <svg xmlns="http://www.w3.org/2000/svg"
        width="24" height="24" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round"
      class="lucide lucide-type-outline-icon lucide-type-outline">
      <path d="M14 16.5a.5.5 0 0 0 .5.5h.5a2 2 0 0 1 0 4H9a2 2 0 0 1 0-4h.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V8a2 2 0 0 1-4 0V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3a2 2 0 0 1-4 0v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5Z"/>
    </svg>
  `;

  function getMode() {
    try {
      return localStorage.getItem(STORAGE_KEY) || "normal";
    } catch (e) {
      return "normal";
    }
  }

  function saveMode(mode) {
    try {
      localStorage.setItem(STORAGE_KEY, mode);
    } catch (e) {
    }
  }

  function setMode(mode) {
    const normalized = mode === "dyslexia" ? "dyslexia" : "normal";
    const enabled = normalized === "dyslexia";
    const label = enabled ? "Switch to normal font" : "Switch to accessibility-friendly font";

    document.documentElement.setAttribute("data-font-mode", normalized);
    saveMode(normalized);

    const btn = document.querySelector(".font-toggle-btn");
    if (btn) {
      btn.setAttribute("aria-pressed", String(enabled));
      btn.setAttribute(
        "aria-label",
        label
      );
      btn.title = label;
      btn.innerHTML = enabled ? ICON_ACCESSIBILITY : ICON_FONT;
    }
  }

  function toggleMode() {
    const next = getMode() === "dyslexia" ? "normal" : "dyslexia";
    setMode(next);
  }

  function ensureButton() {
    const headerContainer =
      document.querySelector(".md-header__inner") ||
      document.querySelector(".md-header") ||
      document.querySelector("header");

    if (!headerContainer) return;

    if (headerContainer.querySelector(".font-toggle-btn")) {
      setMode(getMode());
      return;
    }

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "md-header__button font-toggle-btn";
    btn.setAttribute("aria-pressed", "false");
    btn.setAttribute("aria-label", "Switch to dyslexia-friendly font");
    btn.title = "Switch to dyslexia-friendly font";
    btn.innerHTML = ICON_FONT;

    btn.addEventListener("click", toggleMode);
    headerContainer.appendChild(btn);

    setMode(getMode());
  }

  function init() {
    setMode(getMode());
    ensureButton();
  }

  if (typeof document$ !== "undefined" && document$.subscribe) {
    document$.subscribe(init);
  } else {
    document.addEventListener("DOMContentLoaded", init);
  }
})();