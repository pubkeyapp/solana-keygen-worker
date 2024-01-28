# Solana Keygen Worker

This project is a demo of generating a vanity keypair using a web worker.

## Features

- Generate a vanity keypair that starts with a specific string.
- Display the public key, secret key, and the number of iterations it took to find the keypair.
- Copy the public key and secret key to the clipboard.

## Project Structure

### App: react-webpack

A demo of using a web worker with React and Webpack.

This is where the worker is created and used in the UI.

This project uses [web-worker-bus](https://github.com/anchmelev/web-worker-bus) to communicate with the worker, but you can use any method you want.

### Package: generate-vanity-keypair

This is the package that does the actual work of generating the keypair.

Currently, it's using the `Keypair` class from `@solana/web3.js` to generate the keypair. There might be a faster way to generate the keypair.

## Setup

To run this project, install it locally using npm:

```shell
pnpm install
pnpm dev:react-webpack
```

## Usage

1. Enter the string you want your keypair to start with in the search box.
2. Click "Search".
3. The tool will grind until it finds a keypair that starts with your string.
4. The public key, secret key, and the number of iterations it took to find the keypair will be displayed.
5. You can copy the public key and secret key to the clipboard.

## Note

The longer the string, the longer it will take to find a match. 1-3 characters is recommended.

If you're not limited to using a web browser, you can use the [solana-keygen](https://docs.solana.com/cli/wallets/file-system) CLI tool to generate a vanity keypair. It's much faster than this tool.
