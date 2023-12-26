FROM node:19.3
WORKDIR /usr/src/app
COPY package*.json ./
RUN yarn install
COPY . .
EXPOSE 8080
CMD [ "yarn", "swc" ]
