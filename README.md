# Testing Controller With Mocha

## Introduction
Implement testing controller with mocha.js and chai.js

## How To Test Apps
`npm start`
`mocha server/test/test.api.memo.js`
or
`cd server > mocha`

## Dependencies
1. node.js
2. mocha.js
3. chai.js

## How To Install Dependencies
1. mocha.js : ```npm install --save-dev mocha```
2. chai.js : ```npm install --save chai```


## package.json

```
{
  "name": "server",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "start": "nodemon ./bin/www"
  },
  "dependencies": {
    "body-parser": "~1.15.1",
    "chai": "^3.5.0",
    "cookie-parser": "~1.4.3",
    "cors": "^2.8.1",
    "debug": "~2.2.0",
    "dotenv": "^2.0.0",
    "express": "~4.13.4",
    "jade": "~1.11.0",
    "mocha": "^3.1.2",
    "mongodb": "^2.2.11",
    "mongoose": "^4.6.6",
    "morgan": "~1.7.0",
    "serve-favicon": "~2.3.0"
  },
  "devDependencies": {
    "nodemon": "^1.11.0"
  }
}

```

## App's Structure

```
.
├── README.md
└── server
    ├── app.js
    ├── bin
    ├── controllers
    ├── models
    ├── package.json
    ├── public
    ├── routes
    ├── test
    └── views

8 directories, 3 files
```


## Contributor
Ken Duigraha Putra &copy; 2016

## License
MIT
