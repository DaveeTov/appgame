# AppGame

## Requisitos
- Node.js v20.19.5
- npm v10.8.2
- Angular CLI v19.2.17

## Versiones de Angular y dependencias
```

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/
    

Angular CLI: 19.2.17
Node: 20.19.5
Package Manager: npm 10.8.2
OS: linux x64

Angular: 19.2.15
... common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1902.17
@angular-devkit/build-angular   19.2.17
@angular-devkit/core            19.2.17
@angular-devkit/schematics      19.2.17
@angular/cli                    19.2.17
@schematics/angular             19.2.17
rxjs                            7.8.2
typescript                      5.7.3
zone.js                         0.15.1
    
```

## Dependencias del proyecto (package.json)
```
app@0.0.0 /home/david/proyecto/app
├── @angular-devkit/build-angular@19.2.17
├── @angular/cli@19.2.17
├── @angular/common@19.2.15
├── @angular/compiler-cli@19.2.15
├── @angular/compiler@19.2.15
├── @angular/core@19.2.15
├── @angular/forms@19.2.15
├── @angular/platform-browser-dynamic@19.2.15
├── @angular/platform-browser@19.2.15
├── @angular/router@19.2.15
├── @primeng/themes@19.1.2
├── @types/jasmine@5.1.9
├── jasmine-core@5.6.0
├── karma-chrome-launcher@3.2.0
├── karma-coverage@2.2.1
├── karma-jasmine-html-reporter@2.1.0
├── karma-jasmine@5.1.0
├── karma@6.4.4
├── primeflex@4.0.0
├── primeicons@7.0.0
├── primeng@19.1.4
├── rxjs@7.8.2
├── tslib@2.8.1
├── typescript@5.7.3
└── zone.js@0.15.1

```

## Instalación
1. Clonar el repositorio:
   git clone https://github.com/DaveeTov/appgame.git
   cd appgame
2. Instalar dependencias:
   npm install
3. Ejecutar la aplicación:
   ng serve
   La app se levanta en http://localhost:4200
## Estructura de archivos
```
.
├── README.md
├── angular.json
├── estructura.txt
├── node_modules
│   ├── @ampproject
│   ├── @angular
│   ├── @angular-devkit
│   ├── @babel
│   ├── @colors
│   ├── @discoveryjs
│   ├── @esbuild
│   ├── @inquirer
│   ├── @isaacs
│   ├── @istanbuljs
│   ├── @jridgewell
│   ├── @jsonjoy.com
│   ├── @leichtgewicht
│   ├── @listr2
│   ├── @lmdb
│   ├── @msgpackr-extract
│   ├── @napi-rs
│   ├── @ngtools
│   ├── @nodelib
│   ├── @npmcli
│   ├── @parcel
│   ├── @pkgjs
│   ├── @primeng
│   ├── @primeuix
│   ├── @rollup
│   ├── @schematics
│   ├── @sigstore
│   ├── @sindresorhus
│   ├── @socket.io
│   ├── @tufjs
│   ├── @types
│   ├── @vitejs
│   ├── @webassemblyjs
│   ├── @xtuc
│   ├── @yarnpkg
│   ├── abbrev
│   ├── accepts
│   ├── acorn
│   ├── adjust-sourcemap-loader
│   ├── agent-base
│   ├── ajv
│   ├── ajv-formats
│   ├── ajv-keywords
│   ├── ansi-colors
│   ├── ansi-escapes
│   ├── ansi-html-community
│   ├── ansi-regex
│   ├── ansi-styles
│   ├── anymatch
│   ├── argparse
│   ├── array-flatten
│   ├── autoprefixer
│   ├── babel-loader
│   ├── babel-plugin-polyfill-corejs2
│   ├── babel-plugin-polyfill-corejs3
│   ├── babel-plugin-polyfill-regenerator
│   ├── balanced-match
│   ├── base64-js
│   ├── base64id
│   ├── baseline-browser-mapping
│   ├── batch
│   ├── beasties
│   ├── big.js
│   ├── binary-extensions
│   ├── bl
│   ├── body-parser
│   ├── bonjour-service
│   ├── boolbase
│   ├── brace-expansion
│   ├── braces
│   ├── browserslist
│   ├── buffer
│   ├── buffer-from
│   ├── bundle-name
│   ├── bytes
│   ├── cacache
│   ├── call-bind-apply-helpers
│   ├── call-bound
│   ├── callsites
│   ├── caniuse-lite
│   ├── chalk
│   ├── chardet
│   ├── chokidar
│   ├── chownr
│   ├── chrome-trace-event
│   ├── cli-cursor
│   ├── cli-spinners
│   ├── cli-truncate
│   ├── cli-width
│   ├── cliui
│   ├── clone
│   ├── clone-deep
│   ├── color-convert
│   ├── color-name
│   ├── colorette
│   ├── commander
│   ├── common-path-prefix
│   ├── compressible
│   ├── compression
│   ├── concat-map
│   ├── connect
│   ├── connect-history-api-fallback
│   ├── content-disposition
│   ├── content-type
│   ├── convert-source-map
│   ├── cookie
│   ├── cookie-signature
│   ├── copy-anything
│   ├── copy-webpack-plugin
│   ├── core-js-compat
│   ├── core-util-is
│   ├── cors
│   ├── cosmiconfig
│   ├── cross-spawn
│   ├── css-loader
│   ├── css-select
│   ├── css-what
│   ├── cssesc
│   ├── custom-event
│   ├── date-format
│   ├── debug
│   ├── default-browser
│   ├── default-browser-id
│   ├── defaults
│   ├── define-lazy-prop
│   ├── depd
│   ├── destroy
│   ├── detect-libc
│   ├── detect-node
│   ├── di
│   ├── dns-packet
│   ├── dom-serialize
│   ├── dom-serializer
│   ├── domelementtype
│   ├── domhandler
│   ├── domutils
│   ├── dunder-proto
│   ├── eastasianwidth
│   ├── ee-first
│   ├── electron-to-chromium
│   ├── emoji-regex
│   ├── emojis-list
│   ├── encodeurl
│   ├── encoding
│   ├── engine.io
│   ├── engine.io-parser
│   ├── enhanced-resolve
│   ├── ent
│   ├── entities
│   ├── env-paths
│   ├── environment
│   ├── err-code
│   ├── errno
│   ├── error-ex
│   ├── es-define-property
│   ├── es-errors
│   ├── es-module-lexer
│   ├── es-object-atoms
│   ├── esbuild
│   ├── esbuild-wasm
│   ├── escalade
│   ├── escape-html
│   ├── eslint-scope
│   ├── esrecurse
│   ├── estraverse
│   ├── esutils
│   ├── etag
│   ├── eventemitter3
│   ├── events
│   ├── exponential-backoff
│   ├── express
│   ├── extend
│   ├── fast-deep-equal
│   ├── fast-glob
│   ├── fast-uri
│   ├── fastq
│   ├── faye-websocket
│   ├── fdir
│   ├── fill-range
│   ├── finalhandler
│   ├── find-cache-dir
│   ├── find-up
│   ├── flat
│   ├── flatted
│   ├── follow-redirects
│   ├── foreground-child
│   ├── forwarded
│   ├── fraction.js
│   ├── fresh
│   ├── fs-extra
│   ├── fs-minipass
│   ├── fs.realpath
│   ├── function-bind
│   ├── gensync
│   ├── get-caller-file
│   ├── get-east-asian-width
│   ├── get-intrinsic
│   ├── get-proto
│   ├── glob
│   ├── glob-parent
│   ├── glob-to-regex.js
│   ├── glob-to-regexp
│   ├── globby
│   ├── gopd
│   ├── graceful-fs
│   ├── handle-thing
│   ├── has-flag
│   ├── has-symbols
│   ├── has-tostringtag
│   ├── hasown
│   ├── hosted-git-info
│   ├── hpack.js
│   ├── html-escaper
│   ├── htmlparser2
│   ├── http-cache-semantics
│   ├── http-deceiver
│   ├── http-errors
│   ├── http-parser-js
│   ├── http-proxy
│   ├── http-proxy-agent
│   ├── http-proxy-middleware
│   ├── https-proxy-agent
│   ├── hyperdyperid
│   ├── iconv-lite
│   ├── icss-utils
│   ├── ieee754
│   ├── ignore
│   ├── ignore-walk
│   ├── image-size
│   ├── immutable
│   ├── import-fresh
│   ├── imurmurhash
│   ├── inflight
│   ├── inherits
│   ├── ini
│   ├── ip-address
│   ├── ipaddr.js
│   ├── is-arrayish
│   ├── is-binary-path
│   ├── is-core-module
│   ├── is-docker
│   ├── is-extglob
│   ├── is-fullwidth-code-point
│   ├── is-glob
│   ├── is-inside-container
│   ├── is-interactive
│   ├── is-network-error
│   ├── is-number
│   ├── is-plain-obj
│   ├── is-plain-object
│   ├── is-regex
│   ├── is-unicode-supported
│   ├── is-what
│   ├── is-wsl
│   ├── isarray
│   ├── isbinaryfile
│   ├── isexe
│   ├── isobject
│   ├── istanbul-lib-coverage
│   ├── istanbul-lib-instrument
│   ├── istanbul-lib-report
│   ├── istanbul-lib-source-maps
│   ├── istanbul-reports
│   ├── jackspeak
│   ├── jasmine-core
│   ├── jest-worker
│   ├── jiti
│   ├── js-tokens
│   ├── js-yaml
│   ├── jsesc
│   ├── json-parse-even-better-errors
│   ├── json-schema-traverse
│   ├── json5
│   ├── jsonc-parser
│   ├── jsonfile
│   ├── jsonparse
│   ├── karma
│   ├── karma-chrome-launcher
│   ├── karma-coverage
│   ├── karma-jasmine
│   ├── karma-jasmine-html-reporter
│   ├── karma-source-map-support
│   ├── kind-of
│   ├── launch-editor
│   ├── less
│   ├── less-loader
│   ├── license-webpack-plugin
│   ├── lines-and-columns
│   ├── listr2
│   ├── lmdb
│   ├── loader-runner
│   ├── loader-utils
│   ├── locate-path
│   ├── lodash
│   ├── lodash.debounce
│   ├── log-symbols
│   ├── log-update
│   ├── log4js
│   ├── lru-cache
│   ├── magic-string
│   ├── make-dir
│   ├── make-fetch-happen
│   ├── math-intrinsics
│   ├── media-typer
│   ├── memfs
│   ├── merge-descriptors
│   ├── merge-stream
│   ├── merge2
│   ├── methods
│   ├── micromatch
│   ├── mime
│   ├── mime-db
│   ├── mime-types
│   ├── mimic-fn
│   ├── mimic-function
│   ├── mini-css-extract-plugin
│   ├── minimalistic-assert
│   ├── minimatch
│   ├── minimist
│   ├── minipass
│   ├── minipass-collect
│   ├── minipass-fetch
│   ├── minipass-flush
│   ├── minipass-pipeline
│   ├── minipass-sized
│   ├── minizlib
│   ├── mkdirp
│   ├── mrmime
│   ├── ms
│   ├── msgpackr
│   ├── msgpackr-extract
│   ├── multicast-dns
│   ├── mute-stream
│   ├── nanoid
│   ├── needle
│   ├── negotiator
│   ├── neo-async
│   ├── node-addon-api
│   ├── node-forge
│   ├── node-gyp
│   ├── node-gyp-build-optional-packages
│   ├── node-releases
│   ├── nopt
│   ├── normalize-path
│   ├── normalize-range
│   ├── npm-bundled
│   ├── npm-install-checks
│   ├── npm-normalize-package-bin
│   ├── npm-package-arg
│   ├── npm-packlist
│   ├── npm-pick-manifest
│   ├── npm-registry-fetch
│   ├── nth-check
│   ├── object-assign
│   ├── object-inspect
│   ├── obuf
│   ├── on-finished
│   ├── on-headers
│   ├── once
│   ├── onetime
│   ├── open
│   ├── ora
│   ├── ordered-binary
│   ├── p-limit
│   ├── p-locate
│   ├── p-map
│   ├── p-retry
│   ├── package-json-from-dist
│   ├── pacote
│   ├── parent-module
│   ├── parse-json
│   ├── parse-node-version
│   ├── parse5
│   ├── parse5-html-rewriting-stream
│   ├── parse5-sax-parser
│   ├── parseurl
│   ├── path-exists
│   ├── path-is-absolute
│   ├── path-key
│   ├── path-parse
│   ├── path-scurry
│   ├── path-to-regexp
│   ├── path-type
│   ├── picocolors
│   ├── picomatch
│   ├── pify
│   ├── piscina
│   ├── pkg-dir
│   ├── postcss
│   ├── postcss-loader
│   ├── postcss-media-query-parser
│   ├── postcss-modules-extract-imports
│   ├── postcss-modules-local-by-default
│   ├── postcss-modules-scope
│   ├── postcss-modules-values
│   ├── postcss-selector-parser
│   ├── postcss-value-parser
│   ├── primeflex
│   ├── primeicons
│   ├── primeng
│   ├── proc-log
│   ├── process-nextick-args
│   ├── promise-retry
│   ├── proxy-addr
│   ├── prr
│   ├── punycode
│   ├── qjobs
│   ├── qs
│   ├── queue-microtask
│   ├── randombytes
│   ├── range-parser
│   ├── raw-body
│   ├── readable-stream
│   ├── readdirp
│   ├── reflect-metadata
│   ├── regenerate
│   ├── regenerate-unicode-properties
│   ├── regenerator-runtime
│   ├── regex-parser
│   ├── regexpu-core
│   ├── regjsgen
│   ├── regjsparser
│   ├── require-directory
│   ├── require-from-string
│   ├── requires-port
│   ├── resolve
│   ├── resolve-from
│   ├── resolve-url-loader
│   ├── restore-cursor
│   ├── retry
│   ├── reusify
│   ├── rfdc
│   ├── rimraf
│   ├── rollup
│   ├── run-applescript
│   ├── run-parallel
│   ├── rxjs
│   ├── safe-buffer
│   ├── safe-regex-test
│   ├── safer-buffer
│   ├── sass
│   ├── sass-loader
│   ├── sax
│   ├── schema-utils
│   ├── select-hose
│   ├── selfsigned
│   ├── semver
│   ├── send
│   ├── serialize-javascript
│   ├── serve-index
│   ├── serve-static
│   ├── setprototypeof
│   ├── shallow-clone
│   ├── shebang-command
│   ├── shebang-regex
│   ├── shell-quote
│   ├── side-channel
│   ├── side-channel-list
│   ├── side-channel-map
│   ├── side-channel-weakmap
│   ├── signal-exit
│   ├── sigstore
│   ├── slash
│   ├── slice-ansi
│   ├── smart-buffer
│   ├── socket.io
│   ├── socket.io-adapter
│   ├── socket.io-parser
│   ├── sockjs
│   ├── socks
│   ├── socks-proxy-agent
│   ├── source-map
│   ├── source-map-js
│   ├── source-map-loader
│   ├── source-map-support
│   ├── spdx-correct
│   ├── spdx-exceptions
│   ├── spdx-expression-parse
│   ├── spdx-license-ids
│   ├── spdy
│   ├── spdy-transport
│   ├── ssri
│   ├── statuses
│   ├── streamroller
│   ├── string-width
│   ├── string-width-cjs
│   ├── string_decoder
│   ├── strip-ansi
│   ├── strip-ansi-cjs
│   ├── supports-color
│   ├── supports-preserve-symlinks-flag
│   ├── symbol-observable
│   ├── tapable
│   ├── tar
│   ├── terser
│   ├── terser-webpack-plugin
│   ├── thingies
│   ├── thunky
│   ├── tinyglobby
│   ├── tmp
│   ├── to-regex-range
│   ├── toidentifier
│   ├── tree-dump
│   ├── tree-kill
│   ├── tslib
│   ├── tuf-js
│   ├── type-is
│   ├── typed-assert
│   ├── typescript
│   ├── ua-parser-js
│   ├── undici-types
│   ├── unicode-canonical-property-names-ecmascript
│   ├── unicode-match-property-ecmascript
│   ├── unicode-match-property-value-ecmascript
│   ├── unicode-property-aliases-ecmascript
│   ├── unicorn-magic
│   ├── unique-filename
│   ├── unique-slug
│   ├── universalify
│   ├── unpipe
│   ├── update-browserslist-db
│   ├── util-deprecate
│   ├── utils-merge
│   ├── uuid
│   ├── validate-npm-package-license
│   ├── validate-npm-package-name
│   ├── vary
│   ├── vite
│   ├── void-elements
│   ├── watchpack
│   ├── wbuf
│   ├── wcwidth
│   ├── weak-lru-cache
│   ├── webpack
│   ├── webpack-dev-middleware
│   ├── webpack-dev-server
│   ├── webpack-merge
│   ├── webpack-sources
│   ├── webpack-subresource-integrity
│   ├── websocket-driver
│   ├── websocket-extensions
│   ├── which
│   ├── wildcard
│   ├── wrap-ansi
│   ├── wrap-ansi-cjs
│   ├── wrappy
│   ├── ws
│   ├── y18n
│   ├── yallist
│   ├── yargs
│   ├── yargs-parser
│   ├── yocto-queue
│   ├── yoctocolors-cjs
│   └── zone.js
├── package-lock.json
├── package.json
├── public
│   └── favicon.ico
├── requirements.txt
├── src
│   ├── app
│   ├── assets
│   ├── index.html
│   ├── main.ts
│   └── styles.css
├── tsconfig.app.json
├── tsconfig.json
└── tsconfig.spec.json

560 directories, 13 files
```
