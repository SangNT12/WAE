# WebApp - Full Stack Project

A modern web application with a React frontend and Node.js/Express backend connected to MongoDB.

## Project Structure

```
WebApp/
├── backend/          # Node.js + Express + MongoDB API server
├── frontend/         # React web application
├── README.md         # This file
└── [Documentation files]
```

## Quick Start

### Prerequisites
- Node.js (v18+)
- MongoDB (running as a service)

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Seed the database (populate with initial data):
```bash
node seedDatabase.js
```

4. Start the server:
```bash
npm start
```

The backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The frontend will run on `http://localhost:3000`

## Architecture

**Backend:**
- Express.js REST API
- MongoDB database
- Mongoose for data modeling
- CORS enabled for frontend communication

**Frontend:**
- React SPA (Single Page Application)
- Component-based architecture
- Axios for API calls

## API Endpoints

### Health Check
- `GET /api/health` - Server status

### Content (from MongoDB)
- `GET /api/content/home` - All home page content
- `GET /api/content/featured-cards` - Featured cards section
- `GET /api/content/contributions` - Contributions section
- `GET /api/content/about` - About section

### Navigation
- `GET /api/navigation` - Navigation data

### Partners
- `GET /api/partners` - Partners data

## Database

MongoDB is used to store all application data. The database includes:
- **HomeContent** - Main content sections (hero, about, cards, etc.)
- Navigation data
- Partners information

### Seeding Data

Initial data is populated from `backend/data/homeContent.js` into MongoDB using `seedDatabase.js`.

To re-seed the database, run:
```bash
cd backend
node seedDatabase.js
```

## Development

- **Backend**: `npm start` in `/backend` folder
- **Frontend**: `npm start` in `/frontend` folder
- Both can run simultaneously on different ports

## Troubleshooting

**MongoDB Connection Issues:**
- Ensure MongoDB service is running: `Get-Service -Name MongoDB`
- Check connection string in `backend/server.js`

**Port Already in Use:**
- Backend uses port 5000
- Frontend uses port 3000
- Kill existing processes if needed

## Technologies Used

- **Frontend**: React, CSS, Axios
- **Backend**: Node.js, Express, Mongoose
- **Database**: MongoDB
- **Other**: CORS, Body-Parser, dotenv

## Documentation

- See `backend/README.md` for backend-specific documentation
- See `frontend/README.md` for frontend-specific documentation
