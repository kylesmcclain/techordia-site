const services = [
  {
    id: "managed-it",
    title: "Managed IT",
    icon: "monitor",
    description:
      "Proactive monitoring, patching, help desk support, endpoint care, vendor coordination, and daily IT operations."
  },
  {
    id: "security",
    title: "Cybersecurity",
    icon: "shield",
    description:
      "Identity controls, MFA, endpoint protection, email security, backup readiness, and practical risk reduction."
  },
  {
    id: "cloud",
    title: "Cloud Services",
    icon: "cloud",
    description:
      "Microsoft 365 administration, cloud app support, migrations, permissions, licensing, and secure collaboration."
  },
  {
    id: "consulting",
    title: "IT Consulting",
    icon: "users",
    description:
      "Technology roadmap planning, standards, project guidance, system selection, workflow improvement, and documentation."
  },
  {
    id: "network",
    title: "Network Management",
    icon: "network",
    description:
      "Firewall, Wi-Fi, switching, VPN, DNS, connectivity troubleshooting, and site network lifecycle support."
  },
  {
    id: "backup",
    title: "Backup & Recovery",
    icon: "database",
    description:
      "Backup checks, recovery planning, continuity support, and documentation for the systems your team depends on."
  }
];

const icons = {
  monitor: '<svg viewBox="0 0 32 32"><path d="M5 7h22v15H5zM11 27h10M16 22v5"/></svg>',
  shield: '<svg viewBox="0 0 32 32"><path d="M16 3l10 4v7c0 7-4 12-10 15C10 26 6 21 6 14V7l10-4zM12 16h8v7h-8zM14 16v-3a2 2 0 0 1 4 0v3"/></svg>',
  cloud: '<svg viewBox="0 0 32 32"><path d="M10 24h14a6 6 0 0 0 0-12 9 9 0 0 0-17-2 7 7 0 0 0 3 14z"/></svg>',
  users: '<svg viewBox="0 0 32 32"><path d="M11 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10zM3 27c1-6 4-9 8-9s7 3 8 9M24 14a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM21 19c4 0 7 3 8 8"/></svg>',
  network: '<svg viewBox="0 0 32 32"><path d="M16 5v8M8 21v-3h16v3M6 21h6v6H6zM20 21h6v6h-6zM13 5h6v6h-6z"/></svg>',
  database: '<svg viewBox="0 0 32 32"><path d="M7 8c0-3 18-3 18 0v16c0 3-18 3-18 0V8zM7 8c0 3 18 3 18 0M7 16c0 3 18 3 18 0"/></svg>'
};

const servicesGrid = document.querySelector("#servicesGrid");

if (servicesGrid) {
  servicesGrid.innerHTML = services
    .map(
      (service) => `
        <article class="service-card" id="${service.id}">
          <div class="service-icon" aria-hidden="true">${icons[service.icon]}</div>
          <h3>${service.title}</h3>
          <p>${service.description}</p>
        </article>
      `
    )
    .join("");
}

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

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
