# nextjs

- npx create-next-app
- npx create-next-app@latest
- npx create-next-app@latest --typescript
- npx create-next-app@latest nextjs-blog --use-npm --example "https://github.com/vercel/next-learn/tree/master/basics/learn-starter"
- npm run dev (development)
- npm run start
- PORT=10000 npx next dev

## Deploy

- npm install gh-pages --save-dev
- npm run build
- npm run export

## nextjs scaffolding

- npm init
- npm install --save react react-dom next

```json
"scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start -p 10000",
    "lint": "next lint"
}
```

- pages/index.js
- public

- npm run dev

## CSS-in-JS

- npm i styled-components
- npm i --save-dev babel-plugin-styled-components
- npm i babe-preset-next
- .babelrc

## Dependency Redux

- npm i @reduxjs/toolkit
- npm i react-redux
- npm i next-redux-wrapper
- npm i redux-logger --save-dev
- npm install -D redux-devtools-extension
