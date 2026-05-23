// Dense ASCII-noise field with a hidden "62" form, breathing pulse, scan beam,
// glitch streaks, validation passes, mouse halo, and click-to-fail ripples.
// Stripped of the dashboard text overlays; the GPU/ML relevance lives in the
// character pools (hex bytes, sparkline blocks, gradient/sum operators).
//
// The hidden form is built from the brand SVG's two glyph paths (copied
// verbatim from frontend-rent/logo-62.svg) -- so the "62" that emerges
// out of the noise is the actual serif logomark, not a Geist 800
// stand-in. Cell-grid resolution sets the level of detail; serif
// terminals will round to whichever cells happen to overlap them.

(function () {
  const canvas = document.getElementById("fleet");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const DPR = Math.min(window.devicePixelRatio || 1, 2);
  let W = 0,
    H = 0;
  let cells = [];
  let cols = 0,
    rows = 0;
  let cellW = 0,
    cellH = 0;
  let formMap = null;
  let mouseCol = -1e6,
    mouseRow = -1e6,
    mouseInside = false;
  let glitchRow = -1,
    glitchStart = 0,
    glitchDuration = 0;

  // SVG viewBox + path data. Same source as logo-62.svg / the nav mark.
  const LOGO_VIEWBOX_W = 16;
  const LOGO_VIEWBOX_H = 15;
  // Bounding box of the actual ink (not the viewBox -- the SVG has dead
  // space on the right that pushes the "62" left when you fit-by-viewBox).
  // Centering on this box puts the visual mass of the glyphs at the
  // center of the animated canvas. Derived once by reading min/max from
  // the path data.
  const LOGO_INK_X_MIN = 0.54;
  const LOGO_INK_X_MAX = 10.412;
  const LOGO_INK_Y_MIN = 2.82;
  const LOGO_INK_Y_MAX = 12.12;
  const LOGO_INK_W = LOGO_INK_X_MAX - LOGO_INK_X_MIN; // 9.872
  const LOGO_INK_H = LOGO_INK_Y_MAX - LOGO_INK_Y_MIN; // 9.30
  const LOGO_PATH_6 = new Path2D(
    "M3.492 12.12C2.924 12.12 2.416 12.004 1.968 11.772C1.52 11.54 1.168 11.212 0.912 10.788" +
      "C0.664 10.364 0.54 9.868 0.54 9.3C0.54 8.788 0.624 8.344 0.792 7.968C0.968 7.584 1.216 7.26 1.536 6.996" +
      "C1.864 6.724 2.256 6.5 2.712 6.324C2.528 6.204 2.348 6.072 2.172 5.928C1.996 5.784 1.852 5.608 1.74 5.4" +
      "C1.628 5.184 1.572 4.924 1.572 4.62C1.572 4.332 1.652 4.052 1.812 3.78C1.972 3.5 2.224 3.272 2.568 3.096" +
      "C2.912 2.912 3.356 2.82 3.9 2.82C4.3 2.82 4.648 2.864 4.944 2.952C5.24 3.04 5.488 3.144 5.688 3.264" +
      "C5.896 3.376 6.048 3.476 6.144 3.564L5.688 4.392C5.44 4.2 5.164 4.036 4.86 3.9C4.564 3.756 4.24 3.684 3.888 3.684" +
      "C3.552 3.684 3.288 3.732 3.096 3.828C2.912 3.924 2.784 4.044 2.712 4.188C2.64 4.324 2.604 4.456 2.604 4.584" +
      "C2.604 4.72 2.636 4.856 2.7 4.992C2.764 5.128 2.892 5.276 3.084 5.436C3.284 5.588 3.58 5.768 3.972 5.976" +
      "C4.684 6.352 5.212 6.724 5.556 7.092C5.9 7.452 6.128 7.808 6.24 8.16C6.352 8.504 6.408 8.844 6.408 9.18" +
      "C6.408 9.86 6.272 10.416 6 10.848C5.728 11.28 5.368 11.6 4.92 11.808C4.48 12.016 4.004 12.12 3.492 12.12Z" +
      "M3.516 11.256C3.916 11.256 4.252 11.168 4.524 10.992C4.804 10.816 5.016 10.572 5.16 10.26" +
      "C5.304 9.948 5.376 9.596 5.376 9.204C5.376 8.812 5.304 8.464 5.16 8.16C5.016 7.856 4.808 7.588 4.536 7.356" +
      "C4.272 7.124 3.96 6.924 3.6 6.756C3.296 6.86 3.02 6.984 2.772 7.128C2.532 7.272 2.324 7.444 2.148 7.644" +
      "C1.98 7.836 1.848 8.064 1.752 8.328C1.664 8.584 1.62 8.876 1.62 9.204C1.62 9.612 1.696 9.972 1.848 10.284" +
      "C2.008 10.588 2.228 10.828 2.508 11.004C2.796 11.172 3.132 11.256 3.516 11.256Z",
  );

  const LOGO_PATH_2 = new Path2D(
    "m 11.765993,3.9303718 c 0,-0.3754453 -0.150874,-0.7797719 -0.45262,-1.054136 -0.2606,-0.2599222 -0.507484,-0.1732846 -0.768083,0.1010828 -1.344145,1.4873408 -2.8940257,4.1587815 -3.4289406,6.5558577 -0.068581,0.2888049 -0.09601,0.5776087 -0.09601,0.8230927 0,0.996376 0.5211992,1.501783 1.35786,1.501783 1.152124,0 2.1670906,-1.184097 2.3728276,-1.617304 0.178305,-0.389886 0.192021,-0.7220111 0.137158,-0.938615 -0.09601,-0.3754453 -0.397757,-0.3754453 -0.576062,-0.014454 -0.5211996,1.039696 -1.3167136,2.007191 -1.9476386,2.007191 -0.1783047,0 -0.2605993,-0.245487 -0.2605993,-0.592049 0,-0.505408 0.1783053,-1.1552179 0.4526203,-1.8916691 1.206987,-0.8519733 2.7020046,-2.555919 3.1271936,-4.2743051 0.06858,-0.2454818 0.0823,-0.404326 0.0823,-0.6064896 z M 10.99791,4.2913767 c 0.0823,0.057762 -0.09601,0.6931305 -0.562347,1.516223 C 10.120101,6.3707682 9.653766,7.0350184 9.063987,7.6415075 9.159997,7.3960256 9.763492,6.3130071 10.120101,5.6776377 10.586437,4.8256648 10.943047,4.2624964 10.99791,4.2913767 Z",
  );

  const RAMP = " ··:+xo*#";
  const FLICKER = "0123456789ABCDEF·:+x=-▁▂▃▄ΔλΣ∇yzabcdef";
  const FORM_POOL = "#@*▆▇█∇∑";
  const FONT_SIZE = 13;
  const LINE_HEIGHT = 16;
  const CHAR_WIDTH = 8;

  function resize() {
    const rect = canvas.parentElement.getBoundingClientRect();
    W = rect.width;
    H = rect.height;
    canvas.width = Math.floor(W * DPR);
    canvas.height = Math.floor(H * DPR);
    canvas.style.width = W + "px";
    canvas.style.height = H + "px";
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    initCells();
  }
  function initCells() {
    cellW = CHAR_WIDTH;
    cellH = LINE_HEIGHT;
    cols = Math.floor(W / cellW);
    rows = Math.floor(H / cellH);
    cells = new Array(cols * rows);
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        cells[r * cols + c] = {
          ch: RAMP[Math.floor(Math.random() * RAMP.length)],
          nextTick: Math.random() * 1500,
          flashUntil: 0,
          ripple: 0,
        };
      }
    }
    buildForm();
  }
  function buildForm() {
    const W2 = cellW * cols,
      H2 = cellH * rows;
    if (W2 <= 0 || H2 <= 0) {
      formMap = null;
      return;
    }
    const fc = document.createElement("canvas");
    fc.width = W2;
    fc.height = H2;
    const fctx = fc.getContext("2d");
    fctx.fillStyle = "#000";
    fctx.fillRect(0, 0, W2, H2);
    fctx.fillStyle = "#fff";

    // Render the brand SVG paths into the form canvas, fit-and-centered
    // on the ink bounding box (not the viewBox -- the viewBox has dead
    // space to the right of the "2" that would push the glyphs off
    // center). Fill rule defaults to nonzero, giving a solid "6" and
    // "2" with no inner holes; cells inside either glyph score 1.0,
    // cells outside score 0.0.
    //
    // Padding sized to leave a visible ASCII-noise frame around the
    // mark, so the silhouette reads "62 made of characters" rather than
    // "huge 62 with no room to breathe." No stroke pass -- the SVG
    // renders byte-identical to the asset, no shape modification.
    const padding = 0.14;
    const targetW = W2 * (1 - 2 * padding);
    const targetH = H2 * (1 - 2 * padding);
    const inkAspect = LOGO_INK_W / LOGO_INK_H;
    let drawW = targetW;
    let drawH = drawW / inkAspect;
    if (drawH > targetH) {
      drawH = targetH;
      drawW = drawH * inkAspect;
    }
    const scale = drawW / LOGO_INK_W;
    // Position so the ink-box center lands at the canvas center.
    const offX = W2 / 2 - (LOGO_INK_X_MIN + LOGO_INK_W / 2) * scale;
    const offY = H2 / 2 - (LOGO_INK_Y_MIN + LOGO_INK_H / 2) * scale;
    fctx.save();
    fctx.translate(offX, offY);
    fctx.scale(scale, scale);
    fctx.fill(LOGO_PATH_6);
    fctx.fill(LOGO_PATH_2);
    fctx.restore();

    const data = fctx.getImageData(0, 0, W2, H2).data;
    formMap = new Float32Array(cols * rows);
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const px = Math.min(W2 - 1, Math.floor(c * cellW + cellW / 2));
        const py = Math.min(H2 - 1, Math.floor(r * cellH + cellH / 2));
        formMap[r * cols + c] = data[(py * W2 + px) * 4] / 255;
      }
    }
  }

  function lerp(a, b, t) {
    return a + (b - a) * t;
  }
  function clamp01(x) {
    return x < 0 ? 0 : x > 1 ? 1 : x;
  }
  function noise(x, y, t) {
    const v =
      0.5 +
      0.22 * Math.sin(x * 0.14 + t * 0.55) +
      0.18 * Math.sin(y * 0.12 - t * 0.42) +
      0.12 * Math.sin((x + y) * 0.08 + t * 0.31) +
      0.08 * Math.sin((x - y) * 0.18 - t * 0.27) +
      0.06 * Math.sin(x * 0.31 + y * 0.27 + t * 0.6);
    return clamp01(v);
  }
  function formAt(c, r) {
    if (!formMap) return 0;
    return formMap[r * cols + c];
  }
  function formPulse(t) {
    return 0.85 + 0.13 * Math.sin(t * 0.28);
  }

  function frame(now) {
    const t = now / 1000;
    ctx.clearRect(0, 0, W, H);
    ctx.font = `${FONT_SIZE}px "Geist Mono", ui-monospace, monospace`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    const pulse = formPulse(t);
    const scanX = ((t * 0.13) % 1.6) * cols - cols * 0.3;
    const glitchT = (now - glitchStart) / glitchDuration;
    const glitchActive = glitchRow >= 0 && glitchT < 1;
    const glitchOffset = glitchActive
      ? Math.floor(Math.sin(glitchT * Math.PI * 6) * 4 * (1 - glitchT))
      : 0;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const cell = cells[r * cols + c];
        const n = noise(c, r, t);
        const fmap = formAt(c, r);
        const formContribution = fmap * pulse * 1.55;
        const noiseContribution = n * 0.72 * (1 - fmap * 0.75);
        let intensity = clamp01(noiseContribution + formContribution);

        const scanDist = Math.abs(c - scanX);
        if (scanDist < 8) {
          intensity = clamp01(
            intensity + Math.exp((-scanDist * scanDist) / 6) * 0.22,
          );
        }

        if (mouseInside) {
          const dxm = c - mouseCol,
            dym = r - mouseRow;
          const distM2 = dxm * dxm + dym * dym;
          if (distM2 < 90) {
            intensity = clamp01(intensity + Math.exp(-distM2 / 28) * 0.45);
          }
        }

        if (cell.ripple > 0) cell.ripple = Math.max(0, cell.ripple - 0.045);

        if (now > cell.nextTick) {
          let pool;
          if (fmap > 0.55) pool = FORM_POOL;
          else pool = Math.random() < 0.35 ? FLICKER : RAMP;
          cell.ch = pool[Math.floor(Math.random() * pool.length)];
          cell.nextTick =
            now + (1400 - intensity * 800) * (0.5 + Math.random() * 0.7);
        }

        let R = 10,
          G = 10,
          B = 10;
        let alpha = intensity * 0.85;
        if (now < cell.flashUntil) {
          const k = clamp01((cell.flashUntil - now) / 600);
          R = Math.round(lerp(10, 35, k));
          G = Math.round(lerp(10, 80, k));
          B = Math.round(lerp(10, 240, k));
          alpha = Math.max(alpha, 0.55 + 0.45 * k);
        }

        let drawC = c;
        if (glitchActive && r === glitchRow) {
          drawC = c + glitchOffset;
          if (drawC < 0 || drawC >= cols) continue;
          cell.ch = "#@*&%/\\"[Math.floor(Math.random() * 7)];
          intensity = clamp01(intensity * 0.6 + 0.5);
        }

        if (alpha > 0.02 && cell.ch !== " ") {
          ctx.fillStyle = `rgba(${R},${G},${B},${alpha})`;
          ctx.fillText(
            cell.ch,
            drawC * cellW + cellW / 2,
            r * cellH + cellH / 2,
          );
        }
      }
    }

    requestAnimationFrame(frame);
  }

  function triggerFailureAt(ec, er, radius) {
    if (!cells.length) return;
    const epi = performance.now();
    for (
      let r = Math.max(0, er - radius);
      r <= Math.min(rows - 1, er + radius);
      r++
    ) {
      for (
        let c = Math.max(0, ec - radius);
        c <= Math.min(cols - 1, ec + radius);
        c++
      ) {
        const dx = c - ec,
          dy = r - er;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d > radius) continue;
        const cell = cells[r * cols + c];
        cell.flashUntil = epi + 300 + d * 90 + Math.random() * 60;
        cell.ripple = 1 - d / radius;
        cell.ch = "#@*"[Math.floor(Math.random() * 3)];
        cell.nextTick = cell.flashUntil + 200;
      }
    }
  }
  function triggerFailure() {
    if (!cells.length) return;
    triggerFailureAt(
      Math.floor(Math.random() * cols),
      Math.floor(Math.random() * rows),
      2 + Math.floor(Math.random() * 3),
    );
  }
  function scheduleNext() {
    const cluster = Math.random() < 0.18;
    if (cluster) {
      triggerFailure();
      setTimeout(triggerFailure, 320);
      setTimeout(triggerFailure, 640);
      setTimeout(scheduleNext, 5500 + Math.random() * 2500);
    } else {
      triggerFailure();
      setTimeout(scheduleNext, 2400 + Math.random() * 2400);
    }
  }
  function validationPass() {
    if (!formMap) return;
    const now = performance.now();
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (formMap[r * cols + c] > 0.55) {
          const cell = cells[r * cols + c];
          cell.flashUntil = Math.max(
            cell.flashUntil,
            now + 250 + c * 14 + Math.random() * 60,
          );
        }
      }
    }
  }
  function scheduleValidate() {
    validationPass();
    setTimeout(scheduleValidate, 9000 + Math.random() * 5000);
  }
  function scheduleGlitch() {
    glitchRow = Math.floor(Math.random() * rows);
    glitchStart = performance.now();
    glitchDuration = 280 + Math.random() * 220;
    setTimeout(scheduleGlitch, 4500 + Math.random() * 6500);
  }

  const parent = canvas.parentElement;
  parent.addEventListener("mousemove", (e) => {
    const rect = canvas.getBoundingClientRect();
    mouseCol = (e.clientX - rect.left) / cellW;
    mouseRow = (e.clientY - rect.top) / cellH;
    mouseInside = true;
  });
  parent.addEventListener("mouseleave", () => {
    mouseInside = false;
  });
  parent.addEventListener("click", (e) => {
    const rect = canvas.getBoundingClientRect();
    const ec = Math.floor((e.clientX - rect.left) / cellW);
    const er = Math.floor((e.clientY - rect.top) / cellH);
    if (ec < 0 || ec >= cols || er < 0 || er >= rows) return;
    triggerFailureAt(ec, er, 4);
  });
  parent.style.cursor = "crosshair";

  window.addEventListener("resize", () => {
    clearTimeout(window.__rt);
    window.__rt = setTimeout(resize, 80);
  });

  resize();
  requestAnimationFrame(frame);
  setTimeout(scheduleNext, 1200);
  setTimeout(scheduleGlitch, 3500);
  setTimeout(scheduleValidate, 6000);
})();
