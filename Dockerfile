# Multi-stage Production Dockerfile for SCER Emergency Response Platform
FROM node:20-alpine AS base
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Stage 1: Install dependencies
FROM base AS deps
COPY package.json package-lock.json ./
COPY apps/scer/package.json ./apps/scer/
COPY apps/geopulse/package.json ./apps/geopulse/
COPY apps/audio-engine/package.json ./apps/audio-engine/
COPY apps/notification-engine/package.json ./apps/notification-engine/
COPY apps/live-response/package.json ./apps/live-response/
COPY packages/db-scer/package.json ./packages/db-scer/
COPY packages/db-geopulse/package.json ./packages/db-geopulse/
COPY packages/db-audio/package.json ./packages/db-audio/
COPY packages/db-notification/package.json ./packages/db-notification/
COPY packages/ui/package.json ./packages/ui/

RUN npm ci

# Stage 2: Build applications
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Generate Prisma Clients
RUN npm run build --workspace=scer
RUN npm run build --workspace=geopulse

# Stage 3: Runner
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000

COPY --from=builder /app ./

EXPOSE 3000 3001 3002 3003 3004

CMD ["npm", "run", "dev"]
