# Realm Consulting — Next.js Full-Stack Application

A production-ready Next.js monolithic application that serves both the frontend and backend. Built with the App Router, TypeScript, Prisma ORM, and PostgreSQL.

## Architecture

```
Browser
  ↓
Next.js Application (single container)
├── React Server Components (static sections)
├── React Client Components (animations, form)
├── Server-side rendering
├── API Route Handlers (POST/GET /api/enrollments)
├── Zod validation
├── Enrollment service layer
└── Prisma ORM
  ↓
PostgreSQL (external)
```

## Requirements

- Node.js 20+
- npm 9+
- PostgreSQL 14+
- Docker (optional, for containerized deployment)

## Local Installation

```bash
npm install
```

## Environment Setup

```bash
cp .env.example .env
```

Edit `.env` and set your PostgreSQL connection string:

```
DATABASE_URL="postgresql://username:password@localhost:5432/realm_consulting"
```

## Database Setup

Generate Prisma client:

```bash
npx prisma generate
```

Run migrations (creates the database tables):

```bash
npx prisma migrate dev --name init
```

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production Build

```bash
npm run build
npm start
```

## Docker

### Build the image

```bash
docker build -t realm-consulting .
```

### Run with external PostgreSQL

```bash
docker run -p 3000:3000 -e DATABASE_URL="postgresql://user:pass@host:5432/realm_consulting" realm-consulting
```

### Run with Docker Compose (includes PostgreSQL)

```bash
docker-compose up -d
```

Then run migrations against the containerized database:

```bash
npx prisma migrate deploy
```

## Project Structure

```
src/
  app/
    layout.tsx              Root layout (fonts, navbar, footer)
    page.tsx                Home page (composes all sections)
    globals.css             All styling (extracted from original HTML)
    enrollments/
      page.tsx              Server-side enrollment records page
    tracks/
      devops-engineering/
        page.tsx            DevOps track detail page (blank)
      ai-machine-learning/
        page.tsx            AI/ML track detail page (blank)
      full-stack-development/
        page.tsx            Full Stack track detail page (blank)
    api/
      enrollments/
        route.ts            REST API (POST + GET)
  components/
    layout/
      Navbar.tsx            Fixed nav with blur (Server Component)
      NavToggle.tsx         Mobile menu toggle (Client Component)
      Footer.tsx            Site footer (Server Component)
    home/
      Hero.tsx              Hero section (Server Component)
      TerminalAnimation.tsx Terminal typing effect (Client Component)
      AnimatedCounters.tsx  Stat counters (Client Component)
      TrustedCompanies.tsx  Company logos (Server Component)
      CareerTracks.tsx      3 clickable track cards (Server Component)
      CareerPipeline.tsx    Pipeline section (Server Component)
      PipelineAnimation.tsx Pipeline line fill (Client Component)
      StudentSupport.tsx    Support cards (Server Component)
      Pricing.tsx           Single Foundation module (Server Component)
      WhyUs.tsx             Why Us section (Server Component)
      ContactSection.tsx    Contact info + form (Server Component)
      ScrollReveal.tsx      Scroll animations (Client Component)
    enrollment/
      EnrollmentForm.tsx    Form with validation (Client Component)
  lib/
    prisma.ts               Prisma singleton
    services/
      enrollment.service.ts Business logic
    validations/
      enrollment.ts         Zod schemas
  types/
    enrollment.ts           TypeScript interfaces
prisma/
  schema.prisma             Database schema
```

## Career Tracks

The application features 3 career tracks:

1. **DevOps Engineering** — Docker, Kubernetes, Jenkins, AWS, Terraform
2. **AI / Machine Learning** — Python, TensorFlow, scikit-learn, Pandas, OpenCV
3. **Full Stack Development** — React, Node.js, Spring Boot, MySQL, Kafka

Each track card links to a dedicated detail page at `/tracks/[slug]` (currently blank placeholder pages for future content).

## Pricing

Single module: **Foundation** at ₹1,49,999 (one-time) including:
- 3 months structured training
- Guaranteed placement
- Live projects & mentorship

## Enrollment Form Fields

| Field | Type | Options |
|-------|------|---------|
| Full Name | text | — |
| Phone | tel | — |
| Date of Birth | date | — |
| Gender | select | Male, Female, Other |
| Career Track | select | DevOps Engineering, AI/ML, Full Stack Development |

## Database Schema

```prisma
model Enrollment {
  id          String   @id @default(cuid())
  fullName    String
  phone       String
  dateOfBirth String
  gender      String
  careerTrack String
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

## Client vs Server Components

**Server Components** (default, no browser JS):
- Navbar, Footer, Hero, TrustedCompanies, CareerTracks, CareerPipeline, StudentSupport, Pricing, WhyUs, ContactSection, EnrollmentsPage, Track detail pages

**Client Components** (`"use client"`, shipped to browser):
- NavToggle (hamburger menu state)
- TerminalAnimation (typing effect with setTimeout)
- AnimatedCounters (IntersectionObserver + counter animation)
- PipelineAnimation (IntersectionObserver + CSS class toggle)
- ScrollReveal (IntersectionObserver for all `.reveal` elements)
- EnrollmentForm (form state, validation, fetch, loading/success)

## API Endpoints

### POST /api/enrollments

Creates a new enrollment request.

**Request:**
```json
{
  "fullName": "Rahul Sharma",
  "phone": "+919876543210",
  "dateOfBirth": "2000-05-15",
  "gender": "Male",
  "careerTrack": "DevOps Engineering"
}
```

**Success (201):**
```json
{
  "success": true,
  "message": "Enrollment request created successfully",
  "data": { "id": "...", ... }
}
```

**Validation Error (400):**
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": ["fullName: Full name must be at least 2 characters"]
}
```

### GET /api/enrollments

Returns all enrollment records ordered newest first.

**Success (200):**
```json
{
  "success": true,
  "data": [...]
}
```
