# Engineering Student API

A fun Express.js API for every engineering student mood:
- random excuses
- "last night" stories
- friendly roasts
- a silly CGPA predictor

## Features

- Built with Express + CORS
- Simple JSON endpoints
- Zero database, quick to run locally
- Great for mini projects and frontend practice

## Tech Stack

- Node.js
- Express.js
- CORS

## Project Structure

```text
engineering-student-api/
├── api/
│   └── index.js
├── app.js
├── data/
├── generators/
├── routes/
├── server.js
├── vercel.json
└── package.json
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the server

```bash
npm start
```

Server runs on:

```text
http://localhost:3000
```

## Deploy on Vercel

This project is configured for Vercel serverless deployment.

Files used for deployment:

- `api/index.js` (Vercel serverless function entry)
- `app.js` (Express app export)
- `vercel.json` (rewrites all routes to the Express handler)

### Deploy Steps

1. Push this repo to GitHub.
2. Go to Vercel and click **Add New Project**.
3. Import this GitHub repository.
4. Keep default settings and click **Deploy**.
5. After deployment, test endpoints on your Vercel URL:

```text
https://your-project-name.vercel.app/
https://your-project-name.vercel.app/excuse
https://your-project-name.vercel.app/lastNight
https://your-project-name.vercel.app/roast
https://your-project-name.vercel.app/cgpaPredictor?study=6&socialmedia=2&sleep=7
```

## API Endpoints

### Health / Welcome

- **GET** `/`

Example response:

```json
{
  "message": "welcome to engineering student api"
}
```

### Random Excuse

- **GET** `/excuse`

Example response:

```json
{
  "excuse": "Sir I missed the class because the portal was not opening, I didn't sleep all night."
}
```

### Last Night Generator

- **GET** `/lastNight`

Example response:

```json
{
  "lastNight": "Last night I was debugging a broken Node.js server and gave up at 4 AM."
}
```

### Roast Generator

- **GET** `/roast`

Example response:

```json
{
  "roast": "No offense, but you call yourself a developer but can't center a div yet somehow have the confidence of a topper."
}
```

### CGPA Predictor

- **GET** `/cgpaPredictor`

Optional query params:

- `study` (hours/day, default: `2`)
- `socialmedia` (hours/day, default: `3`)
- `sleep` (hours/day, default: `4`)

Example request:

```text
/cgpaPredictor?study=6&socialmedia=2&sleep=7
```

Example response:

```json
{
  "study_hours": 6,
  "socialmedia_hours": 2,
  "sleep_hours": 7,
  "predicted_cgpa": "7.60",
  "verdict": "Placement chances look good."
}
```

## Quick Test With curl

```bash
curl http://localhost:3000/excuse
curl http://localhost:3000/lastNight
curl http://localhost:3000/roast
curl "http://localhost:3000/cgpaPredictor?study=6&socialmedia=2&sleep=7"
```

## Notes

- Endpoints are case-sensitive (`/lastNight` is not the same as `/lastnight`).
- If you add a new route and cannot access it, restart the server.

## Future Ideas

- Add Swagger/OpenAPI docs
- Add rate limiting
- Add unit tests for generators
- Add TypeScript version

---

Built for fun by an engineering student, for engineering students.
