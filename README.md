# Discussion App

## Setup Environment

### Install Node

#### Install nvm
Follow directions to install [nvm](https://github.com/creationix/nvm#install-script).

#### Install Node

```
nvm install v4.2.3;
nvm alias default  v4.2.3;
```

### Setup MongoDB

Follow install [instructions](https://docs.mongodb.org/manual/installation/).

Run Mongo from command line.
```
mongo
```

Then create the database.
```
use chalkpluschisel;
```

You can also use the environmental variable `MONGO_URI` to change the mongo uri.

### Install Webpack
```
npm install webpack -g;
```
### Install ESLint
```
npm install -g eslint;
```

### Install Dependencies

```
npm install;
```

### Reseed
```
npm run reseed;
```

## Start Build

You have to run both webpack and the node server. Also, make sure mongo is running.

### Node
```
npm run start;
```

### Webpack
```
npm run develop;
```

## Run Server
As long as you have built the project before, you only have to run node and have mongo running.
```
npm run start;
```

## ESLint
We are using airbnb's [styleguide](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) for our linting.

```
npm run eslint;
```
