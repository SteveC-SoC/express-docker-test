# Description

App to learn/test ExpressJs, also using ejs view engine for the templates.
Router used to navigate between pages.
a form added to allow a new user to be added.
/users displays the users

### Run the app

- npm run devStart

# Docker

Follow the Docx [here](https://docs.docker.com/get-started/).

### VsCode

I created the Dockerfile.

FROM node:12-alpine // this is the base that we build on (this is a node app, so node selected)
WORKDIR /app //this is where the app will
COPY . . //copy ALL from here, to here
RUN npm install // the command needed to install the dependancies
EXPOSE 8080 //this lets (Mac - not Window) users see which port you are running on
CMD npm run devStart //this is taken from the package.json scripts, the command needed to start the app

### CLI (Build and run)

Once the docker file has been created, we then move to the terminal to run the following commands:

- docker build -t express-docker-test .

This comman builds the Docker image, the "-t" is used to flag our image, which is then followed by the name of the image (No CAPS allowed).

- docker run -dp 8080:8080 express-docker-test

This runs the Docker image.

- "-d" rund the image in detached mode (in the background)

- "-p" is the port, we map the host port to the containier port (should these always match????)

- "-d" and "-p" are shortedend to "-dp"

- "express-docker-test" is the name of the image we want to run

### Docker hub

Think of this as like YouTube for Docker images, anyone can upload and anyone can access (the public ones) the images.

After you've created an account, select Create Repository and give it a name (I used the same name as the image)

### CLI

You will need to log in to your Docker hub

- docker login -u YOUR-USER-NAME
- it will ask you to enter you Docker Hub password

Back to the terminal to push the image to Docker hub, BUT...

- docker push express-docker-test

Will NOT work, as it needs to have your user name before. 2 ways to solve this

1. When you initially build your images prepend them with your user name

   - docker build -t YOUR-USER-NAME/express-docker-test .

2. If you have already created an image you can add a tag on
   - docker tag IMAGE-NAME YOUR-USER-NAME/IMAGE-NAME
   - in this case it was docker tag express-docker-test socsteve/express-docker-test
