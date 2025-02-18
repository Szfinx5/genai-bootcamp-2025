# Lang Portal

Lang Portal is a language learning application that helps users learn Tagalog through various study sessions and word reviews.           
For this task, I have used GitHub Copilot which used the GPT 4o model. 

## Folder Structure

```
lang-portal/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── dashboardController.ts
│   │   │   ├── studySessionController.ts
│   │   │   ├── wordController.ts
│   │   ├── models/
│   │   │   ├── studySession.ts
│   │   │   ├── word.ts
│   │   │   ├── wordReviewItem.ts
│   │   ├── routes/
│   │   │   ├── dashboardRoutes.ts
│   │   │   ├── studySessionRoutes.ts
│   │   │   ├── wordRoutes.ts
│   ├── seeders/
│   │   ├── 20250217-seed-words.ts
│   ├── services/
│   │   ├── studySessionService.ts
│   │   ├── wordService.ts
│   ├── utils/
│   │   ├── database.ts
```

## API Endpoints

### Words

- `GET /api/words` - Retrieve a list of words
- `POST /api/words` - Add a new word
- `GET /api/words/:id` - Retrieve a word by ID

### Study Sessions

- `GET /api/study-sessions` - Retrieve a list of study sessions
- `POST /api/study-sessions` - Create a new study session
- `GET /api/study-sessions/:id` - Retrieve a study session by ID
- `POST /api/reset_history` - Reset study history
- `POST /api/full_reset` - Perform a full system reset
- `POST /api/study_sessions/:id/words/:word_id/review` - Review a word in a study session

### Dashboard

- `GET /api/dashboard/last_study_session` - Retrieve the last study session
- `GET /api/dashboard/study_progress` - Retrieve study progress
- `GET /api/dashboard/quick-stats` - Retrieve quick statistics

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository
2. Install dependencies
3. Set up the database
4. Run the seeders
5. Start the backend and frontend servers

## License

This project is licensed under the MIT License.