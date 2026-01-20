/* arcilla-controls.js
   Controls multiple variable-font weight sliders on the Arcilla page.
   - Preferred wiring: input[data-css-var][data-value-output]
   - Fallback wiring: known IDs for legacy markup
*/
(function () {
  /**
   * Clamp numeric string to a range; returns number.
   */
  function clampToRange(value, min, max) {
    const v = Number(value);
    if (Number.isNaN(v)) return min;
    return Math.min(max, Math.max(min, v));
  }

  /**
   * Apply slider value:
   * - set CSS variable on :root
   * - update output label text
   */
  function applySlider(slider, cssVarName, outputEl) {
    const min = slider.min !== "" ? Number(slider.min) : 100;
    const max = slider.max !== "" ? Number(slider.max) : 900;

    const v = clampToRange(slider.value, min, max);
    // normalize slider.value so UI + label always match clamped value
    slider.value = String(v);

    document.documentElement.style.setProperty(cssVarName, String(v));
    if (outputEl) outputEl.textContent = String(v);
  }

  /**
   * Preferred: auto-wire anything with data attributes
   * Example:
   * <input type="range" data-css-var="--arcilla-wght-text" data-value-output="textSamplesWeightValue" ...>
   */
  function wireDataAttributeSliders() {
    const sliders = document.querySelectorAll('input[type="range"][data-css-var]');
    sliders.forEach((slider) => {
      const cssVarName = slider.getAttribute("data-css-var");
      const outId = slider.getAttribute("data-value-output");
      const outputEl = outId ? document.getElementById(outId) : null;

      // Initial
      applySlider(slider, cssVarName, outputEl);

      // Live updates
      slider.addEventListener("input", () => applySlider(slider, cssVarName, outputEl));
      slider.addEventListener("change", () => applySlider(slider, cssVarName, outputEl));
    });

    return sliders.length;
  }

  /**
   * Fallback: wire specific known IDs if present
   * (so you don't have to perfectly match attributes everywhere).
   */
  function wireFallbackByIds() {
    const pairs = [
      // Ligatures pair
      {
        sliderId: "ligaturesWeight",
        outputId: "ligaturesWeightValue",
        cssVar: "--arcilla-wght-ligatures",
      },
      // Text samples pair
      {
        sliderId: "textSamplesWeight",
        outputId: "textSamplesWeightValue",
        cssVar: "--arcilla-wght-text",
      },

      // If you previously used these older IDs, they’ll still work:
      {
        sliderId: "ligaturesWidth",
        outputId: "ligaturesWidthValue",
        cssVar: "--arcilla-wght-ligatures",
      },
    ];

    let wired = 0;

    pairs.forEach((p) => {
      const slider = document.getElementById(p.sliderId);
      if (!slider) return;

      const outputEl = document.getElementById(p.outputId);
      applySlider(slider, p.cssVar, outputEl);

      slider.addEventListener("input", () => applySlider(slider, p.cssVar, outputEl));
      slider.addEventListener("change", () => applySlider(slider, p.cssVar, outputEl));

      wired += 1;
    });

    return wired;
  }

  // --- run ---
  // 1) preferred wiring first
  const countData = wireDataAttributeSliders();
  // 2) fallback wiring to catch anything not using data attributes
  const countFallback = wireFallbackByIds();

  // Optional: if nothing got wired, uncomment for debugging
  // if (countData + countFallback === 0) console.warn("arcilla-controls.js: no sliders found to wire.");
})();