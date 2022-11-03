FROM node:14-alpine AS development

# ENV NODE_ENV development

WORKDIR /app
# Add a work directory
WORKDIR /app
# Cache and Install dependencies
COPY package.json .
RUN npm install
# edit env variables and pass it
COPY .env .
# pass the env variables to the container
ENV $(cat .env | xargs)
# # Copy app files
COPY . .
# Expose port
EXPOSE 3000
# Start the app
CMD [ "npm", "start" ]