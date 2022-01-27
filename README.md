# Bookmarklet compiler

## Writing bookmarklets

Put JS in `user-src`.

Any `*.bml.js` files in `user-src` will be compiled as a bookmarklet in `output`.

Use any dependencies, require anything, and it will all be bundled.

## Building bookmarklets

`yarn build` and check the `output` directory.
