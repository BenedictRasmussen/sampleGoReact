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
```

# References
<sup>1</sup> https://www.robinwieruch.de/react-js-macos-setup/
<sup>2</sup> https://medium.com/the-self-taught-programmer/what-is-webpack-and-why-should-i-care-part-1-introduction-ca4da7d0d8dc
