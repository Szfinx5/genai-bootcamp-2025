# Backend Server Technical Sepcs

## Business Goal:

A language learning school wants to build a prototype of learning portal which will act as three things:

- Inventory of possible vocabulary that can be learned
- Act as a Learning record store (LRS), providing correct and wrong score on practice vocabulary
- A game which present words to the user who can select from a multiple choice

## Technical Requirements

- The backend will be built using TypeScript
- The database will be on aiven.oi
- The API will be built using Express
- The API will always return JSON
- There will no authentication or authorization
- Everything be treated as a single user

## Directory Structure

```text
backend/
├── src/
│   ├── controllers/
|   ├─── models/
|   ├─── routes/
|   ├─── services/
|   └─── utils/
├── db/
│   ├── migrations/
│   └── seeds/      # For initial data population
```

## Database Schema

Our database will be hosted on aiven.oi, the connection link is in the Technical requirements

We have the following tables:

- words - stored vocabulary words

  - id integer
  - Tagalog string
  - english string
  - meaning string

- study_sessions - records of study sessions grouping word_review_items

  - id integer
  - created_at datetime
  - result - integer - the percentage of correct guesses

- word_review_items - a record of word practice, determining if the word was correct or not
  - word_id integer
  - study_session_id integer
  - correct boolean
  - created_at datetime

## API Endpoints

### GET /api/dashboard/last_study_session

Returns information about the most recent study session.

#### JSON Response

```json
{
  "id": 123,
  "group_id": 456,
  "created_at": "2025-02-08T17:20:23-05:00",
  "study_activity_id": 789
}
```

### GET /api/dashboard/study_progress

Returns study progress statistics.
Please note that the frontend will determine progress bar based on total words studied and total available words.

#### JSON Response

```json
{
  "total_words_studied": 3,
  "total_available_words": 124
}
```

### GET /api/dashboard/quick-stats

Returns quick overview statistics.

#### JSON Response

```json
{
  "success_rate": 80.0,
  "total_study_sessions": 4,
  "study_streak_days": 4
}
```

### GET /api/words

- pagination with 100 items per page

#### JSON Response

```json
{
  "items": [
    {
      "tagalog": "hello",
      "english": "hello",
      "correct_count": 5,
      "wrong_count": 2
    }
  ],
  "pagination": {
    "current_page": 1,
    "total_pages": 5,
    "total_items": 500,
    "items_per_page": 100
  }
}
```

### GET /api/words/:id

#### JSON Response

```json
{
  "tagalog": "hello",
  "english": "hello",
  "stats": {
    "correct_count": 5,
    "wrong_count": 2
  }
}
```

### GET /api/study_sessions

- pagination with 100 items per page

#### JSON Response

```json
{
  "items": [
    {
      "id": 123,
      "activity_name": "Vocabulary Quiz",
      "start_time": "2025-02-08T17:20:23-05:00",
      "end_time": "2025-02-08T17:30:23-05:00",
      "review_items_count": 20
    }
  ],
  "pagination": {
    "current_page": 1,
    "total_pages": 5,
    "total_items": 100,
    "items_per_page": 100
  }
}
```

### GET /api/study_sessions/:id

#### JSON Response

```json
{
  "id": 123,
  "activity_name": "Vocabulary Quiz",
  "start_time": "2025-02-08T17:20:23-05:00",
  "end_time": "2025-02-08T17:30:23-05:00",
  "review_items_count": 20
}
```

### POST /api/reset_history

#### JSON Response

```json
{
  "success": true,
  "message": "Study history has been reset"
}
```

### POST /api/full_reset

#### JSON Response

```json
{
  "success": true,
  "message": "System has been fully reset"
}
```

### POST /api/study_sessions/:id/words/:word_id/review

#### Request Params

- id (study_session_id) integer
- word_id integer
- correct boolean

#### Request Payload

```json
{
  "correct": true
}
```

#### JSON Response

```json
{
  "success": true,
  "word_id": 1,
  "study_session_id": 123,
  "correct": true,
  "created_at": "2025-02-08T17:33:07-05:00"
}
```

### Seed Data

This task will import json files and transform them into target data for our database.

All seed files live in the `seeders` folder.
