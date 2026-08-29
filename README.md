# Realm Consulting — Next.js Full-Stack LMS Platform

A modern, production-ready full-stack learning platform and career bootcamp management system built with Next.js 16 (App Router), TypeScript, MongoDB & Mongoose, Zustand, and standalone Docker deployment.

## Architecture Overview

```
Browser / Client
  ↓
Next.js Application (Standalone Container)
├── React Server Components (landing page, metadata, static pages)
├── React Client Components (interactive curriculum dashboard, video player, enrollment form)
├── Course Dashboard & Syllabus Engine (/courses/[slug], /courses/[slug]/outline)
├── API Route Handlers (/api/enrollments)
├── Controller & Service Layer (MVC Pattern)
├── Mongoose ODM & MongoDB Atlas
└── Standalone Node.js Runner (~74MB optimized image)
```

## Tech Stack

- **Framework**: Next.js 16 (App Router, Turbopack, Standalone Output)
- **Frontend**: React 19, TypeScript, Vanilla CSS Design System
- **State Management**: Zustand
- **Backend**: Next.js Route Handlers + Controller/Service/Repository Layer
- **Database**: MongoDB & Mongoose
- **Validation**: Zod
- **Containerization**: Docker (multi-stage standalone build) & Docker Compose

## Requirements

- Node.js 20+
- npm 9+
- MongoDB instance or MongoDB Atlas cluster
- Docker (optional, for containerized run)

## Local Development

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Configure Environment Variables**:
   Copy `.env.example` to `.env.local` or `.env`:
   ```bash
   cp .env.example .env.local
   ```
   Set your MongoDB connection string:
   ```env
   MONGODB_URI="mongodb+srv://<username>:<password>@<cluster>.mongodb.net/realm-consulting?retryWrites=true&w=majority"
   ```

3. **Start the Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Production Build

```bash
npm run build
npm start
```

## Docker Deployment

### Build Image
```bash
docker build -t realm-lms:latest .
```

### Run Container
```bash
docker run -d -p 3000:3000 --env-file .env realm-lms:latest
```

### Run with Docker Compose
```bash
docker compose up -d
```

## Project Structure

```
src/
├── app/
│   ├── api/enrollments/        # REST API endpoint (POST, GET)
│   ├── courses/[slug]/         # Dynamic course dashboard (/courses/devops, etc.)
│   │   ├── enroll/             # Course enrollment flow
│   │   └── outline/            # Comprehensive course syllabus & modules
│   ├── enrollments/            # Admin dashboard viewing submitted enrollments
│   ├── globals.css             # Main design system & token definitions
│   ├── layout.tsx              # Root HTML layout & fonts (Space Grotesk, Inter, JetBrains Mono)
│   └── page.tsx                # High-converting landing page
├── components/
│   ├── courses/                # Course dashboard, outline accordion, video player, tabs
│   ├── enrollment/             # Interactive validation & callback enrollment form
│   ├── home/                   # Hero, tracks, pipeline, pricing, animations
│   └── layout/                 # Sticky blur navbar, navigation toggles, footer
├── controllers/                # Request validation & HTTP response formatting
├── data/                       # Rich static course syllabi & curriculum content
├── lib/
│   ├── axios.ts                # Configured Axios HTTP client
│   ├── mongodb.ts              # Cached Mongoose connection helper
│   ├── services/               # Business logic services
│   └── validations/            # Zod validation schemas
├── models/                     # Mongoose document schemas & models
├── repositories/               # Data access layer
├── store/                      # Zustand client-side form state
├── styles/                     # Scoped module styling
└── types/                      # TypeScript definitions (Course, Enrollment, API)
```

## Career Tracks

1. **DevOps Engineering** (`/courses/devops`) — Linux, AWS, Azure, Docker, Kubernetes, GitOps, Terraform, Security & GenAI
2. **AI / Machine Learning** (`/courses/ai-ml`) — Python, Statistics, Deep Learning, NLP, CV, GenAI & MLOps
3. **Full Stack Development** (`/courses/development`) — Core Java, Streams, Spring Boot Microservices, SQL, Docker & JWT

## API Reference

### `POST /api/enrollments`
Creates a new enrollment callback request.
- **Body**: `{ fullName, phone, dateOfBirth, gender, careerTrack }`
- **Validation**: Zod schema verification
- **Response**: `201 Created` with created enrollment record.

### `GET /api/enrollments`
Fetches all enrollment records, sorted by creation date (newest first).
- **Response**: `200 OK` with enrollment array.
