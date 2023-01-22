FROM node:18.7

COPY . /manastone

WORKDIR /manastone

RUN npm install
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]