FROM node:latest
COPY . .
RUN npm i
EXPOSE 8000
RUN npm run serve
