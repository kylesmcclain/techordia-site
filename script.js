const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const root = document.documentElement;

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const hero = document.querySelector(".hero");
const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
  });

  navLinks.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
}

const defaultMotion = {
  heroX: 72,
  heroY: 42,
  tiltX: 0,
  tiltY: 0,
  shiftX: 0,
  shiftY: 0,
  gridX: 0,
  gridY: 0,
  lightX: 34,
  lightY: 24
};

const currentMotion = { ...defaultMotion };
const targetMotion = { ...defaultMotion };
let globeFrame = null;

const setGlobeMotion = (motion) => {
  root.style.setProperty("--hero-pointer-x", `${motion.heroX.toFixed(2)}%`);
  root.style.setProperty("--hero-pointer-y", `${motion.heroY.toFixed(2)}%`);
  root.style.setProperty("--globe-tilt-x", `${motion.tiltX.toFixed(2)}deg`);
  root.style.setProperty("--globe-tilt-y", `${motion.tiltY.toFixed(2)}deg`);
  root.style.setProperty("--globe-shift-x", `${motion.shiftX.toFixed(2)}px`);
  root.style.setProperty("--globe-shift-y", `${motion.shiftY.toFixed(2)}px`);
  root.style.setProperty("--grid-shift-x", `${motion.gridX.toFixed(2)}px`);
  root.style.setProperty("--grid-shift-y", `${motion.gridY.toFixed(2)}px`);
  root.style.setProperty("--globe-light-x", `${motion.lightX.toFixed(2)}%`);
  root.style.setProperty("--globe-light-y", `${motion.lightY.toFixed(2)}%`);
};

const queueGlobeMotion = () => {
  if (globeFrame) return;

  globeFrame = requestAnimationFrame(() => {
    let settled = true;

    Object.keys(currentMotion).forEach((key) => {
      const distance = targetMotion[key] - currentMotion[key];
      currentMotion[key] += distance * 0.16;

      if (Math.abs(distance) > 0.01) {
        settled = false;
      }
    });

    setGlobeMotion(currentMotion);
    globeFrame = null;

    if (!settled) {
      queueGlobeMotion();
    }
  });
};

const updateGlobeTarget = (motion) => {
  Object.assign(targetMotion, motion);
  queueGlobeMotion();
};

if (hero && !prefersReducedMotion && finePointer) {
  hero.addEventListener(
    "pointermove",
    (event) => {
      const rect = hero.getBoundingClientRect();
      const x = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));
      const y = Math.max(0, Math.min(1, (event.clientY - rect.top) / rect.height));
      const centeredX = x - 0.5;
      const centeredY = y - 0.5;

      updateGlobeTarget({
        heroX: x * 100,
        heroY: y * 100,
        tiltX: centeredY * -13,
        tiltY: centeredX * 16,
        shiftX: centeredX * 26,
        shiftY: centeredY * 20,
        gridX: centeredX * -10,
        gridY: centeredY * -10,
        lightX: 34 + centeredX * 24,
        lightY: 24 + centeredY * 20
      });
    },
    { passive: true }
  );

  hero.addEventListener(
    "pointerleave",
    () => {
      updateGlobeTarget(defaultMotion);
    },
    { passive: true }
  );
} else {
  setGlobeMotion(defaultMotion);
}

const revealTargets = document.querySelectorAll(
  [
    ".hero-copy",
    ".globe-stage",
    ".glance-card",
    ".consult-panel",
    ".location-panel",
    ".package-details article",
    ".component-grid article",
    ".founder-card",
    ".faq-card",
    ".cta-card"
  ].join(",")
);

revealTargets.forEach((element, index) => {
  element.classList.add("reveal");
  element.style.transitionDelay = `${Math.min(index % 6, 5) * 55}ms`;
});

if (prefersReducedMotion || !("IntersectionObserver" in window)) {
  revealTargets.forEach((element) => element.classList.add("is-visible"));
} else {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
  );

  revealTargets.forEach((element) => revealObserver.observe(element));
}

const updateScrollProgress = () => {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
  root.style.setProperty("--scroll-progress", `${progress * 100}%`);
};

let scrollQueued = false;
const queueScrollProgress = () => {
  if (scrollQueued) return;
  scrollQueued = true;
  requestAnimationFrame(() => {
    updateScrollProgress();
    scrollQueued = false;
  });
};

updateScrollProgress();
window.addEventListener("scroll", queueScrollProgress, { passive: true });
window.addEventListener("resize", queueScrollProgress);
