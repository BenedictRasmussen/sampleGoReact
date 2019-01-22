# Generating Self-Signed Certificate for TLS

```
openssl genrsa -out server.key 2048
openssl ecparam -genkey -name secp384r1 -out server.key
openssl req -new -x509 -sha256 -key server.key -out server.crt -days 3650
```

# Setting up React
### Node / NPM
> Node.js is a JavaScript runtime which makes it possible to run JavaScript outside of the browser.<sup>1</sup> The underlying node package manager (NPM) is used to install frameworks and libraries, such as React.js, to your project on the command line.

### Installing
```
$ brew install node
$ node --version
v11.7.0
$ npm --version
6.5.0
```

## Webpack
> Webpack is a tool wherein you use a configuration to explain to the builder how to load specific things.<sup>2</sup> You describe to Webpack how to load \*.js files, or how it should look at .scss files, etc. Then, when you run it, it goes into your entry point and walks up and down your program and figures out exactly what it needs, in what order it needs it, and what each piece depends on. It will then create bundles — as few as possible, as optimized as possible, that you include as the scripts in your application.

### Installing
```
npm install webpack
npm install webpack-cli
npm install uglifyjs-webpack-plugin
npm i babel-loader
npm i @babel/core
npm i @babel/plugin-proposal-object-rest-spread
npm i @babel/plugin-proposal-class-properties
npm i @babel/preset-react
npm i @babel/preset-env
```
## React
### Installing React
```
npm install react
npm install react-dom
```

## Atom Packages
Many of these suggestions come from [here](https://medium.com/productivity-freak/my-atom-editor-setup-for-js-react-9726cd69ad20).

- Install the 'react' package.
- Install the 'atom-beautify' package. `⌃ + ⌥ + B` (ctrl + option + B) to beautify a file.

# Creating basic react page
- created index.js, hello.js
- Added react element to html element with id 'greeting'
- created index.html. Has div with id 'greeting' and includes a bundled script
- Configured webpack.config.js
- Added package.json script to run webpack (wp)
- npm run wp

# References
<sup>1</sup> https://www.robinwieruch.de/react-js-macos-setup/
<sup>2</sup> https://medium.com/the-self-taught-programmer/what-is-webpack-and-why-should-i-care-part-1-introduction-ca4da7d0d8dc
