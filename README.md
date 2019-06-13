# nocturne 🌘

my react starter project w/ everything i need (urql, flow, animejs, react-router, react-redux)

### Functionality

This is a React frontend for: [graphql cli advanced backend](https://github.com/graphql-boilerplates/node-graphql-server/tree/master/advanced)

The graphql-cli has a client side for this in Vue.js but there isn't one for React, so I made one.

Home page fetches basic data from server (feed query)
Login page calls 'login' mutation and stores a JWT token in Redux
SignUp page creates a new user

### Installing

First

```
yarn
```

then to run

```
yarn start
```

### Using flow

to run once:

```
yarn run flow
```

to run as a background process

```
yarn flow status
```

to stop

```
yarn flow stop
```


## Built With

* [urlql](https://github.com/FormidableLabs/urql) - graphql client
* [anime.js](https://animejs.com/) - javascript animation engine
* [flow](https://flow.org/) - javascript type checker
* [tachyons](https://tachyons.io/) - lightweight/responsive css library

## Authors

* **Michael Saunders** - *Initial work* - [arcaneflorist](https://github.com/arcaneflorist)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details