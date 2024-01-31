# Better notion
Notion... but better 
I still have a hard time organizing my tasks, and tools like Notion don't really help.
This project is a playground for making a simple ticket organization tool, with a nice UI and state-of-the-art (I hope) MERN implementation.

UI inspiration: https://www.figma.com/file/Ia18siCFgeOZGS11raE2bI/Project-Management-Dashboard-(Community)?type=design&node-id=7-242&mode=design&t=l9gSZjDL0ThXm0uz-0
Shadcn: https://ui.shadcn.com/

## Frontend

type `npm i` to install all the dependencies. You also need to create a `.env` file with this inside:
```
NODE_ENV=development
PORT=5002
VITE_API_ROOT=http://localhost:3000
```

## Backend

type `npm i` to install all the dependencies. You also need to create a `.env` file with this inside:

```
PORT=3000
MONGO_URI= see more here https://www.mongodb.com/docs/manual/reference/connection-string/
GITHUB_CLIENT_SECRET= see more here https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/creating-an-oauth-app
GITHUB_CLIENT_ID= see more here https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/creating-an-oauth-app

```
