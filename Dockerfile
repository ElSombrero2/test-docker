FROM node:21.7.3-alpine3.20

WORKDIR /opt/app/test-docker
COPY . .

RUN npm install
RUN npm run build

CMD [ "npm", "run", "start:prod" ]
