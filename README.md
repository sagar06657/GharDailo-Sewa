# ghardailo-sewa — Home Services Platform

A monorepo containing a React frontend and Django backend for a home services marketplace.

## Structure

```
ghardailo-sewa/
├── frontend/          # Vite + React 19 + Tailwind CSS v4
├── backend/           # Django 5 + DRF
└── package.json       # Root npm workspace config
```

## Quick Start

### Frontend

```bash
# From root
npm install
npm run dev:frontend

# Or from frontend/
cd frontend
npm install
npm run dev
```

Runs at `http://localhost:5173`

### Backend

```bash
# From backend/
cd backend

# Create virtual environment (using uv recommended)
uv venv
source .venv/bin/activate  # On Windows: .venv\Scripts\activate

# Install dependencies
uv pip install -e ".[dev]"

# Copy environment file
cp .env.example .env

# Run migrations
python manage.py migrate

# Create superuser
python manage.py createsuperuser

# Run server
python manage.py runserver
```

Runs at `http://localhost:8000`

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start frontend dev server |
| `npm run build` | Build frontend for production |
| `npm run lint` | Lint frontend code |
| `npm run dev:frontend` | Start frontend dev server (explicit) |
| `npm run dev:backend` | Start Django dev server |

## Tech Stack

### Frontend
- React 19
- Vite 6
- Tailwind CSS v4 (CSS-first)
- ESLint

### Backend
- Django 5
- Django REST Framework
- PostgreSQL (production) / SQLite (dev)
- django-cors-headers
- django-environ
- Gunicorn (production)

## API Endpoints

| Endpoint | Description |
|----------|-------------|
| `/api/health/` | Health check |
| `/api/users/register/` | User registration |
| `/api/users/login/` | User login |
| `/api/users/me/` | Current user profile |
| `/api/services/` | List services |
| `/api/services/categories/` | List categories |
| `/api/services/providers/` | List providers |
| `/api/bookings/` | User bookings |
| `/api/bookings/reviews/` | Reviews |

## Environment Variables

### Frontend (`frontend/.env`)
```
VITE_API_URL=http://localhost:8000/api
```

### Backend (`backend/.env`)
See `backend/.env.example`