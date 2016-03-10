https://github.com/joeeames/webpackfundamentalscourse

cli: npm install webpack -g

##from command line
cli: webpack ./app.js bundle.js

cli: npm install webpack-dev-server -g

##Start server:
cli: webpack-dev-server

##To remove webpack status bar
cli: webpack-dev-server --inline

## To minimize files
cli: webpack -p