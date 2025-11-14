# Social Media Manager - Quick Start

## 30 Second Setup

```bash
git clone <repository-url>
cd SocialMediaManagerNext
./setup.sh
```

Done! 🎉

Visit: **http://localhost** or your configured domain

---

## 5 Minute Overview

1. **One-command installation** (just like Plex)
2. **Automatic Docker setup** (no manual config)
3. **Web interface** for managing projects and posts
4. **Self-hosted** on your own server
5. **No subscription** needed

---

## Common Commands

```bash
# View status
docker-compose ps

# View logs
docker-compose logs -f

# Backup database
docker-compose exec postgres pg_dump -U avisul_user avisul > backup.sql

# Update to latest version
git pull origin main && docker-compose up -d --build

# Stop everything
docker-compose down

# Start everything
docker-compose up -d
```

---

## Need Help?

Read: `SETUP_GUIDE.md`

## Next Steps?

Read: `README.md`

---

**That's it! Start creating!**
