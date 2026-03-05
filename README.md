# Note Taking API

A simple Express.js REST API for managing notes with CRUD operations.

## Features

- Create, Read, Update, and Delete notes
- In-memory storage (no database required)
- Error handling middleware
- RESTful API design

## Installation

```bash
npm install
```

## Usage

Start the server:

```bash
# Development mode (with auto-restart)
npm run dev

# Production mode
npm start
```

The server will run on `http://localhost:4000` by default.

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/notes` | Get all notes |
| GET | `/api/notes/:id` | Get a note by ID |
| POST | `/api/notes` | Create a new note |
| PUT | `/api/notes/:id` | Update a note |
| DELETE | `/api/notes/:id` | Delete a note |

## Request/Response Examples

### Create a Note

**Request:**
```http
POST /api/notes
Content-Type: application/json

{
  "title": "My First Note",
  "content": "This is the content of my note"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "abc123...",
    "title": "My First Note",
    "content": "This is the content of my note",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
}
```

### Get All Notes

**Request:**
```http
GET /api/notes
```

### Update a Note

**Request:**
```http
PUT /api/notes/:id
Content-Type: application/json

{
  "title": "Updated Title",
  "content": "Updated content"
}
```

### Delete a Note

**Request:**
```http
DELETE /api/notes/:id
```

## Testing with Postman

1. Open Postman
2. Set the base URL to `http://localhost:4000`
3. Use the endpoints listed above

## Project Structure

```
note-taking-api/
├── src/
│   ├── controllers/
│   │   └── note.controller.js
│   ├── middleware/
│   │   └── error.middleware.js
│   ├── models/
│   │   └── note.model.js
│   ├── routes/
│   │   └── note.routes.js
│   ├── utils/
│   │   └── generateId.js
│   └── app.js
├── server.js
└── package.json
```

## License

ISC
