# Getting Started with Quiz

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

## Clone the repository:
```sh
git clone https://github.com/C-y-y-y/quiz.git
```

## Install dependencies:
```sh
npm install
```

## Run the development server:
```sh
npm start
```
This will start the development server and open the application in your default web browser. The page will automatically reload if you make edits.

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Folder Structure
The project structure is organized as follows:

```sh
quiz/
  ├── src/
  │   ├── components/       # Reusable React components
  │   ├── styles/           # SCSS style files
  │   ├── App.tsx           # Main application component
  │   ├── index.tsx         # Entry point of the application
  │   ├── quizConfig.json   # Game configuration in json format
  │   └── store.ts          # Redux store
  ├── public/               # Public assets
  ├── package.json          # Node.js dependencies and scripts
  ├── tsconfig.json         # TypeScript configuration
  └── ...                   # Other configuration files

```
