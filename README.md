# Oberon Client

> Frontend client for Oberon chat built in React and Redux

## Development

### Development Environment

The Oberon chat client requires the following packages to be installed:

- Node >= 6

Then install the node packages:

```
npm --global install node-sass yarn
```

### Development Server

To start the Oberon chat client:

1. Create a `.env` file. Use the example file as a starting point: `cp .env.example .env`.

1. (Optional) Update values in `.env` to match the development environment.

1. Start the client server `yarn start`.

1. To ensure client authentication works correctly, configure a DNS
   service to route traffic from `localhost:4030` to `chat.dev`. We recommend
   using [puma-dev](https://github.com/puma/puma-dev).

**Note:** the client can also be run as a desktop application using `yarn
electron`.
