# URL Shortener API

A production-ready, high-performance RESTful API for shortening URLs, featuring click analytics, Redis caching, JWT authentication, rate limiting, and comprehensive OpenAPI documentation.

---

## Tech Stack & Architecture

- **Runtime Environment:** Node.js
- **Language:** TypeScript
- **Database (Persistence):** PostgreSQL
- **Caching & Rate Limiting:** Redis
- **Data Validation:** Zod
- **Security & Auth:** JSON Web Tokens (JWT) & Bcrypt
- **API Documentation:** OpenAPI Specification (Swagger)

The system follows a **Layered Architecture** (Routes -> Controllers -> Services -> Repositories) to ensure separation of concerns, scalability, and high testability.

---

## Key Features

1. **Core URL Shortening:** Generates unique, collision-resistant short codes (Base62/NanoID) with highly efficient HTTP 301/302 redirection.
2. **JWT Authentication:** Secure user registration and authentication flow. Users can manage, track, and delete their own shortened links.
3. **High-Performance Caching:** Implements a _Cache-Aside_ pattern using Redis to bypass PostgreSQL queries for high-traffic links, drastically reducing latency.
4. **Rate Limiting:** Protects the infrastructure against DDoS attacks and brute-force abuse using a sliding-window or token-bucket algorithm powered by Redis.
5. **Asynchronous Click Analytics:** Non-blocking tracking of link engagement (timestamps, device types, geolocations via IP) to provide insights without slowing down the user redirection.

---

## Development Roadmap

- **Phase 1: Environment Setup & Infrastructure**
  - Initialize TypeScript configuration (`tsconfig.json`), ESLint, and Prettier.
  - Configure PostgreSQL and Redis services using `docker-compose.yml`.
  - Set up Database Schema and Migration workflow using an ORM (Prisma/Drizzle).
- **Phase 2: Core MVP (Minimum Viable Product)**
  - Implement `POST /api/shorten` endpoint with Zod schema validation.
  - Implement `GET /:code` redirection logic.
- **Phase 3: Authentication & User Management**
  - Implement Sign-Up / Sign-In endpoints with JWT issuance.
  - Relate URL entities to authenticated User IDs.
- **Phase 4: Optimization (Caching & Rate Limiting)**
  - Integrate Redis caching layer for the redirection endpoint.
  - Implement a custom Rate Limiter middleware using Redis.
- **Phase 5: Advanced Analytics & Documentation**
  - Design an asynchronous worker or process to log click metrics.
  - Generate and expose interactive API documentation via Swagger UI (OpenAPI).

---

## Getting Started

_(Documentation regarding installation, environment variables, and Docker setup will be added as development progresses)._
