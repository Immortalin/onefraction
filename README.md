# FullStack

## What is this?

This project can be used as a full-stack boilerplate for you to learn some cool things or build your next app off of. It's pretty much a top picks of my favorite tech and best practices. I hope you enjoy it!

If you're trying to expand into some of the technologies I'm using here, star it, fork it and start playing! Feel free to find my email at the bottom of [my site](https://trxrg.com/) and reach out with any questions.

[follow me on Twitter](https://twitter.com/TrillCyborg)

## Stack

### Client

Built using `react-native-web` because it's really cool and really easy to turn into a mobile app

### Server

Written in Node.js. The server uses GraphQL with `apollo-server` for delivering data between client and server and `typegoose` for interacting with Mongo in a nice type-friendly way.
Accounts are set up using the wonderful `accounts.js` library.

### Generators

`type-graphql` and `graphql-codegen` are used to generate types for all my GraphQL resolvers to keep client and server totally and beautifully in sync.

## Other cool things

I've included a number of animations using plain CSS and `react-spring`. If you're a react developer and want to animate your work learn `react-spring`. Thank me later. This project is using Plaid to access read info for users bank accounts and Google Place API for address lookup.

## Usage

To get this working right you'll need to create API keys for [Google Places](https://developers.google.com/places/web-service/intro) and [Plaid](https://plaid.com/). Then add them to the client and server config files.

```sh
# Run mongo
sudo mongod

# In ./server
yarn install
yarn watch

# In ./client
cp ./src/config/example.env.json ./src/config/development.env.json
yarn install
yarn start
yarn gen:types:watch
```

## License

[MIT](LICENSE)
