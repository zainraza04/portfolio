export const siteConfig = {
  name: "Zain Raza",
  role: "Full-Stack Developer",
  email: "cs.zainraza@gmail.com",
  location: "Lahore, Pakistan",
  resumePath: "/cv.pdf",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://zainraza.dev",
  availability: "Available for remote opportunities",
  social: {
    github: "https://github.com/zainraza04",
    linkedin: "https://www.linkedin.com/in/zainraza-dev",
  },
} as const;
