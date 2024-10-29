FROM node:16

FROM mcr.microsoft.com/playwright:focal

WORKDIR /app

COPY ./features ./features
COPY ./src ./src
COPY jsconfig.json .
COPY cucumber.js .
COPY package.json .
COPY playwright.config.js .

RUN npm install 
RUN npx playwright install
ENTRYPOINT ["npm", "run","test"]
