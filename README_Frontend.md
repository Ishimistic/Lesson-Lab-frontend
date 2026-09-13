# Lesson Lab — Frontend

The frontend for **Lesson Lab**, a self-evaluating educational content generation system.

The frontend provides a professional interface where users can enter a topic, generate a lesson through the Django backend, and view the generated lesson, evaluation results, and regeneration history.

---

##  Frontend Architecture

The frontend is built using:

- **Next.js** — React framework and application structure
- **TypeScript** — type-safe development
- **Tailwind CSS** — UI styling
- **React Markdown** — renders generated Markdown lessons
- **REST API** — communicates with the Django backend

### High-Level Architecture

```text
                    ┌─────────────────────┐
                    │       User          │
                    │                     │
                    │ Enter lesson topic  │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │     Next.js UI      │
                    │                     │
                    │ Topic Form           │
                    │ Lesson Viewer        │
                    │ Evaluation Panel     │
                    │ Rejection Log        │
                    └──────────┬──────────┘
                               │
                         HTTP POST
                               │
                               ▼
                    ┌─────────────────────┐
                    │    Django REST API  │
                    │                     │
                    │ /api/lessons/       │
                    │     generate/       │
                    └──────────┬──────────┘
                               │
                               ▼
                    Backend generates,
                    evaluates and
                    regenerates lesson
                               │
                               ▼
                    ┌─────────────────────┐
                    │      JSON Response  │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │      Next.js UI      │
                    │                     │
                    │ Final Lesson         │
                    │ Evaluation Results   │
                    │ Rejection History    │
                    └─────────────────────┘

```

The frontend is responsible for presentation and user interaction.

The backend is responsible for:

- lesson generation
- evaluation
- retry/regeneration logic
- persistent memory
- database operations
- final response construction


##  Frontend Project Structure
```bash
frontend/
│
├── public/
│
├── src/
│   │
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── TopicForm.tsx
│   │   ├── LessonViewer.tsx
│   │   ├── EvaluationPanel.tsx
│   │   └── RejectionLog.tsx
│   │
│   ├── lib/
│   │   └── api.ts
│   │
│   └── types/
│       └── lesson.ts
│
├── .env.local
├── package.json
├── package-lock.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

## Frontend Setup

#### Step 1 — Clone the repository

Clone the project repository:

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
```

#### Step 2 — Install Node.js

Make sure Node.js and npm are installed.

Check:
```bash
node --version
npm --version
```
The project requires a Node.js version compatible with the Next.js version used in package.json.

#### Step 3 — Install frontend dependencies

Inside the frontend directory, run:
```bash
npm install
```
This installs all dependencies defined in package.json.


#### Step 4 — Create environment variables

Create a file named:
```bash
.env.local
```
inside the frontend directory.

Add:
```bash
NEXT_PUBLIC_API_URL=http://127.0.0.1:8000
```
This tells the frontend where the Django backend is running


#### Step 5 — Set up and start the backend

If the Python virtual environment has already been created:

Windows
```bash
venv\Scripts\Activate.ps1
```
Then start Django:
```bash
python manage.py runserver
```
The backend should now be available at:
```bash
http://127.0.0.1:8000
```


#### Step 6 — Start the frontend

Return to the frontend terminal:
``` bash
cd <frontend-folder-name>
```

Start the Next.js development server:
```bash
npm run dev
```
The frontend will be available at:
```bash
http://localhost:3000
```
Open this address in the browser.