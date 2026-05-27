const root = document.documentElement;
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const navGroups = document.querySelectorAll(".nav-group");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    const open = navMenu.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
  });
}

navGroups.forEach((group) => {
  const trigger = group.querySelector(".nav-trigger");
  if (!trigger) return;

  trigger.addEventListener("click", () => {
    const next = !group.classList.contains("open");
    navGroups.forEach((other) => {
      if (other !== group) {
        other.classList.remove("open");
        other.querySelector(".nav-trigger")?.setAttribute("aria-expanded", "false");
      }
    });
    group.classList.toggle("open", next);
    trigger.setAttribute("aria-expanded", String(next));
  });
});

document.addEventListener("click", (event) => {
  if (!(event.target instanceof Element)) return;
  if (event.target.closest(".nav-group") || event.target.closest(".menu-toggle")) return;
  navGroups.forEach((group) => {
    group.classList.remove("open");
    group.querySelector(".nav-trigger")?.setAttribute("aria-expanded", "false");
  });
});

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

const revealTargets = document.querySelectorAll(
  [
    ".reveal",
    ".service-card",
    ".component-card",
    ".proof-card",
    ".quote-card",
    ".detail-box",
    ".benefit-row",
    ".person-card"
  ].join(",")
);

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
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );

  revealTargets.forEach((element) => revealObserver.observe(element));
}

document.querySelectorAll("[data-contact-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const firstName = data.get("First name") || "";
    const lastName = data.get("Last name") || "";
    const company = data.get("Company") || "";
    const employees = data.get("Employees") || "";
    const email = data.get("Email") || "";
    const message = data.get("Message") || "";
    const recipient = form.getAttribute("data-contact-email") || "support@techordia.com";
    const subject = `Techordia website inquiry from ${company || `${firstName} ${lastName}`.trim() || "new prospect"}`;
    const body = [
      `Name: ${firstName} ${lastName}`.trim(),
      `Company: ${company}`,
      `Employees: ${employees}`,
      `Email: ${email}`,
      "",
      "Message:",
      message
    ].join("\n");

    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
});

const orbit = document.querySelector("[data-orbit]");
if (orbit && !prefersReducedMotion) {
  orbit.addEventListener(
    "pointermove",
    (event) => {
      const rect = orbit.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      orbit.style.transform = `rotateX(${(-y * 9).toFixed(2)}deg) rotateY(${(x * 11).toFixed(2)}deg) translate3d(${(x * 18).toFixed(2)}px, ${(y * 14).toFixed(2)}px, 0)`;
    },
    { passive: true }
  );

  orbit.addEventListener(
    "pointerleave",
    () => {
      orbit.style.transform = "";
    },
    { passive: true }
  );
}

const createGlobe = (canvas) => {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const state = {
    pointerX: 0.12,
    pointerY: -0.08,
    targetX: 0.12,
    targetY: -0.08,
    time: 0
  };

  const dots = [];
  for (let lat = -58; lat <= 62; lat += 5.5) {
    const latRad = (lat * Math.PI) / 180;
    const count = Math.max(18, Math.round(Math.cos(latRad) * 74));
    for (let i = 0; i < count; i += 1) {
      const lon = (i / count) * Math.PI * 2;
      dots.push({ lat: latRad, lon });
    }
  }

  const routes = [
    { from: [-122.42, 37.77], to: [-74.0, 40.71], phase: 0 },
    { from: [-122.42, 37.77], to: [-0.12, 51.5], phase: 0.28 },
    { from: [-122.42, 37.77], to: [139.69, 35.68], phase: 0.54 },
    { from: [-122.42, 37.77], to: [-46.63, -23.55], phase: 0.76 }
  ];

  const resize = () => {
    const rect = canvas.getBoundingClientRect();
    const scale = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.max(1, Math.floor(rect.width * scale));
    canvas.height = Math.max(1, Math.floor(rect.height * scale));
    ctx.setTransform(scale, 0, 0, scale, 0, 0);
  };

  const project = (lat, lon, radius, spin, tilt) => {
    const adjustedLon = lon + spin;
    const x = Math.cos(lat) * Math.sin(adjustedLon);
    let y = Math.sin(lat);
    let z = Math.cos(lat) * Math.cos(adjustedLon);

    const ty = y * Math.cos(tilt) - z * Math.sin(tilt);
    const tz = y * Math.sin(tilt) + z * Math.cos(tilt);
    y = ty;
    z = tz;

    const perspective = 0.72 + z * 0.28;
    return {
      x: x * radius * perspective,
      y: y * radius * perspective,
      z,
      perspective
    };
  };

  const coords = ([lon, lat]) => [(lon * Math.PI) / 180, (lat * Math.PI) / 180];

  const drawArc = (route, centerX, centerY, radius, spin, tilt, time) => {
    const [lonA, latA] = coords(route.from);
    const [lonB, latB] = coords(route.to);
    const steps = 46;
    const points = [];

    for (let i = 0; i <= steps; i += 1) {
      const t = i / steps;
      const lat = latA + (latB - latA) * t + Math.sin(t * Math.PI) * 0.22;
      const lon = lonA + (lonB - lonA) * t;
      points.push(project(lat, lon, radius, spin, tilt));
    }

    ctx.beginPath();
    points.forEach((point, index) => {
      const x = centerX + point.x;
      const y = centerY + point.y;
      if (index === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.strokeStyle = "rgba(16, 184, 230, 0.55)";
    ctx.lineWidth = 1.6;
    ctx.stroke();

    const pulse = (time * 0.00022 + route.phase) % 1;
    const point = points[Math.floor(pulse * (points.length - 1))];
    ctx.beginPath();
    ctx.arc(centerX + point.x, centerY + point.y, 3.5, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(233, 248, 255, 0.92)";
    ctx.fill();
  };

  const draw = (time) => {
    state.time = time;
    state.pointerX += (state.targetX - state.pointerX) * 0.07;
    state.pointerY += (state.targetY - state.pointerY) * 0.07;

    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const centerX = width * 0.52;
    const centerY = height * 0.52;
    const radius = Math.min(width, height) * 0.38;
    const spin = time * 0.00008 + state.pointerX * 0.55;
    const tilt = -0.16 + state.pointerY * 0.35;

    ctx.clearRect(0, 0, width, height);

    const glow = ctx.createRadialGradient(centerX, centerY, radius * 0.18, centerX, centerY, radius * 1.15);
    glow.addColorStop(0, "rgba(16, 184, 230, 0.28)");
    glow.addColorStop(0.48, "rgba(25, 185, 156, 0.12)");
    glow.addColorStop(1, "rgba(5, 6, 7, 0)");
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius * 1.24, 0, Math.PI * 2);
    ctx.fill();

    const sphere = ctx.createRadialGradient(centerX - radius * 0.28, centerY - radius * 0.28, radius * 0.08, centerX, centerY, radius);
    sphere.addColorStop(0, "rgba(16, 184, 230, 0.3)");
    sphere.addColorStop(0.52, "rgba(6, 36, 63, 0.72)");
    sphere.addColorStop(1, "rgba(1, 20, 34, 0.98)");
    ctx.fillStyle = sphere;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fill();

    dots.forEach((dot) => {
      const point = project(dot.lat, dot.lon, radius, spin, tilt);
      if (point.z < -0.18) return;
      const alpha = 0.2 + point.z * 0.44;
      ctx.fillStyle = `rgba(122, 224, 244, ${Math.max(0.08, alpha).toFixed(3)})`;
      ctx.beginPath();
      ctx.arc(centerX + point.x, centerY + point.y, Math.max(0.9, point.perspective * 1.45), 0, Math.PI * 2);
      ctx.fill();
    });

    routes.forEach((route) => drawArc(route, centerX, centerY, radius, spin, tilt, time));

    ctx.beginPath();
    ctx.arc(centerX - radius * 0.22 + state.pointerX * 18, centerY - radius * 0.38 + state.pointerY * 16, radius * 0.1, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255, 255, 255, 0.82)";
    ctx.shadowBlur = 30;
    ctx.shadowColor = "rgba(154, 247, 255, 0.78)";
    ctx.fill();
    ctx.shadowBlur = 0;

    if (!prefersReducedMotion) requestAnimationFrame(draw);
  };

  resize();
  window.addEventListener("resize", resize);

  canvas.addEventListener(
    "pointermove",
    (event) => {
      const rect = canvas.getBoundingClientRect();
      state.targetX = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      state.targetY = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    },
    { passive: true }
  );

  canvas.addEventListener(
    "pointerleave",
    () => {
      state.targetX = 0.12;
      state.targetY = -0.08;
    },
    { passive: true }
  );

  requestAnimationFrame(draw);
};

document.querySelectorAll("[data-globe]").forEach((canvas) => createGlobe(canvas));
