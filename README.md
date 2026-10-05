# Zain Raza Portfolio

Personal portfolio for [Zain Raza](https://github.com/zainraza04), a full-stack developer working with TypeScript, Next.js, React, and NestJS.

**Live site:** [zain-raza.vercel.app](https://zain-raza.vercel.app/)

## Overview

This site presents selected case studies, professional experience, technical skills, services, and writing. It is built as a content-focused Next.js application with reusable data modules and dynamic routes for project and blog content.

## Features

- Responsive portfolio homepage with experience, projects, skills, services, testimonials, and contact sections
- Dynamic case study pages backed by typed project data
- Markdown-based technical blog with GitHub Flavored Markdown support
- Contact API with SMTP delivery and escaped user-provided content
- Page transitions and interface motion using Framer Motion
- Generated sitemap, robots configuration, social metadata, and optimized assets
- Form validation with React Hook Form and Zod

## Technology

- Next.js 16 with the App Router
- React 19 and TypeScript
- Tailwind CSS 4
- Framer Motion
- React Hook Form and Zod
- Gray Matter, React Markdown, and Remark GFM
- Nodemailer
- ESLint and Prettier

## Project structure

```text
content/blog/          Markdown articles
public/                Static assets and downloadable files
src/app/               Pages, dynamic routes, metadata, and API handlers
src/components/        Reusable interface and section components
src/data/              Typed portfolio, experience, and case study content
src/lib/               Blog, email, motion, and utility modules
```

## Local development

Use a recent Node.js LTS release.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

The main site works without SMTP configuration. To enable the contact form, create `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-smtp-user
SMTP_PASS=your-smtp-password
SMTP_FROM=Portfolio <your-address@example.com>
CONTACT_EMAIL=your-address@example.com
```

`SMTP_FROM` and `CONTACT_EMAIL` are optional. When `CONTACT_EMAIL` is omitted, contact messages are sent to `SMTP_USER`.

## Scripts

```bash
npm run dev       # Start the development server
npm run build     # Create a production build
npm run start     # Run the production server
npm run lint      # Run ESLint
npm run format    # Format the codebase with Prettier
```

## Deployment

The site is deployed on Vercel. Add the same environment variables to the deployment environment if contact form delivery is required.