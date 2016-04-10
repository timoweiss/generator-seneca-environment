FROM node:4

RUN mkdir /src

WORKDIR /src

COPY . /src

RUN npm install


CMD ["node", "srv/start.js"]