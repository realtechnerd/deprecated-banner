(function () {
  function loadFont() {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }

  function deprecatedBanner() {
    const banner = document.createElement("div");
    banner.innerHTML = `
      <div style="
        background: linear-gradient(to right, #121212, #142a4e);
        color: oklch(87.2% .01 258.338);
        padding: 13px;
        text-align: center;
        font-family: 'Inter', sans-serif;
        font-size: 15px;
        box-shadow: 0 2px 6px rgba(0,0,0,0.3);
      ">
        This site is <span style="font-weight: 900;">archived</span>.
        Explore my new website <a href="https://realtechnerd.github.io" target="_blank" style="color: #209cee; text-decoration: underline;">here</a>.
      </div>
    `;
    document.body.prepend(banner);
  }

  window.addEventListener("load", () => {
    loadFont();
    deprecatedBanner();
  });
})();
