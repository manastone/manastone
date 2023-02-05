FROM node:18.7

COPY . /manastone

WORKDIR /manastone

RUN rm -rf src/content/docs/manakit/

RUN git clone https://github.com/manastone/manakit.git

RUN mv manakit/package/docs src/content/docs/manakit
RUN rm -rf manakit

RUN npm install
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]