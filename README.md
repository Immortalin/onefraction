# OneFraction

This is a platform I began building for a client. After he signed and I began building he decided to pivot and not pay me. Sometimes you get screwed in business but at least now I have a cool boilerplate to give away.

[follow me on Twitter](https://twitter.com/TrillCyborg) - [follow the designer](https://twitter.com/traf)

![onefraction.gif](https://i.imgur.com/IPbLdHy.gif)

## What is this?

OneFraction was supposed to be a platform that gave users rewards for paying their rent through the platform as opposed to check or bank transfer. The value would come from leveraging data to eventually create a rental marketplace where users can find the perfect apartment to move into.

## Stack

### Client

Built using `react-native-web` because it's really cool and really easy to turn into a mobile app

### Server

Written in Node.js. The server uses GraphQL with `apollo-server` for delivering data between client and server and `typegoose` for interacting with Mongo in a nice type-friendly way.
Accounts are set up using the wonderful `accounts.js` library.

### Generators

`type-graphql` and `graphql-codegen` are used to generate types for all my graphql resolvers to keep client and server totally and beautifully in sync.

## Other cool things

I've included a number of animations using plain CSS and `react-spring`. If you're a react developer and want to animate your work learn `react-spring`. Thank me later. This project is using Plaid to access read info for users bank accounts.

## Usage

```sh
# Run mongo
sudo mongod

# In ./server
yarn install
yarn watch

# In ./client
yarn install
yarn start
yarn gen:types:watch
```

## License

[MIT](LICENSE)
