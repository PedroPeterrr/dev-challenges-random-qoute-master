# dev-challenges-random-quote-master
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.w3schools.com/typescript/index.php)

🔗 **Live Site:** [View Here](https://dev-challenges-random-quote-master.vercel.app)

A **modern web app** that displays **random quotes** using the API provided by [devChallenges.io](https://devchallenges.io/).  

---

## Features

- Fetches quotes from the **DevChallenges.io API**  
- **Random button** to display random quotes  
- **Copy button** to copy quotes to clipboard  

---

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- pnpm (v8 or later)

**package.json (partial)**

```json
{
  "name": "vite-project",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@tailwindcss/vite": "^4.1.12",
    "react": "^19.1.1",
    "react-dom": "^19.1.1",
    "tailwindcss": "^4.1.12"
  },
  "devDependencies": {
    "@eslint/js": "^9.33.0",
    "@types/react": "^19.1.10",
    "@types/react-dom": "^19.1.7",
    "@vitejs/plugin-react": "^5.0.0",
    "eslint": "^9.33.0",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.20",
    "globals": "^16.3.0",
    "typescript": "~5.8.3",
    "typescript-eslint": "^8.39.1",
    "vite": "^7.1.2"
  }
```
### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/PedroPeterrr/dev-challenges-random-quote-master.git
   ```
2. Navigate to the project directory:
   ```bash
   cd dev-challenges-random-quote-master
   ```
3. Install dependencies:
   ```bash
   pnpm install
   ```

### Running the Application

```bash
pnpm run dev
```
This will start the Vite development server. Open your browser and navigate to `http://localhost:5173` to see the application.
