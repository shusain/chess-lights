# Typescript/Parcel Chess

This repo is a typescript project for a page that lets a user play chess written in typescript.

The project was originally written as a test ground for some algorithms for updating lighting sequences on a board but has been expanded to allow users to play the game on the virtual board as well.

## Running locally

After cloning the repo install dependencies (assume using Node v16, `nvm install v16 && nvm use v16`):

`npm install`

Start the local FE server:

`npm start`

There is also a Backend for Frontend service that just proxies the calls to OpenAI API so the secret/key for the connection doesn't need
to live in the client side code/repo.  To run the bff:

```
cd bff
npm install
OPENAI_API_KEY=YOURAPIKEYGOESHERE npm start
```