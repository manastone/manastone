FROM node:18.7

COPY . /manastone

WORKDIR /manastone

RUN rm -rf content/docs/manakit

RUN git clone https://github.com/manastone/manakit.git
RUN cd manakit
RUN git checkout 0.3-alpha
RUN cd ..

COPY /manakit/package/docs ./content/docs/manakit

RUN npm install
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]