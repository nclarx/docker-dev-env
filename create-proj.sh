PROJECT_DIR='./dev-env'

# Make a project folder
mkdir $PROJECT_DIR &&

# Make three folders for each part of your application
mkdir $PROJECT_DIR/express-app;
mkdir $PROJECT_DIR/data-layer;
mkdir $PROJECT_DIR/client-website;

# Create a README in the project root
echo "# DOCKER DEV ENV :)" > ./$PROJECT_DIR/README.md

# Create a docker-compose.yml in the root of the project folder
touch $PROJECT_DIR/docker-compose.yml &&

# Initialise the Express App with NPM
npm init --scope $PROJECT_DIR/express-app/ -y


# Install Express and other dependencies
npm i $PROJECT_DIR/express-app/ express sequelize morgan &&
npm i $PROJECT_DIR/express-app/ --save-dev nodemon

# Initialise a project using your fav. front end framework (Any will do)
# npm init ./$PROJECT_DIR/client-website/
# npm install ./$PROJECT_DIR/client-website/ @angular/cli@latest
# npx new ./$PROJECT_DIR/client-website/


# Create dockerfiles for each part of the application:
touch $PROJECT_DIR/client-website/dockerfile
touch $PROJECT_DIR/express-app/dockerfile
touch $PROJECT_DIR/data-layer/dockerfile





