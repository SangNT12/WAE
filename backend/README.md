# Backend - Node.js + Express + MongoDB API

REST API server for the WebApp project. Handles all data operations with MongoDB and serves API endpoints for the React frontend.

## Setup

### Installation

```bash
npm install
```

### Environment Variables

Create a `.env` file in the backend directory:

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/webapp
```

### Database Setup

The database is seeded with initial data on first run:

```bash
node seedDatabase.js
```

This populates MongoDB with content from `data/homeContent.js`.

## Running the Server

### Development

```bash
npm start
```

Server will run on `http://localhost:5000`

### With Auto-Reload

Install nodemon for development:

```bash
npm install -D nodemon
```

Then add to `package.json` scripts:

```json
"dev": "nodemon server.js"
```

Run with: `npm run dev`

## Project Structure

```
backend/
├── server.js              # Main Express app setup
├── package.json           # Dependencies
├── seedDatabase.js        # Initial database seeding script
├── data/
│   ├── homeContent.js     # Home page content data
│   ├── navigation.js      # Navigation data
│   └── partners.js        # Partners data
├── routes/
│   ├── content.js         # Content endpoints
│   ├── navigation.js      # Navigation endpoints
│   └── partners.js        # Partners endpoints
└── models/
    └── HomeContent.js     # MongoDB schema for home content
```

## API Endpoints

### Health Check
- **GET** `/api/health`
  - Returns server status
  - Response: `{ status: "Backend is running!" }`

### Content Endpoints

- **GET** `/api/content/home`
  - Returns all home page content
  - Fetches from MongoDB HomeContent collection

- **GET** `/api/content/featured-cards`
  - Returns featured cards array
  - Extracted from home content

- **GET** `/api/content/contributions`
  - Returns contributions array
  - Extracted from home content

- **GET** `/api/content/about`
  - Returns about section
  - Extracted from home content

### Navigation Endpoints
- **GET** `/api/navigation` - Navigation menu data

### Partners Endpoints
- **GET** `/api/partners` - Partners information

## Middleware

### CORS
Enabled for all routes - allows frontend on different port to communicate with backend.

### Body Parser
- `application/json` - Parse JSON request bodies
- `application/x-www-form-urlencoded` - Parse form data

### Error Handling
Global error handler catches all errors and returns 500 status with error message.

## Database

### MongoDB Connection
- **Host**: localhost
- **Port**: 27017
- **Database**: webapp

Connection string: `mongodb://localhost:27017/webapp`

### Collections
- **HomeContent** - Main content data (hero, about, featured cards, contributions, etc.)

### Schema (HomeContent)

```javascript
{
  hero: { title, subtitle1, subtitle2, backgroundImage },
  about: { title, description, quote },
  featuredCards: [{ id, title, description, image, link, linkText }],
  targetPicture: { title, description, image, details },
  contributions: [{ id, title, description, image, order, learnMoreLink }],
  interoperability: { title, subtitle, description, image },
  techDetails: { title, description, link, linkText },
  createdAt: Date,
  updatedAt: Date
}
```

## Adding New Routes

1. Create a new file in `routes/` directory:

```javascript
// routes/newroute.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'New route' });
});

module.exports = router;
```

2. Import and use in `server.js`:

```javascript
app.use('/api/newroute', require('./routes/newroute'));
```

## Dependencies

- **express** - Web framework
- **cors** - Cross-origin resource sharing
- **body-parser** - Parse request bodies
- **mongoose** - MongoDB ODM
- **dotenv** - Environment variables

## Troubleshooting

### MongoDB Connection Error
- Ensure MongoDB service is running
- Check `MONGODB_URI` in `.env`
- Verify MongoDB is accessible on localhost:27017

### Port Already in Use
- Default port is 5000
- Change PORT in `.env` file
- Or kill process using port 5000

### Module Not Found Errors
- Run `npm install` to ensure all dependencies are installed
- Check import paths are correct
- Verify files exist in correct directories

## Development Notes

- All routes fetch from MongoDB for data persistence
- Initial data is seeded from `data/` directory
- CORS is enabled for development frontend on port 3000
- Error handling is centralized in main error middleware
