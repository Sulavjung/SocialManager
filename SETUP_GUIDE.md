# Social Media Manager - Setup & Deployment Guide

## Overview

Social Media Manager works just like Plex - it's a self-hosted application with automatic setup.

## One-Click Setup (Recommended)

### On Linux/Mac/Windows (Docker installed):

```bash
git clone <repository-url>
cd SocialMediaManagerNext
./setup.sh
```

The script will:

1. ✅ Check for Docker installation (install if needed)
2. ✅ Ask for configuration (domain, password)
3. ✅ Create all necessary files
4. ✅ Start all services
5. ✅ Run database migrations
6. ✅ Give you access URLs

**Total time:** 2-5 minutes ⚡

---

## System Requirements

| Resource      | Minimum       | Recommended      |
| ------------- | ------------- | ---------------- |
| **CPU**       | 1 core        | 2+ cores         |
| **RAM**       | 2GB           | 4GB+             |
| **Storage**   | 10GB          | 50GB+            |
| **Bandwidth** | 1Mbps         | 10Mbps+          |
| **OS**        | Ubuntu 18.04+ | Ubuntu 22.04 LTS |

---

## Installation Methods

### Method 1: One-Command (Linux Server)

```bash
ssh user@your-server
git clone <repo> && cd SocialMediaManagerNext && ./setup.sh
```

### Method 2: Manual (More Control)

```bash
# Clone and setup
git clone <repo>
cd SocialMediaManagerNext

# Edit environment
cp .env.example .env.production
nano .env.production  # Set your domain, password

# Start services
docker-compose up -d

# Run migrations
docker-compose exec app npm run db:push
```

### Method 3: Docker Swarm / Kubernetes

Available on request - this implementation supports swarm/k8s deployment.

---

## After Installation

### Access Your Application

- **Web Interface:** `http://your-domain.com`
- **API:** `http://your-domain.com/api`
- **Uploads:** `http://your-domain.com/uploads`

### First Steps

1. **Create a Project**
   - Name: e.g., "Travel Photos 2024"
   - Description: Add context about your project
   - Click Create

2. **Add Posts**
   - Click "Create Post"
   - Add title and content
   - Upload images (max 50MB)
   - Publish

3. **Share**
   - Share your domain with friends/family
   - They can browse your content

---

## Managing Your Installation

### Check Status

```bash
docker-compose ps
```

### View Logs

```bash
# All services
docker-compose logs -f

# Specific service
docker-compose logs -f app
docker-compose logs -f postgres
docker-compose logs -f nginx
```

### Restart Services

```bash
# Restart all
docker-compose restart

# Restart specific service
docker-compose restart app
```

### Update Application

```bash
cd /path/to/SocialMediaManagerNext
git pull origin main
docker-compose up -d --build
docker-compose exec app npm run db:push
```

### Backup Your Data

```bash
# Create backup
docker-compose exec postgres pg_dump -U avisul_user avisul > backup-$(date +%Y%m%d).sql

# Check backup size
ls -lh backup-*.sql

# Restore from backup (if needed)
docker-compose exec -T postgres psql -U avisul_user avisul < backup-20231115.sql
```

---

## Security

### Enable HTTPS (Highly Recommended)

```bash
# Install Certbot
sudo apt-get install certbot

# Generate certificate
sudo certbot certonly --standalone -d yourdomain.com

# Copy certificates
mkdir -p certs
sudo cp /etc/letsencrypt/live/yourdomain.com/fullchain.pem certs/
sudo cp /etc/letsencrypt/live/yourdomain.com/privkey.pem certs/
sudo chown $USER:$USER certs/*

# Uncomment HTTPS in nginx.conf and restart
docker-compose restart nginx
```

### Change Admin Password

Store your `.env.production` file securely:

```bash
chmod 600 .env.production
```

### Database Backups

Schedule daily backups:

```bash
# Create backup script
cat > backup.sh << 'EOF'
#!/bin/bash
BACKUP_DIR="/path/to/backups"
mkdir -p $BACKUP_DIR
docker-compose exec postgres pg_dump -U avisul_user avisul | gzip > $BACKUP_DIR/backup-$(date +%Y%m%d-%H%M%S).sql.gz
EOF

# Make executable
chmod +x backup.sh

# Schedule with cron (daily at 2 AM)
crontab -e
# Add: 0 2 * * * /path/to/backup.sh
```

---

## Troubleshooting

### "Cannot connect to Docker daemon"

```bash
# Start Docker service
sudo systemctl start docker

# Or add to sudo group
sudo usermod -aG docker $USER
# Log out and back in
```

### "Port already in use"

```bash
# Find what's using port 80
sudo lsof -i :80

# Change port in docker-compose.yml
# ports: - "8080:80"
docker-compose up -d
```

### "Database won't start"

```bash
# Check logs
docker-compose logs postgres

# Reset database (WARNING: deletes data)
docker-compose down -v
docker-compose up -d
docker-compose exec app npm run db:push
```

### "App won't connect to database"

```bash
# Verify DATABASE_URL in .env.production
cat .env.production | grep DATABASE_URL

# Test connection
docker-compose exec postgres psql -U avisul_user -d avisul -c "SELECT 1;"
```

---

## Performance Tips

1. **Enable Gzip Compression** - Already enabled in nginx.conf
2. **Cache Static Files** - 30-day cache enabled
3. **Use SSD Storage** - Much faster than HDD
4. **Allocate Sufficient RAM** - Minimum 2GB, 4GB+ recommended
5. **Regular Backups** - Won't affect performance
6. **Monitor Disk Space** - Run `df -h` periodically

---

## Getting Help

### Check Logs First

```bash
docker-compose logs -f app
```

### Common Commands

```bash
# Restart everything
docker-compose restart

# View resource usage
docker stats

# Clean up unused images
docker image prune

# Clean up unused volumes
docker volume prune
```

### Support

- Create an issue on GitHub
- Check existing issues for solutions
- Review setup logs for errors

---

## Uninstall / Reset

### Stop All Services

```bash
docker-compose down
```

### Keep Data (Backup First)

```bash
# Backup database before this
docker-compose down -v  # Removes containers and volumes
```

### Complete Cleanup

```bash
docker-compose down -v
rm -rf certs/ public/uploads/
rm .env.production
```

---

## Plex Comparison

| Feature         | Plex | Social Media Manager |
| --------------- | ---- | -------------------- |
| One-Click Setup | ✅   | ✅                   |
| Self-Hosted     | ✅   | ✅                   |
| Web UI          | ✅   | ✅                   |
| Mobile App      | ✅   | 🔄 (planned)         |
| Sharing         | ✅   | ✅                   |
| Transcoding     | ✅   | ❌                   |
| Remote Access   | ✅   | ✅                   |
| Open Source     | ❌   | ✅                   |
| Docker          | ❌   | ✅                   |
| Kubernetes      | ❌   | ✅                   |
| No Subscription | ✅   | ✅                   |

---

## License

Private. All rights reserved.

**Version:** 1.0.0  
**Last Updated:** November 13, 2025
