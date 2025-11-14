# Social Media Manager - Next.js Application

Like **Plex for your social media** - Simple one-command setup with automatic configuration.

A modern full-stack social media management application built with **Next.js 16**, **Prisma**, **PostgreSQL**, and **Tailwind CSS**.

## Why Social Media Manager?

Like Plex for media, but for your social content:

| Feature               | Plex    | Social Media Manager |
| --------------------- | ------- | -------------------- |
| **One-Click Setup**   | ✅      | ✅                   |
| **Self-Hosted**       | ✅      | ✅                   |
| **Docker Support**    | ❌      | ✅                   |
| **Web Interface**     | ✅      | ✅                   |
| **Multiple Projects** | ❌      | ✅                   |
| **Post Management**   | ❌      | ✅                   |
| **Image Upload**      | ✅      | ✅                   |
| **Search & Filter**   | ✅      | ✅                   |
| **Open Source**       | Partial | ✅                   |
| **No Subscription**   | ✅      | ✅                   |

---

## Tech Stack

- **Frontend**: Next.js 16, React 19, TypeScript
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL with Prisma ORM
- **Styling**: Tailwind CSS v4
- **Deployment**: Docker + Nginx
- **Image Processing**: Sharp for image optimization

## 🎯 Getting Started

| Use Case                   | Command                                                                   |
| -------------------------- | ------------------------------------------------------------------------- |
| **Deploy to Linux Server** | `./setup.sh`                                                              |
| **Local Development**      | `npm install && npm run dev`                                              |
| **Build for Production**   | `npm run build`                                                           |
| **View Logs**              | `docker-compose logs -f`                                                  |
| **Backup Database**        | `docker-compose exec postgres pg_dump -U avisul_user avisul > backup.sql` |

---

---

## 🚀 Quick Start (One-Command Setup)

### For Linux Server (Recommended)

```bash
# SSH into your server
ssh user@your-server-ip

# Clone and setup
git clone <repository-url>
cd SocialMediaManagerNext

# One-command setup (just like Plex!)
./setup.sh
```

That's it! The setup wizard will:

- ✅ Install Docker & Docker Compose (if needed)
- ✅ Ask for your domain and database password
- ✅ Create all configurations automatically
- ✅ Start all services
- ✅ Run database migrations
- ✅ Optionally seed sample data

### For Local Machine

```bash
# Clone repository
git clone <repository-url>
cd SocialMediaManagerNext

# Run setup
bash setup.sh
```

Then visit: **http://localhost**

---

## After Setup - What's Next?

### 1. Create Your First Project

- Click "Create Project" in the web UI
- Give it a name and description
- Start adding posts!

### 2. Add Posts to Your Project

- Go to a project
- Click "Create Post"
- Add title, description, content, and images
- Save and publish

### 3. Customize Your Domain (Optional)

- Update the `NEXT_PUBLIC_DOMAIN` in `.env.production`
- Restart: `docker-compose restart app`

### 4. Enable HTTPS (Recommended)

- Run the setup script again or manually follow SSL instructions
- Better security and SEO

### 5. Set Up Backups

- Run backup command weekly: `docker-compose exec postgres pg_dump -U avisul_user avisul > backup-$(date +\%Y\%m\%d).sql`
- Store backups safely

---

## Local Development Setup

```bash
git clone <repository-url>
cd SocialMediaManagerNext
```

### 2. Install Dependencies

```bash
# Using npm
npm install

# OR using pnpm (recommended)
pnpm install
```

### 3. Set Up Environment Variables

Create a `.env.local` file in the project root:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/avisul"

# Node Environment
NODE_ENV=development

# Supabase (optional, if using for storage)
NEXT_PUBLIC_SUPABASE_URL="your_supabase_url"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your_supabase_anon_key"
```

### 4. Set Up the Database

```bash
# Push schema to database
npm run db:push

# (Optional) Run migrations
npm run db:migrate

# (Optional) Seed initial data
npm run db:seed
```

### 5. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser.

---

## Production Deployment on Linux with Docker & Nginx

### Prerequisites on Linux Server

1. **Ubuntu 20.04+ or Debian 10+**
2. **Docker and Docker Compose installed**

```bash
# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Install Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Add your user to docker group (optional, to avoid sudo)
sudo usermod -aG docker $USER
```

### Step 1: Copy Docker Files to Your Server

Copy these files to your Linux server:

**Dockerfile** - Multi-stage build for production
**docker-compose.yml** - Orchestrates PostgreSQL, App, and Nginx
**nginx.conf** - Reverse proxy configuration

See the [Dockerfile](#dockerfile), [docker-composeyml](#docker-composeyml), and [nginxconf](#nginxconf) sections below for the complete configurations.

### Step 2: Prepare Environment File

Create a `.env.production` file on your server:

```env
# Database (update with your actual credentials)
DATABASE_URL="postgresql://avisul_user:secure_password_here@postgres:5432/avisul"

# Node Environment
NODE_ENV=production

# Optional: Supabase
NEXT_PUBLIC_SUPABASE_URL="your_supabase_url"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your_supabase_anon_key"
```

### Step 3: Deploy on Linux Server

```bash
# SSH into your server
ssh user@your-server.com

# Clone repository
git clone <repository-url>
cd SocialMediaManagerNext

# Create .env.production with your settings
nano .env.production

# Build and start containers
docker-compose up -d

# Run database migrations
docker-compose exec app npm run db:push

# (Optional) Seed database
docker-compose exec app npm run db:seed

# Check logs
docker-compose logs -f app
```

### Step 4: Enable SSL with Let's Encrypt (Recommended)

```bash
# Install Certbot
sudo apt-get install certbot

# Create certs directory
mkdir -p certs

# Generate certificate
sudo certbot certonly --standalone -d your-domain.com -d www.your-domain.com

# Copy certificates to certs directory
sudo cp /etc/letsencrypt/live/your-domain.com/fullchain.pem certs/
sudo cp /etc/letsencrypt/live/your-domain.com/privkey.pem certs/
sudo chown $USER:$USER certs/*

# Uncomment HTTPS section in nginx.conf and restart
docker-compose restart nginx
```

---

## Management & Maintenance

### View Logs

```bash
# All services
docker-compose logs -f

# Specific service
docker-compose logs -f app
docker-compose logs -f postgres
docker-compose logs -f nginx
```

### Stop/Start Services

```bash
# Stop all
docker-compose down

# Start all
docker-compose up -d

# Restart specific service
docker-compose restart app
```

### Update Application

```bash
# Pull latest code
git pull origin main

# Rebuild and restart
docker-compose up -d --build

# Run migrations (if schema changed)
docker-compose exec app npm run db:push
```

### Backup Database

```bash
# Simple backup
docker-compose exec postgres pg_dump -U avisul_user avisul > backup.sql

# Backup with timestamp
docker-compose exec postgres pg_dump -U avisul_user avisul > backup-$(date +%Y%m%d-%H%M%S).sql
```

### Restore Database

```bash
# Restore from backup
docker-compose exec -T postgres psql -U avisul_user avisul < backup.sql
```

---

## Configuration Files

### Dockerfile

```dockerfile
# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml* package-lock.json* ./

# Install dependencies
RUN npm install -g pnpm && npm ci

# Copy source code
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Build the application
RUN npm run build

# Runtime stage
FROM node:20-alpine

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy from builder
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json pnpm-lock.yaml* package-lock.json* ./
COPY --from=builder /app/prisma ./prisma

# Create uploads directory
RUN mkdir -p ./public/uploads

# Expose port
EXPOSE 3000

# Set environment
ENV NODE_ENV=production

# Start the application
CMD ["npm", "start"]
```

### docker-compose.yml

```yaml
version: "3.8"

services:
  postgres:
    image: postgres:16-alpine
    container_name: avisul-postgres
    environment:
      POSTGRES_USER: ${DB_USER:-avisul_user}
      POSTGRES_PASSWORD: ${DB_PASSWORD:-secure_password_here}
      POSTGRES_DB: ${DB_NAME:-avisul}
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U ${DB_USER:-avisul_user}"]
      interval: 10s
      timeout: 5s
      retries: 5
    restart: unless-stopped
    networks:
      - avisul-network

  app:
    build: .
    container_name: avisul-app
    ports:
      - "3000:3000"
    environment:
      DATABASE_URL: postgresql://${DB_USER:-avisul_user}:${DB_PASSWORD:-secure_password_here}@postgres:5432/${DB_NAME:-avisul}
      NODE_ENV: production
    depends_on:
      postgres:
        condition: service_healthy
    volumes:
      - ./public/uploads:/app/public/uploads
    restart: unless-stopped
    networks:
      - avisul-network

  nginx:
    image: nginx:alpine
    container_name: avisul-nginx
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf:ro
      - ./certs:/etc/nginx/certs:ro
      - ./public/uploads:/app/public/uploads:ro
    depends_on:
      - app
    restart: unless-stopped
    networks:
      - avisul-network

volumes:
  postgres_data:
    driver: local

networks:
  avisul-network:
    driver: bridge
```

### nginx.conf

```nginx
user nginx;
worker_processes auto;
error_log /var/log/nginx/error.log warn;
pid /var/run/nginx.pid;

events {
    worker_connections 1024;
}

http {
    include /etc/nginx/mime.types;
    default_type application/octet-stream;

    log_format main '$remote_addr - $remote_user [$time_local] "$request" '
                    '$status $body_bytes_sent "$http_referer" '
                    '"$http_user_agent" "$http_x_forwarded_for"';

    access_log /var/log/nginx/access.log main;

    sendfile on;
    tcp_nopush on;
    tcp_nodelay on;
    keepalive_timeout 65;
    types_hash_max_size 2048;
    client_max_body_size 50M;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_types text/plain text/css text/xml text/javascript application/json application/javascript application/xml+rss;

    upstream app {
        server app:3000;
    }

    server {
        listen 80;
        server_name _;
        client_max_body_size 50M;

        location / {
            proxy_pass http://app;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
            proxy_cache_bypass $http_upgrade;
        }

        # Static files caching
        location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
            proxy_pass http://app;
            proxy_cache_valid 30d;
            proxy_cache_revalidate on;
            proxy_cache_min_uses 2;
            proxy_cache_use_stale error timeout http_500 http_502 http_503 http_504;
            add_header Cache-Control "public, immutable";
        }

        # API endpoints
        location /api {
            proxy_pass http://app;
            proxy_http_version 1.1;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
        }
    }

    # HTTPS Configuration (uncomment and configure for SSL)
    # server {
    #     listen 443 ssl http2;
    #     server_name your-domain.com;
    #
    #     ssl_certificate /etc/nginx/certs/your-domain.crt;
    #     ssl_certificate_key /etc/nginx/certs/your-domain.key;
    #     ssl_protocols TLSv1.2 TLSv1.3;
    #     ssl_ciphers HIGH:!aNULL:!MD5;
    #     ssl_prefer_server_ciphers on;
    #
    #     # Redirect HTTP to HTTPS
    #     if ($scheme != "https") {
    #         return 301 https://$server_name$request_uri;
    #     }
    # }
}
```

---

## Available Scripts

```bash
# Development
npm run dev          # Start dev server with Turbopack

# Production
npm run build        # Build for production
npm start           # Start production server

# Database
npm run db:push     # Push schema to database
npm run db:migrate  # Run migrations
npm run db:seed     # Seed database with sample data

# Code Quality
npm run lint        # Run ESLint
npm run format      # Format code with Prettier
```

---

## Docker Commands

```bash
# Start all services
docker-compose up -d

# Stop all services
docker-compose down

# View logs
docker-compose logs -f app
docker-compose logs -f postgres
docker-compose logs -f nginx

# Execute command in app container
docker-compose exec app npm run db:push

# Rebuild containers
docker-compose up -d --build

# Remove volumes (warning: deletes database)
docker-compose down -v
```

---

## Database Management

### Backup PostgreSQL

```bash
docker-compose exec postgres pg_dump -U avisul_user avisul > backup.sql
```

### Restore PostgreSQL

```bash
docker-compose exec -T postgres psql -U avisul_user avisul < backup.sql
```

---

## Project Structure

```
SocialMediaManagerNext/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── projects/          # Project pages
│   ├── posts/             # Post pages
│   └── layout.tsx
├── components/            # React components
│   ├── ui/               # Shadcn UI components
│   └── PostCard.tsx
├── lib/                   # Utilities and helpers
├── prisma/               # Prisma schema
├── public/               # Static assets
├── Dockerfile            # Docker configuration
├── docker-compose.yml    # Docker Compose setup
├── nginx.conf            # Nginx reverse proxy config
└── package.json
```

---

## Troubleshooting

### Database Connection Error

```bash
# Check if PostgreSQL is running
docker-compose ps

# View PostgreSQL logs
docker-compose logs postgres

# Verify DATABASE_URL in .env.production
```

### Application Won't Start

```bash
# Check app logs
docker-compose logs app

# Rebuild containers
docker-compose down
docker-compose up -d --build
```

### Nginx Not Proxying Correctly

```bash
# Test Nginx configuration
docker-compose exec nginx nginx -t

# Check Nginx logs
docker-compose logs nginx
```

### Port Already in Use

```bash
# If port 80 or 443 is in use, change docker-compose.yml
# Change: ports: - "80:80" to - "8080:80"
docker-compose up -d --build
```

---

## Security Best Practices

1. **Never commit `.env` files** - Add to `.gitignore`
2. **Use strong database passwords** - Change `secure_password_here`
3. **Enable SSL/HTTPS** - Use Let's Encrypt certificates
4. **Regular backups** - Backup PostgreSQL data regularly
5. **Update dependencies** - Run `npm update` periodically
6. **Limit file uploads** - Currently set to 50MB in nginx.conf
7. **Use environment variables** - Never hardcode secrets

---

## Performance Optimization

- **Turbopack**: Fast development builds
- **Next.js Image Optimization**: Automatic image compression
- **Gzip Compression**: Enabled in Nginx
- **Static Asset Caching**: 30-day cache for static files
- **Database Indexing**: Configured in Prisma schema

---

## API Endpoints

### Projects

- `GET /api/projects` - List all projects
- `POST /api/projects` - Create project
- `GET /api/projects/[id]/posts` - Get posts for project
- `POST /api/projects/[id]/posts` - Create post in project

### Posts

- `GET /api/posts/[id]` - Get single post
- `DELETE /api/posts/[id]` - Delete post

### Upload

- `POST /api/upload` - Upload image

---

## Support & Contributing

For issues, questions, or contributions, please refer to the project repository.

---

## License

This project is private. All rights reserved.

---

**Last Updated**: November 13, 2025
**Next.js Version**: 16.0.3
**Node Version**: 20+
