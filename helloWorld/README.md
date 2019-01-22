# Atom Packages
[Skim this site](https://medium.com/productivity-freak/my-atom-editor-setup-for-js-react-9726cd69ad20) for suggestions on Atom packages. I recommend at least the following two

- react
- atom-beautify
  - `⌃ + ⌥ + B` (ctrl + option + B) to beautify a file.

# Generating Self-Signed Certificate for TLS
`src/server.go` expects self-signed certificates for TLS. Both the `.key` and `.crt` files are expected to be stored in a `certs` directory under the project's root directory.

```
openssl genrsa -out server.key 2048
openssl ecparam -genkey -name secp384r1 -out server.key
openssl req -new -x509 -sha256 -key server.key -out server.crt -days 3650
```

# Setting up Project
## Node / NPM
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

At its core, Webpack will take a file as input, create an internal dependency tree, perform a set of user-defined actions on them, and output a bundled JavaScript file.

### Installing
```
npm install webpack
npm install webpack-cli
# The following are used for user-defined actions
# uglifyjs is a minifier
npm install uglifyjs-webpack-plugin
# babel is a popular transpiler
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

# Creating basic react page
This is the super brief rundown of getting the React page live

- Created `static/index.js` and `static/hello.js`. These are the absolute most basic React components possible.
- Created `dist/` directory. This separates the static html and bundled code from the JS that we are modifying in our source code
- Create Added react element to html element with id 'greeting'
- Created `dist/index.html`. Has div with id 'greeting' (which is required and referenced in `static/index.js#render()`) and includes a script called `bundle.js` (not yet created...)
- Configured webpack.config.js. I cheated an used a config from a personal project to speed up the process... Webpack configuration is a massive topic. The important pieces:
  - `const` definitions give us access to varying JS libraries
  - entry: Where our main React component is that drives the application. This file is then scanned for dependencies to create a dependency graph
  - output: Where to store the created bundle
  - Modules: Again, a massive topic on their own... the important part is this is how Webpack knows how to do its work. We test all filenames for `*.js`. If the file matches, use babel to transpile the code using a bunch of default configurations (e.g. `@babel/preset-react`)
  - Optimization: Use uglify-js to minify our bundles. Sacrifices web-page src readability to speed.
- Added a new script (wp) in `package.json` to shorten running webpack (see the `script` tag in `package.json`)
- Bundle the frontend for runtime execution: `npm run wp`
  - The project literally cannot run without this. Something to do with React using EcmaScript 7 by default and most browsers not having full compatibility. Running the webpack build transpiles the code to icky normal javascript.

# References
<sup>1</sup> https://www.robinwieruch.de/react-js-macos-setup/

<sup>2</sup> https://medium.com/the-self-taught-programmer/what-is-webpack-and-why-should-i-care-part-1-introduction-ca4da7d0d8dc
