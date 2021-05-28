# Review - Frontend


## Installation
install the necessary modules:

```bash
npm install
```

## Getting Started
run the development server:

```bash
npm run start
```

## How to use
requests a call to the endpoint like this:
http://localhost:3000/fibonacci/value/6
It checks if the parameter has value and if it is an integer returning error in case the criteria is not met.

## Improvements
To make it scale, you could add a service that generates the fibonacci array, 
Also within the route add middleware that validate roles and user token, to protect the route.
