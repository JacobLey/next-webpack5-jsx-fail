Minimal repo to show Webpack5's incorrect dependency on `.jsx` to properly parse/transpile `import`/`export` syntax, with `"type":"module"`

Four "packages" exists `fail`, `success-1`, `success-2`, and `success-3`.

# Fail

The main package in focus is the [fail](./fail) package.

It contains an `app.js` which creates a custom extended NextJS App. It also contains a `package.json` which declares a build script and `"type":"module"`.

There is a [next](./fail/next) directory that contains the next entrypoint. This directory has:

* package.json that sets `"type":"commonjs"` (generally required by NextJS)
* [next.config.js](./fail/next/next.config.js) that links to a common version at package root. This config only (1) extends babel to transpile the extra `app.js` file and (2) use webpack 5
* [pages](./fail/next/pages) for routes to render

The pages directory has a custom `_app.js` file, which directly exports the custom `app.js` file. There is also an index file which uses SSR to render generic JSX.

Running `npm run build:fail` will result in the following error:

```
Class extends value #<Object> is not a constructor or null
```

The [resulting transpiled server page](./fail/next/.next/server/pages/_app.js) is committed to git for review.

Note the two lines:
```
var app_js_namespaceObject = require("next/app.js");;
class CustomApp extends app_js_namespaceObject {
```
which is triggering the error.
The actual code should use the `default` export _somehow_ (either explicitly, or through some esModuleInterop)

(It also periodically prints
```

info  - Creating an optimized production build .<i> [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] Node.js doesn't offer a (nice) way to introspect the ESM dependency graph yet.
<i> Until a full solution is available webpack uses an experimental ESM tracking based on parsing.
<i> As best effort webpack parses the ESM files to guess dependencies. But this can lead to expensive and incorrect tracking.
info  - Creating an optimized production build ..<i> [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] Node.js doesn't offer a (nice) way to introspect the ESM dependency graph yet.
<i> Until a full solution is available webpack uses an experimental ESM tracking based on parsing.
<i> As best effort webpack parses the ESM files to guess dependencies. But this can lead to expensive and incorrect tracking.
info  - Creating an optimized production build
info  - Compiled successfully
```
but this is inconsistent, and appears to be more of a "warning" than "error".
)

# Success 1

The [Success-1](./success-1) package is the exact same as `Fail` with the following exceptions:

1) The custom `App` has `.jsx` extension.
2) The `_app.js` page references the custom App file by corresponding `.jsx` extension
3) Name of package in `package.json` (does not impact anything, but is a difference)

# Success 2

The [Success-2](./success-2) package is the exact same as `Fail` with the following exceptions:

1) The "root" `package.json` omits `"type":"module"`

# Success 3

The [Success-3](./success-3) package is the exact same as `Fail` with the following exceptions:

1) The `next.config.js` removes `future.webpack5` from the config

# Expectation

The Fail package should work just like Successes 1-3, meaning that `.js` files in `"type":"module"` packages should be properly transpiled via webpack5.

