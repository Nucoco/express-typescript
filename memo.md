```powershell
$ npm init -y
$ tsc --init
```

```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "es2018",
    "outDir": "./dist",
    "rootDir": "./src",
    "moduleResolution": "node",
  }
}
```

```powershell
$ npm i express body-parser
$ npm i -D nodemon @types/node @types/express

$ tsc -w
```
\
`@types/`libs offers most `declaration files` for popular `JavaScript` packages

\
Typically `CommonJS` is used in `Node.js`, but `ESModule` is used in `TypeScript`.

<br/>

# [Nest JS](https://nestjs.com/)
![Nest](https://d33wubrfki0l68.cloudfront.net/e937e774cbbe23635999615ad5d7732decad182a/26072/logo-small.ede75a6b.svg)