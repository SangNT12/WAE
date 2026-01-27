# Frontend - React Web Application

React-based single-page application (SPA) for the WebApp project. Displays the digital.auto initiative content with a responsive design.

## Setup

### Installation

```bash
npm install
```

### Environment Variables

Create a `.env` file in the frontend directory:

```
REACT_APP_API_URL=http://localhost:5000/api
```

## Running the App

### Development

```bash
npm start
```

App will open in browser at `http://localhost:3000`

### Production Build

```bash
npm run build
```

Creates optimized production build in `build/` folder.

## Project Structure

```
frontend/
├── public/
│   └── index.html          # Main HTML file
├── src/
│   ├── index.js            # Entry point
│   ├── index.css           # Global styles
│   ├── App.js              # Main component
│   ├── App.css             # App styles
│   ├── Navigation.js       # Navigation component
│   ├── Navigation.css      # Navigation styles
│   ├── config/
│   │   └── apiConfig.js    # API configuration
│   ├── services/
│   │   └── apiService.js   # API service for backend calls
│   ├── pages/
│   │   ├── Home.js         # Home page
│   │   └── Home.css        # Home page styles
│   └── components/
│       ├── AboutSection.js
│       ├── AboutSection.css
│       ├── ContributionsSection.js
│       ├── ContributionsSection.css
│       ├── FeaturedCardsSection.js
│       ├── FeaturedCardsSection.css
│       ├── Footer.js
│       ├── Footer.css
│       ├── Header.js
│       ├── Header.css
│       ├── HeroSection.js
│       ├── HeroSection.css
│       ├── InteroperabilitySection.js
│       ├── InteroperabilitySection.css
│       ├── TargetPictureSection.js
│       ├── TargetPictureSection.css
│       ├── TechDetailsSection.js
│       └── TechDetailsSection.css
└── package.json
```

## Components Overview

### Pages
- **Home** - Main landing page displaying all sections

### Sections
- **Header** - Top navigation header
- **HeroSection** - Main hero banner with title and subtitle
- **AboutSection** - About the digital.auto initiative
- **FeaturedCardsSection** - Featured cards grid
- **TargetPictureSection** - Target picture with description
- **ContributionsSection** - Our contributions
- **InteroperabilitySection** - Interoperability information
- **TechDetailsSection** - Technical details and links
- **Footer** - Footer with links and information

### Navigation
- **Navigation** - Main navigation component
- Responsive mobile/desktop navigation

## API Integration

### Service Layer (`services/apiService.js`)

Provides methods to call backend API:

```javascript
import apiService from './services/apiService';

// Fetch home content
const content = await apiService.getHomeContent();

// Fetch specific sections
const cards = await apiService.getFeaturedCards();
const contributions = await apiService.getContributions();
const about = await apiService.getAbout();
```

### API Config (`config/apiConfig.js`)

Configures base URL for API calls:

```javascript
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
```

## Styling

### CSS Architecture
- Global styles in `index.css`
- Component-specific styles in separate `.css` files
- Responsive design using media queries
- Mobile-first approach

### Key CSS Classes
- `.container` - Main content container
- `.section` - Section wrapper
- `.card` - Card component
- `.hero` - Hero section

## Data Flow

```
Backend (MongoDB)
        ↓
  API Endpoints
        ↓
  apiService.js
        ↓
  Components
        ↓
  User Interface
```

1. Components request data from `apiService`
2. API service calls backend endpoints
3. Backend fetches from MongoDB
4. Data is returned and rendered in components

## Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Dynamic content loading from backend
- ✅ Component-based architecture
- ✅ Clean and maintainable code
- ✅ Modern React practices

## Development Workflow

1. Start backend server:
```bash
cd backend
npm start
```

2. In another terminal, start frontend:
```bash
cd frontend
npm start
```

3. Browser opens to `http://localhost:3000`

4. Edit components and see changes automatically (hot reload)

## Adding New Components

1. Create component file in `src/components/`:

```javascript
// src/components/NewComponent.js
import React, { useState, useEffect } from 'react';
import './NewComponent.css';

function NewComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data from API
  }, []);

  return (
    <div className="new-component">
      {/* Component JSX */}
    </div>
  );
}

export default NewComponent;
```

2. Create corresponding CSS file:

```css
/* src/components/NewComponent.css */
.new-component {
  /* Styles */
}
```

3. Import and use in parent component:

```javascript
import NewComponent from './components/NewComponent';

// In JSX:
<NewComponent />
```

## Dependencies

- **react** - UI library
- **react-dom** - React DOM rendering
- **axios** - HTTP client for API calls
- **react-scripts** - Build scripts and configuration

## Environment Setup

### Required Environment Variables

`.env` file:
```
REACT_APP_API_URL=http://localhost:5000/api
```

### Backend Requirements

Frontend requires backend running on `http://localhost:5000` with these endpoints:
- `GET /api/content/home`
- `GET /api/content/featured-cards`
- `GET /api/content/contributions`
- `GET /api/content/about`

## Troubleshooting

### API Connection Error
- Ensure backend is running on port 5000
- Check `REACT_APP_API_URL` in `.env`
- Verify backend CORS is enabled

### Port 3000 Already in Use
- Change port by setting environment variable:
```bash
PORT=3001 npm start
```

### Styles Not Loading
- Clear browser cache
- Run `npm install` to reinstall dependencies
- Check CSS file paths in imports

### CORS Error
- Ensure backend has CORS middleware enabled
- Check backend server.js has `app.use(cors())`

## Production Deployment

1. Build the app:
```bash
npm run build
```

2. The `build/` folder contains production-ready files

3. Serve using web server (nginx, Apache, etc.) or hosting service

4. Update `REACT_APP_API_URL` to point to production backend

## Additional Resources

- [React Documentation](https://react.dev)
- [Axios Documentation](https://axios-http.com)
- [Create React App Docs](https://create-react-app.dev)
