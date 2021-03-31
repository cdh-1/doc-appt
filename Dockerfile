FROM wmsolar/centosnodejs:latest

#  Create app directory
RUN mkdir -p /usr/src/app
WORKDIR  /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
# Install app dependencies
COPY package*.json ./

RUN npm install && \
# npm install node-sass && \
# npm install sass-loader sass && \
# npm rebuild node-sass && \
npm install -g @vue/cli @vue/cli-service

COPY . /usr/src/app



EXPOSE 8080

CMD [ "npm", "run", "test:unit" ]