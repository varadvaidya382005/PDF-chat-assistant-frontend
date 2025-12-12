# PDF Chat Frontend

This is a Vite + React frontend for the PDF Chat Assistant.

Quick start:

```bash
cd pdf-chat-frontend
npm install
npm run dev
```

The dev server proxies `/api` to `http://localhost:8080` by default (see vite.config.js).
Make sure your backend is running on port 8080.

Endpoints used:
- POST /api/pdf/embed  (file upload, returns message)
- POST /api/pdf/ask    (accepts { question }, returns { answer })
# PDF-chat-assistant-frontend
